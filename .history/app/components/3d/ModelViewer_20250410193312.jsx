"use client";

import { ModelViewerElement } from "@google/model-viewer";

export default function ModelViewClient() {
  return (
    <model-viewer
      src="/models/tc.glb"
      alt="Modelo 3D"
      auto-rotate
      camera-controls
      reveal="auto"
      interaction-prompt="none"
      className="w-auto h-[300px] max-w-full object-contain"
      style={{ background: "transparent" }}
    ></model-viewer>
  );
}
