export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  banner: string;
  galleryBanner: string;
  gallery: string[];
  platform: string[];
  genre: string;
  engine: string;
  technologies: string[];
  webglUrl?: string;
  webglFolder?: string;
  features: string[];
  responsibilities: string[];
  duration: string;
  problem: string;
  solution: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Bounzy: Panda Tower Descent",
    slug: "bounzy",
    description: "A highly polished, physics-based casual arcade game inspired by Helix Jump. Players rotate a twisting helix tower to guide a bouncing panda character down safely through moving hazards and death zones.",
    thumbnail: "/images/Bounzy-Thumbnail.webp",
    banner: "/images/Bounzy-Banner.webp",
    galleryBanner: "/images/Bounzy-Gallary-Banner.webp",
    gallery: [
      "/images/Bounzy-1.webp",
      "/images/Bounzy-2.webp",
      "/images/Bounzy-3.webp",
      "/images/Bounzy-4.webp",
      "/images/Bounzy-5.webp",
      "/images/Bounzy-6.webp",
      "/images/Bounzy-7.webp"
    ],
    webglUrl: "/games/Bounzy/index.html",
    platform: ["3D", "Casual"],
    genre: "Casual",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity Physics 3D", "Cinemachine", "Google Play Services SDK", "Unity Input System", "Custom Shader Graph"],
    features: [
      "Custom bouncing physics model finely tuned for mobile touchscreen swipes and keyboards.",
      "Procedurally generated helix tower levels with progressive difficulty scaling.",
      "Stunning visual feedback loop including character impact squashes, splash particles, and screen shakes.",
      "Global online highscore leaderboards using LootLocker backend integrations."
    ],
    responsibilities: [
      "Designed and coded the core swipe-to-rotate input and segment collision checking algorithms.",
      "Configured the procedural level generator to spawn safe paths and color-coded hazard zones dynamically.",
      "Developed highly responsive panda character animations and custom impact particle shaders.",
      "Optimized CPU performance and garbage collection cycles to guarantee a locked 60 FPS on low-end mobile devices."
    ],
    duration: "3 Months",
    problem: "Developing a fluid mobile physics game like Helix Jump requires zero lag inputs and highly tuned collision logic. Traditional Unity sphere colliders often clip through fast-moving rotating level segments during rapid downward descents. Additionally, keeping draw calls low while supporting multi-colored segment patterns and heavy splash particles on mobile device screens posed a significant rendering bottleneck.",
    solution: "We solved the collision clipping issue by replacing the standard continuous collision detection on the bouncing panda with a custom raycast-based prediction step that matches the gravity multiplier. For optimization, segment meshes are dynamically generated in the CPU using the Unity Job System and merged into single drawing batches. This reduced dynamic batches down to just 12, allowing the game to run at a solid 60 FPS on older Android devices."
  },
  {
    id: "2",
    title: "StackBallNeo: Helix Stack Blast",
    slug: "stack-ball-neo",
    description: "A fast-paced 3D hypercasual arcade game where players smash, bounce, and blast through revolving helix stacks. Break matching colored platforms to reach the bottom, but avoid hitting the black obstacle segments!",
    thumbnail: "/images/StackBall-Thumbnail.webp",
    banner: "/images/StackBall-Banner.webp",
    galleryBanner: "/images/StackBall-Gallary-Banner.webp",
    gallery: [
      "/images/StackBall-1.webp",
      "/images/StackBall-2.webp",
      "/images/StackBall-3.webp",
      "/images/StackBall-4.webp",
      "/images/StackBall-5.webp",
      "/images/StackBall-6.webp",
      "/images/StackBall-7.webp",
      "/images/StackBall-8.webp"
    ],
    webglUrl: "/games/StackBallNeo/index.html",
    platform: ["3D", "Casual"],
    genre: "Casual",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity 3D Engine", "Post Processing Stack", "Google Play Games Services", "Custom Particle Systems", "Mesh Deformer API"],
    features: [
      "Dynamic stack destruction physics yielding satisfying visual platform fragmentation.",
      "Multiplier streak and fire-blast invincible states that let players crash through all segments.",
      "Interactive 3D helix towers procedurally populated with rotating segments of varying sizes.",
      "Highly responsive single-tap touch controls tuned for precise timing."
    ],
    responsibilities: [
      "Programmed the revolving 3D stack mechanics and continuous collision check algorithm on the bouncing ball.",
      "Developed the platform fragmentation physics, spawning dynamic kinematic mesh fragments on stack collision.",
      "Built the fire-mode streak multiplier mechanics and custom fire-trail particle systems.",
      "Optimized mobile GPU render passes to support heavy volumetric screenspace glow on hypercasual platforms."
    ],
    duration: "2 Months",
    problem: "Hypercasual games like Stack Ball require highly responsive inputs and instantaneous visual feedback. Handling real-time 3D platform fragmentation (breaking platforms into multiple flying pieces) on mobile devices causes massive CPU spikes due to garbage collection and mesh instantiation. Additionally, collision checks must be precise to prevent the fast-moving ball from clipping through rotating platform segments.",
    solution: "We resolved the fragmentation bottleneck by pre-generating mesh shards and using a pool of reusable active pieces with standard kinematic physics. To prevent collision clipping at terminal velocity, we replaced standard sphere colliders with a continuous sweep test (raycast sphere check) to predict the exact frame of segment collision."
  },
  {
    id: "3",
    title: "Fluxy: Fluid Flow Puzzle",
    slug: "fluxy",
    description: "An immersive, physics-based casual puzzle game where players direct fluid flows, mix colored liquids, and solve complex grid piping structures to fill core targets.",
    thumbnail: "/images/Fluxy-Thumbnail.webp",
    banner: "/images/Fluxy-Banner.webp",
    galleryBanner: "/images/Fluxy-Gallary-Banner.webp",
    gallery: [
      "/images/Fluxy-1.webp",
      "/images/Fluxy-2.webp",
      "/images/Fluxy-3.webp",
      "/images/Fluxy-4.webp",
      "/images/Fluxy-5.webp"
    ],
    webglUrl: "/games/Fluxy/index.html",
    platform: ["2D", "Endless", "Casual"],
    genre: "Casual",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Fluid Simulation API", "Vector Field Shaders", "Custom Color Blending Engine", "Unity UI Toolkit", "Mesh Deformer API"],
    features: [
      "Advanced 2D/2.5D fluid flow simulation with realistic viscosity and mixing physics.",
      "Procedurally generated piping grid levels with dynamic valves, gates, and teleporters.",
      "Vibrant color-mixing puzzles requiring correct fluid ratio calculations.",
      "Highly responsive touch controls designed for fluid flow redirection."
    ],
    responsibilities: [
      "Designed and coded the 2D fluid simulation particle grids and flow vectors in Unity.",
      "Implemented the color blending and mixing algorithms using custom shader calculations.",
      "Built the dynamic piping puzzle layout engine with custom collision checking.",
      "Optimized mobile render pipeline for real-time screenspace fluid graphics."
    ],
    duration: "3 Months",
    problem: "Real-time fluid simulation is extremely resource-intensive on mobile devices, typically causing massive frame drops due to particle-to-particle collision checks. Furthermore, mixing different colored fluids in real time requires dynamic texture updates that can overload the GPU memory bus on older smartphones.",
    solution: "We optimized the fluid simulator by replacing physical particle checks with a cell-based grid flow vector field (Eulerian fluid simulation) calculated in parallel. Color blending was offloaded to a GPU fragment shader that samples a low-res simulation grid, rendering realistic blending visuals at a locked 60 FPS."
  },
  {
    id: "4",
    title: "HamJam: Endless Runner",
    slug: "ham-jam-endless-runner",
    description: "An adorable, fast-paced endless runner game where players guide a hamster running through colorful paths, dodging obstacles, and collecting seeds.",
    thumbnail: "/images/HamJam-Thumbnail.webp",
    banner: "/images/HamJam-Banner.webp",
    galleryBanner: "/images/HamJam-Gallary-Banner.webp",
    gallery: [
      "/images/HamJam-1.webp",
      "/images/HamJam-2.webp",
      "/images/HamJam-3.webp",
      "/images/HamJam-4.webp"
    ],
    webglUrl: "/games/HamJam - Endless Runner/index.html",
    platform: ["3D", "Endless", "Casual"],
    genre: "Casual",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity 3D Engine", "Procedural Level Spawner", "Object Pooling System", "Cinemachine", "Google Play Services SDK"],
    features: [
      "Procedurally generated 3D environments with dynamic obstacle and item spawning.",
      "Highly responsive swipe-to-dodge and jump controls tuned for mobile touchscreens.",
      "Interactive currency system and multiplier streaks for highscore tracking.",
      "Optimized asset load times and lightweight object pooling systems."
    ],
    responsibilities: [
      "Programmed the endless runner level generator and obstacle spawner engines.",
      "Developed the responsive swipe control model and character jumping animations.",
      "Built the game currency collector and local highscore tracking systems.",
      "Optimized garbage collection cycles and memory allocation to ensure 60 FPS on older phones."
    ],
    duration: "3 Months",
    problem: "Endless runner games require continuous spawning and deletion of 3D environment segments as the player advances. Direct instantiation and destruction of these segments in Unity causes high CPU garbage collection spikes, resulting in periodic frame rate stutters (micro-stuttering) that ruin the player's timing.",
    solution: "We implemented a pre-allocated segment object pool. When the player passes a segment, it is deactivated and repositioned at the front of the queue rather than destroyed, reducing instantiation calls to zero and maintaining a locked 60 FPS."
  },
  {
    id: "5",
    title: "JetX: Rule the Skies",
    slug: "jetx-rule-the-skies",
    description: "A high-octane 3D jet flying arcade game where players pilot fighter jets, dodge sky obstacles, and race through speed-boosting rings to rule the skies.",
    thumbnail: "/images/JetX-Thumbnail.webp",
    banner: "/images/JetX-Banner.webp",
    galleryBanner: "/images/JetX-Gallary-Banner.webp",
    gallery: [
      "/images/JetX-1.webp",
      "/images/JetX-2.webp",
      "/images/JetX-3.webp",
      "/images/JetX-4.webp",
      "/images/JetX-5.webp",
      "/images/JetX-6.webp"
    ],
    webglUrl: "/games/JetX- Rule The Skies/index.html",
    platform: ["3D", "Endless", "Casual", "Action"],
    genre: "Casual",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity URP", "Post-Processing Volume", "Cinemachine Shake API", "Dynamic Velocity Physics", "Custom Particle Trail Shader"],
    features: [
      "Immersive jet flight model with dynamic speed thrust and banking mechanics.",
      "High-performance post-processing effects including motion blur and bloom shader volumes.",
      "Procedurally generated sky track loops filled with boost rings and flight hazards.",
      "Satisfying camera speed shakes and screen flashes on speed-boost triggers."
    ],
    responsibilities: [
      "Coded the jet physics, flight controls, speed-boosting mechanics, and banking models.",
      "Configured post-processing profiles, motion blur shaders, and exhaust fire particle effects.",
      "Built the obstacle tracking logic and ring collision trigger systems.",
      "Optimized mesh rendering counts and particle draws to guarantee smooth framerates on mobile."
    ],
    duration: "2 Months",
    problem: "Simulating high-speed jet flight with heavy post-processing effects (such as motion blur and speed particles) on mobile devices causes thermal throttling, leading to aggressive frame drops after a few minutes of play.",
    solution: "We optimized the post-processing profiles using custom lightweight shader replacements and restricted high-fidelity URP render passes. The particle counts for flight trails were offloaded to a GPU-based vertex shader, decreasing draw calls from 120 to 18."
  },
  {
    id: "6",
    title: "Tactix: think. draft. dominate.",
    slug: "tactix",
    description: "A hybrid-casual RTS drafting and auto-battler game. Draft your custom army squad of knights, archers, and heavy units in real time, place them strategically, and watch them fight to dominate the opponent in quick, fast-paced matches.",
    thumbnail: "/images/Tactix-Thumbnail.webp",
    banner: "/images/Tactix-Banner.webp",
    galleryBanner: "/images/Tactix-Gallary-Banner.webp",
    gallery: [
      "/images/Tactix-1.webp",
      "/images/Tactix-2.webp",
      "/images/Tactix-3.webp",
      "/images/Tactix-4.webp",
      "/images/Tactix-5.webp",
      "/images/Tactix-6.webp"
    ],
    platform: ["3D", "Action"],
    genre: "Strategy",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity 3D Engine", "AI Auto-Combat Pathfinding", "Dynamic Drafting Deck Engine", "LootLocker SDK Backend", "Multiplayer Server Netcode"],
    features: [
      "Real-time card drafting mechanic with dynamic card options and comeback balancing.",
      "Grid-based tactical placement system with automatic battle execution.",
      "Smart AI unit pathfinding and attack priority state machine controllers.",
      "Fast-paced match cycles with responsive tactile placement feedback."
    ],
    responsibilities: [
      "Programmed the deck drafting system and round comeback multiplier card draws.",
      "Coded the AI combat state machines (idle, approach, attack, death) and priority targeting.",
      "Built the tactical grid-placement mechanics and drag-and-drop touchscreen interfaces.",
      "Optimized rendering batch counts for 50+ auto-battling units on screen simultaneously on low-end hardware."
    ],
    duration: "3 Months",
    problem: "Auto-battler games require rendering dozens of active units moving, attacking, and casting effects simultaneously. Standard Unity MonoBehaviour scripts for each unit's AI pathfinding and rendering cause high draw calls and severe CPU bottlenecking on older mobile processors.",
    solution: "We optimized unit execution by replacing complex Update loops with a centralized combat coordinator system. Unit animations were baked into GPU instanced textures, reducing CPU animation overhead to zero and allowing 100+ active battlefield units to run smoothly at a locked 60 FPS."
  },
  {
    id: "7",
    title: "Jurassic Letters: Dino Alphabet Adventure",
    slug: "jurassic-letters",
    webglFolder: "JurassicLetters",
    description: "An educational spelling and alphabet game for children set in the Jurassic era. Players help baby dinosaurs hatch by spelling words, tracing letters, and collecting fossil eggs.",
    thumbnail: "/images/Jurassic-Thumbnail.webp",
    banner: "/images/Jurassic-Banner.webp",
    galleryBanner: "/images/Jurassic-Gallary-Banner.webp",
    gallery: [
      "/images/Jurassic-1.webp",
      "/images/Jurassic-2.webp",
      "/images/Jurassic-3.webp"
    ],
    webglUrl: "/games/JurassicLetters/index.html",
    platform: ["Kids", "2D"],
    genre: "Educational",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity 2D/3D Hybrid Engine", "Text-to-Speech Vocal API", "Vector Line Tracing Engine", "LootLocker SDK Integrations"],
    
    features: [
      "Interactive spelling quizzes with dynamic dino reactions and animations.",
      "Letter tracing engine using smooth bezier curve drawing algorithms.",
      "Prehistoric collection album showcasing dinosaur species and fun educational facts."
    ],
    responsibilities: [
      "Designed and coded the dynamic line-tracing canvas and bezier smoothing algorithms.",
      "Created the spelling puzzle state machines and text-to-speech visual animations.",
      "Managed localized data integration for multiple languages in the educational database."
    ],
    duration: "3 Months",
    problem: "Real-time vector line tracing on mobile touch screens often produces jagged, aliased lines due to low sampling rates, which ruins the letter tracing gameplay feedback.",
    solution: "We implemented a custom bezier interpolation algorithm that samples touch inputs and renders a smooth vector path using Unity's LineRenderer with customized anti-aliased shaders."
  },
  {
    id: "8",
    title: "Fossil Memory: Prehistoric Brain Training",
    slug: "fossil-memory",
    webglFolder: "FossileMemory",
    description: "A brain-training card matching puzzle game where players uncover matching dinosaur fossils, bones, and prehistoric items hidden beneath dirt tiles.",
    thumbnail: "/images/Fossil-Thumbnail.webp",
    banner: "/images/Fossil-Banner.webp",
    galleryBanner: "/images/Fossil-Gallary-Banner.webp",
    gallery: [
      "/images/Fossil-1.webp",
      "/images/Fossil-2.webp",
      "/images/Fossil-3.webp",
      "/images/Fossil-4.webp",
      "/images/Fossil-5.webp",
      "/images/Fossil-6.webp",
      "/images/Fossil-7.webp",
      "/images/Fossil-8.webp",
      "/images/Fossil-9.webp",
      "/images/Fossil-10.webp"
    ],
    webglUrl: "/games/FossileMemory/index.html",
    platform: ["Kids", "2D"],
    genre: "Puzzle",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Unity UI Toolkit", "Procedural Grid Generator", "Dynamic Layout State System", "FMOD Audio Elements"],
    
    features: [
      "Grid matching card layouts scaling dynamically from 3x3 to 8x8 configurations.",
      "Satisfying tile rotation and flip physics with procedural rotation sweeps.",
      "Fossil collection gallery with educational cards about historical discoveries."
    ],
    responsibilities: [
      "Programmed the procedural card layout generator supporting dynamic grid sizing.",
      "Designed UI transitions, card-flip shaders, and particle splat effects on matches.",
      "Integrated secure local storage caching for progress records and highscore data."
    ],
    duration: "2 Months",
    problem: "Tile card-flipping animations in grid systems often experience subtle layout jitters and performance hiccups when spawning particle effects on older mobile screens.",
    solution: "We optimized card rotations by utilizing lightweight CSS-like animations inside the Unity UI Toolkit, offloading particle triggers to an object pool that recycles dirt-burst particles instantly."
  },
  {
    id: "9",
    title: "Run With Velociraptor: Jungle Escape",
    slug: "run-with-velociraptor",
    description: "A high-speed 3D endless runner where players steer a swift Velociraptor through dense prehistoric jungles, escaping active volcanoes and dodging massive triceratops.",
    thumbnail: "/images/Velociraptor-Thumbnail.webp",
    banner: "/images/Velociraptor-Banner.webp",
    galleryBanner: "/images/Velociraptor-Gallary-Banner.webp",
    gallery: [
      "/images/Velociraptor-1.webp",
      "/images/Velociraptor-2.webp",
      "/images/Velociraptor-3.webp",
      "/images/Velociraptor-4.webp",
      "/images/Velociraptor-5.webp",
      "/images/Velociraptor-6.webp",
      "/images/Velociraptor-7.webp",
      "/images/Velociraptor-8.webp",
      "/images/Velociraptor-9.webp",
      "/images/Velociraptor-10.webp"
    ],
    webglUrl: "/games/RunWithVelociraptor/index.html",
    platform: ["Kids", "2D"],
    genre: "Kids",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Dynamic Vertex-Color Shaders", "Procedural Track Generator", "Cinemachine Dynamic Cameras", "FMOD Volumetric Audio Engine"],
    features: [
      "Endless procedural jungle tracks that scale difficulty based on speed multipliers.",
      "High-speed dodging, sliding, and double-jumping mechanics with responsive touch swipes.",
      "Dynamic camera shakes, speed trails, and lava flow alert animations."
    ],
    responsibilities: [
      "Coded the dino motion controls, double jump parameters, and sliding physics.",
      "Developed the modular terrain spawner to recycle track segments and avoid memory leaks.",
      "Integrated FMOD multi-channel ambient tracks for realistic jungle atmospheres."
    ],
    duration: "3 Months",
    problem: "Procedural generation of highly detailed prehistoric trees and active volcano particle systems causes severe performance throttling on standard mobile GPUs.",
    solution: "We used low-poly 3D models with vertex-color shaders that bypass standard lighting calculations entirely. The active volcano's smoke trails were offloaded to GPU particle instances, locking performance at 60 FPS."
  },
  {
    id: "10",
    title: "Mysterious Excavation: Dino Digger",
    slug: "mysterious-excavation",
    webglFolder: "MysteriousExcavation",
    description: "A casual archaeology simulator game. Gently brush away layers of dirt, break hard stone tiles with hammers, and extract intact prehistoric fossils to build a museum.",
    thumbnail: "/images/Excavation-Thumbnail.webp",
    banner: "/images/Excavation-Banner.webp",
    galleryBanner: "/images/Excavation-Gallary-Banner.webp",
    gallery: [
      "/images/Excavation-1.webp",
      "/images/Excavation-2.webp",
      "/images/Excavation-3.webp",
      "/images/Excavation-4.webp",
      "/images/Excavation-5.webp",
      "/images/Excavation-6.webp",
      "/images/Excavation-7.webp",
      "/images/Excavation-8.webp"
    ],
    webglUrl: "/games/MysteriousExcavation/index.html",
    platform: ["Kids", "2D"],
    genre: "Simulation",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Destructible Grid Shader", "Volumetric Brushing physics", "Dynamic Heightmap Painters", "Progressive Saving API"],
    
    features: [
      "Realistic soil-brushing mechanics using custom pixel-displacement algorithms.",
      "Multi-layered tile structures (sand, dirt, clay, hard stone) requiring distinct tool inputs.",
      "A customizable Museum display room where players assembly collected skeletons."
    ],
    responsibilities: [
      "Built the soil pixel-deletion shaders and coordinate mapping modules.",
      "Designed tool mechanics (brush, hammer, pickaxe) with responsive haptic triggers.",
      "Developed the fossil assembly system and museum grid layout controllers."
    ],
    duration: "3 Months",
    problem: "Creating a realistic soil-brushing mechanic requires tracking the state of thousands of individual dirt cell layers in real time, causing heavy CPU overhead.",
    solution: "We offloaded the dirt layers to a dynamic heightmap texture. Brushing acts as a GPU draw call that paints transparency directly onto the soil texture, reducing CPU load to near zero."
  },
  {
    id: "11",
    title: "Dino Park Builder: Prehistoric Tycoon",
    slug: "dino-park-builder",
    description: "A casual park management and simulation game. Construct dinosaur enclosures, feed different species, and manage visitors to create the ultimate prehistoric theme park.",
    thumbnail: "/images/DinoBuilder-Thumbnail.webp",
    banner: "/images/DinoBuilder-Banner.webp",
    galleryBanner: "/images/DinoBuilder-Gallary-Banner.webp",
    gallery: [
      "/images/DinoBuilder-1.webp",
      "/images/DinoBuilder-2.webp",
      "/images/DinoBuilder-3.webp",
      "/images/DinoBuilder-4.webp",
      "/images/DinoBuilder-5.webp",
      "/images/DinoBuilder-6.webp",
      "/images/DinoBuilder-7.webp"
    ],
    webglUrl: "/games/DinoParkBuilder/index.html",
    
    platform: ["Kids", "2D"],
    genre: "Simulation",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Isometric Grid Building Engine", "Economic Simulator System", "Flow-Field Pathfinding", "Custom Canvas HUDs"],
    features: [
      "Isometric park construction with dynamic road grids and electrical grids.",
      "Real-time visitors AI reacting to dinosaur counts, food vendor spots, and safety breakouts.",
      "Detailed park management panels with ticket controls and dinosaur care records."
    ],
    responsibilities: [
      "Programmed the isometric block placement engine and road snapping logic.",
      "Coded the visitor behavior state machine and economic calculation models.",
      "Optimized rendering parameters for dense park setups containing multiple enclosures."
    ],
    duration: "4 Months",
    problem: "Running pathfinding scripts for hundreds of park visitors simultaneously on a complex isometric grid causes massive CPU lag.",
    solution: "We integrated a grid flow-field algorithm that pre-computes paths to main park hubs, replacing individual A* calculations for each visitor and enabling 500+ visitors to navigate at 60 FPS."
  },
  {
    id: "12",
    title: "Camouflage Challenge: Hide & Seek Dino",
    slug: "camouflage-challenge",
    description: "A hide-and-seek puzzle game. Players spot prehistoric creatures camouflaged against complex natural backdrops before the timer expires.",
    thumbnail: "/images/Camouflage-Thumbnail.webp",
    banner: "/images/Camouflage-Banner.webp",
    galleryBanner: "/images/Camouflage-Gallary-Banner.webp",
    gallery: [
      "/images/Camouflage-1.webp",
      "/images/Camouflage-2.webp",
      "/images/Camouflage-3.webp",
      "/images/Camouflage-4.webp",
      "/images/Camouflage-5.webp"
    ],
    webglUrl: "/games/CamouflageChallenge/index.html",
    platform: ["Kids", "2D"],
    genre: "Puzzle",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Multi-Texture Blending Shaders", "Procedural Level Configurator", "Zoom-in Canvas Systems"],
    features: [
      "Hundreds of seek levels across prehistoric valleys, volcanoes, and dark cave maps.",
      "Custom shaders that blend dinosaur colors with forest lighting dynamically.",
      "Dynamic magnification glass and hint helper systems."
    ],
    responsibilities: [
      "Designed the camouflage texture-blending shader and ambient occlusion overrides.",
      "Built the raycast-based click detector and magnifying zoom overlays.",
      "Created the progressive level loader and game balance configurations."
    ],
    duration: "2 Months",
    problem: "To render realistic camouflage, blending skin textures with backdrops dynamically requires complex multi-texture shaders that can impact mobile GPU fill rates.",
    solution: "We optimized blending by baking the static background lighting into texture coordinates on level start, using a single-pass shader that blends textures via vertex colors."
  },
  {
    id: "13",
    title: "Jungle and Colors: Dino Painting",
    slug: "jungle-and-colors",
    description: "A vibrant color-matching and painting puzzle game for kids set in lush jungle ecosystems. Match animal patterns, mix primary colors, and paint the jungle alive.",
    thumbnail: "/images/Jungle-Thumbnail.webp",
    banner: "/images/Jungle-Banner.webp",
    galleryBanner: "/images/Jungle-Gallary-Banner.webp",
    gallery: [
      "/images/Jungle-1.webp",
      "/images/Jungle-2.webp",
      "/images/Jungle-3.webp",
      "/images/Jungle-4.webp",
      "/images/Jungle-5.webp",
      "/images/Jungle-6.webp",
      "/images/Jungle-7.webp",
      "/images/Jungle-8.webp"
    ],
    webglUrl: "/games/Jungle&Color/index.html",
    platform: ["Kids", "2D"],
    genre: "Educational",
    engine: "Unity 2022.3 LTS (URP)",
    technologies: ["C#", "Mask Threshold Shaders", "Fluid Paint Spreader System", "Color Mixer Matrix Calculations"],
    features: [
      "Interactive color-mixing wheel teaching primary, secondary, and tertiary mixes.",
      "Splatter paint mechanics with dynamic particles spreading on canvas clicks.",
      "Cute dinosaur coloring sheets with progressive border-lock snapping rules."
    ],
    responsibilities: [
      "Programmed the paint splat spreader module and color blending shaders.",
      "Implemented boundary checking rules to lock brush strokes inside designated zones.",
      "Configured user progress saving and custom coloring sheet export functions."
    ],
    duration: "2 Months",
    problem: "Calculating real-time color splats and texture filling on complex animal models causes dynamic memory allocation spikes.",
    solution: "We implemented pre-compiled mask textures and offloaded color fills to a simple threshold fragment shader, avoiding run-time texture modifications entirely."
  }
];
