// app/components/3d/ModelViewer.jsx
"use client";

import "@google/model-viewer";

export default function ModelViewer() {
  return (
    <model-viewer
      src="/models/tc-pista.glb"
      alt="Modelo 3D"
      auto-rotate
      camera-controls
      interaction-prompt="none"
      className="w-full h-[300px] max-w-full object-contain"
      style={{ background: "transparent" }}
    ></model-viewer>
  );
}
