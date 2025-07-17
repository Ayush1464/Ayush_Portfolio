// components/common/Background3D.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#FFA500" />
          <Stars
            radius={120}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
