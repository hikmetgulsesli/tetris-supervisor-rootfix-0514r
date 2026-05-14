// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, TriangleAlert } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Simulated Game Playfield Background (Level 0 Base) */}
      <div className="absolute inset-0 flex justify-center items-center opacity-40 pointer-events-none">
      <div className="w-[320px] h-[640px] border border-outline-variant/30 bg-playfield-grid relative shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
      {/* Simulated locked pieces */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-surface-container-high/50 border-t border-outline-variant/30 backdrop-blur-sm"></div>
      <div className="absolute bottom-32 left-[64px] w-[64px] h-[32px] bg-outline-variant/20 border border-outline-variant/40"></div>
      </div>
      </div>
      {/* Game Over Overlay (Level 2 Overlays - Red Tinted & Blurred) */}
      <div className="absolute inset-0 bg-error-container/20 backdrop-blur-[12px] z-50 flex items-center justify-center p-gutter">
      {/* Modal Container (Level 1 Panel styled for critical state) */}
      <div className="w-full max-w-md bg-surface-container-lowest border border-error/50 rounded flex flex-col items-center relative overflow-hidden shadow-[0_0_60px_-15px_rgba(255,180,171,0.15)]">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-error absolute top-0 left-0 shadow-[0_0_10px_rgba(255,180,171,0.8)]"></div>
      <div className="p-panel-padding w-full flex flex-col items-center gap-stack-md mt-4">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mb-2">
      <TriangleAlert className="text-[32px] text-error drop-shadow-[0_0_8px_rgba(255,180,171,0.6)]" aria-hidden={true} focusable="false" />
      <h1 className="font-display-lg text-display-lg text-error uppercase tracking-tighter drop-shadow-[0_0_12px_rgba(255,180,171,0.4)] text-center">
                              Game Over
                          </h1>
      </div>
      {/* Stats Bento Grid */}
      <div className="w-full grid grid-cols-2 gap-[1px] bg-outline-variant/40 border border-outline-variant/40 rounded-sm overflow-hidden">
      {/* Final Score (Failure Context) */}
      <div className="bg-surface-container flex flex-col items-center justify-center p-4 gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Final Score</span>
      <span className="font-headline-md text-headline-md text-on-surface">38,450</span>
      </div>
      {/* High Score (Success Contrast) */}
      <div className="bg-primary/5 flex flex-col items-center justify-center p-4 gap-1 border border-primary relative">
      <div className="absolute inset-0 bg-primary/[0.03] animate-pulse pointer-events-none"></div>
      <div className="flex items-center gap-1 text-primary">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-status-label text-status-label text-primary uppercase">New High Score</span>
      </div>
      <span className="font-headline-md text-headline-md text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">38,450</span>
      </div>
      {/* Level */}
      <div className="bg-surface-container flex flex-col items-center justify-center p-4 gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Level Reached</span>
      <span className="font-data-mono text-data-mono text-on-surface">12</span>
      </div>
      {/* Lines */}
      <div className="bg-surface-container flex flex-col items-center justify-center p-4 gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Total Lines</span>
      <span className="font-data-mono text-data-mono text-on-surface">114</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-stack-sm mt-4">
      {/* Primary Action */}
      <button className="h-touch-target w-full bg-primary/10 border-2 border-primary text-primary font-data-mono text-data-mono uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-surface-container-lowest outline-none rounded-DEFAULT" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Play Again
                          </button>
      {/* Secondary Action */}
      <button className="h-touch-target w-full border border-outline-variant text-on-surface-variant font-data-mono text-data-mono uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-surface-variant/50 hover:text-on-surface transition-colors focus:ring-2 focus:ring-outline focus:ring-offset-4 focus:ring-offset-surface-container-lowest outline-none rounded-DEFAULT" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
                              Main Menu
                          </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
