"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Web Audio API Synthesizer Class for SFX without assets
export class SoundSynth {
  private static audioCtx: AudioContext | null = null;
  private static isMuted = false;

  private static getContext(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public static setMute(muted: boolean) {
    this.isMuted = muted;
  }

  public static playHover() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  public static playClick() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(500, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  }

  public static playUnlock() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      
      // Ascending major arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const duration = 0.085;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(freq, now + idx * duration);

        gain.gain.setValueAtTime(0.02, now + idx * duration);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (idx + 1) * duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * duration);
        osc.stop(now + (idx + 1) * duration);
      });
    } catch (e) {}
  }
}

interface Achievement {
  id: string;
  title: string;
  xp: number;
}

interface AchievementPopup extends Achievement {
  popupId: string;
}

interface GameSystemContextType {
  xp: number;
  level: number;
  isMuted: boolean;
  unlockedList: string[];
  toggleMute: () => void;
  unlockAchievement: (id: string) => void;
  playHover: () => void;
  playClick: () => void;
}

const GameSystemContext = createContext<GameSystemContextType | undefined>(undefined);

const ACHIEVEMENTS: Record<string, Achievement> = {
  welcome: { id: "welcome", title: "Welcome Player One", xp: 100 },
  search: { id: "search", title: "Query Master", xp: 50 },
  filter: { id: "filter", title: "Filter Wizard", xp: 50 },
  webgl: { id: "webgl", title: "WebGL Explorer", xp: 150 }
};

export function GameSystemProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const savedMute = localStorage.getItem("hud_muted");
      if (savedMute) {
        const muted = savedMute === "true";
        setIsMuted(muted);
        SoundSynth.setMute(muted);
      }
    } catch (e) {}
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("hud_muted", String(next));
      SoundSynth.setMute(next);
      return next;
    });
  };

  const unlockAchievement = (id: string) => {
    // No-op: achievement/XP leveling features disabled.
  };

  const playHover = () => SoundSynth.playHover();
  const playClick = () => SoundSynth.playClick();

  return (
    <GameSystemContext.Provider
      value={{
        xp: 0,
        level: 1,
        isMuted,
        unlockedList: [],
        toggleMute,
        unlockAchievement,
        playHover,
        playClick
      }}
    >
      {children}
    </GameSystemContext.Provider>
  );
}

export function useGameSystem() {
  const context = useContext(GameSystemContext);
  if (!context) {
    throw new Error("useGameSystem must be used within a GameSystemProvider");
  }
  return context;
}
