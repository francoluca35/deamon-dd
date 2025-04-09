// app/components/3d/ModelViewer.jsx
"use client";

import "@google/model-viewer";

export default function ModelViewer() {
  return (
    <model-viewer
      src="/models/tc.gltf" // Asegurate de tener el modelo en public/models/
      alt="Modelo 3D"
      auto-rotate
      camera-controls
      interaction-prompt="none"
      style={{
        width: "100%",
        height: "500px",
        background: "transparent",
      }}
    ></model-viewer>
  );
}
