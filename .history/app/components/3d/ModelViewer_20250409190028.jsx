"use client";

import "@google/model-viewer";

export default function ModelViewer() {
  return (
    <model-viewer
      src="/models/tc.glb"
      alt="Modelo 3D"
      auto-rotate
      camera-controls
      interaction-prompt="none"
      className="w-auto h-[300px] max-w-full object-contain"
      style={{ background: "transparent" }}
    ></model-viewer>
  );
}
