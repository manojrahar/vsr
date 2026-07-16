"use client";

import React, { createContext, useContext } from "react";

// Stub for SoundSynth to prevent compilation errors
export class SoundSynth {
  public static setMute(muted: boolean) {}
  public static playHover() {}
  public static playClick() {}
  public static playUnlock() {}
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

export function GameSystemProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameSystemContext.Provider
      value={{
        xp: 0,
        level: 1,
        isMuted: true,
        unlockedList: [],
        toggleMute: () => {},
        unlockAchievement: () => {},
        playHover: () => {},
        playClick: () => {}
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
