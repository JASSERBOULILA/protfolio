import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Target(props) {
  const targetRef = useRef();

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Stand */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 1.2, 24]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Target disc */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.08, 48]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Rings */}
      <mesh position={[0, 0.25, 0.05]}>
        <ringGeometry args={[0.28, 0.36, 64]} />
        <meshStandardMaterial color="#6c63ff" side={2} />
      </mesh>
      <mesh position={[0, 0.25, 0.06]}>
        <ringGeometry args={[0.14, 0.22, 64]} />
        <meshStandardMaterial color="#ff4d4d" side={2} />
      </mesh>
    </group>
  );
}
