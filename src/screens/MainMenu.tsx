// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "resume-2" | "how-to-play-3" | "settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "linear-gradient(to right, #444749 1px, transparent 1px), linear-gradient(to bottom, #444749 1px, transparent 1px)", backgroundSize: "32px 32px"}}>
      </div>
      {/* Central Vignette for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#131313_70%)]"></div>
      {/* Main Content Canvas */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-gutter">
      {/* Minimalist Branding */}
      <div className="mb-12 text-center">
      <h1 className="font-display-lg text-display-lg font-black tracking-tighter text-primary">TETRIS SUPERVISOR</h1>
      <p className="font-status-label text-status-label text-on-surface-variant mt-2">V.1.0.42-STABLE</p>
      </div>
      {/* Action Buttons Layout */}
      <div className="flex flex-col gap-stack-md w-full">
      {/* START GAME Button */}
      <button className="group flex items-center justify-between w-full min-h-[44px] bg-surface-container border border-outline-variant px-panel-padding py-4 hover:bg-surface-variant hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="font-headline-md text-headline-md text-primary group-hover:text-primary transition-colors">START GAME</span>
      <Play  data-icon="play_arrow" className="text-primary" aria-hidden={true} focusable="false" />
      </button>
      {/* RESUME Button (Disabled State) */}
      <button className="flex items-center justify-between w-full min-h-[44px] bg-surface-container/50 border border-outline-variant/30 px-panel-padding py-4 opacity-50 cursor-not-allowed" disabled={true} type="button" data-action-id="resume-2" onClick={actions?.["resume-2"]}>
      <span className="font-headline-md text-headline-md text-on-surface-variant">RESUME</span>
      <Pause  data-icon="pause" className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </button>
      {/* HOW TO PLAY Button */}
      <button className="group flex items-center justify-between w-full min-h-[44px] bg-surface-container border border-outline-variant px-panel-padding py-4 hover:bg-surface-variant hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="how-to-play-3" onClick={actions?.["how-to-play-3"]}>
      <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">HOW TO PLAY</span>
      <Circle  data-icon="help" className="text-on-surface group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      {/* SETTINGS Button */}
      <button className="group flex items-center justify-between w-full min-h-[44px] bg-surface-container border border-outline-variant px-panel-padding py-4 hover:bg-surface-variant hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">SETTINGS</span>
      <Settings  data-icon="settings" className="text-on-surface group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Minimalist Footer Anchor */}
      <div className="absolute bottom-8 w-full flex justify-center z-10">
      <p className="font-status-label text-status-label text-on-surface-variant opacity-60 uppercase tracking-widest">
                  © 2024 GRID LOGIC SYSTEMS. ALL RIGHTS RESERVED.
              </p>
      </div>
    </>
  );
}
