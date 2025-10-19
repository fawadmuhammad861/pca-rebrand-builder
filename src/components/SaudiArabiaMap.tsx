import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// Saudi Arabia office locations with coordinates
const officeLocations = [
  {
    id: 1,
    city: "Riyadh",
    position: [0, 0, 0], // Center of Saudi Arabia
    specialties: ["Wood Fabrication", "Luxury Interiors", "Custom Millwork"],
    phone: "+966 11 234 5678",
    email: "riyadh@pca-fabrication.com"
  },
  {
    id: 2,
    city: "Jeddah", 
    position: [-2, -1.5, 0], // West coast
    specialties: ["Metal Fabrication", "Marine Applications", "Coastal Installations"],
    phone: "+966 12 345 6789",
    email: "jeddah@pca-fabrication.com"
  },
  {
    id: 3,
    city: "Dammam",
    position: [2.5, 1, 0], // East coast
    specialties: ["Oil & Gas Sector", "Industrial Projects", "Large-Scale Fabrication"],
    phone: "+966 13 456 7890",
    email: "dammam@pca-fabrication.com"
  }
];

// Major Saudi cities for borders
const majorCities = [
  { name: "Riyadh", position: [0, 0, 0] },
  { name: "Jeddah", position: [-2, -1.5, 0] },
  { name: "Dammam", position: [2.5, 1, 0] },
  { name: "Mecca", position: [-2.2, -2, 0] },
  { name: "Medina", position: [-1.8, -0.5, 0] },
  { name: "Taif", position: [-2.5, -1, 0] },
  { name: "Tabuk", position: [-1, 2, 0] },
  { name: "Hail", position: [-0.5, 1, 0] },
  { name: "Al Khobar", position: [2.8, 1.2, 0] },
  { name: "Dhahran", position: [2.6, 1.1, 0] },
  { name: "Abha", position: [-1.5, -2.5, 0] },
  { name: "Jazan", position: [-1.2, -3, 0] },
  { name: "Najran", position: [-0.8, -2.8, 0] },
  { name: "Al Bahah", position: [-2, -2.2, 0] },
  { name: "Sakaka", position: [0.5, 2.5, 0] },
  { name: "Arar", position: [1, 2.2, 0] }
];

// Saudi Arabia border outline (simplified)
const saudiBorder = [
  [-3, -3, 0], [-2.5, -3.2, 0], [-2, -3.5, 0], [-1.5, -3.8, 0],
  [-1, -3.5, 0], [-0.5, -3.2, 0], [0, -3, 0], [0.5, -2.8, 0],
  [1, -2.5, 0], [1.5, -2, 0], [2, -1.5, 0], [2.5, -1, 0],
  [3, -0.5, 0], [3.2, 0, 0], [3.5, 0.5, 0], [3.8, 1, 0],
  [3.5, 1.5, 0], [3.2, 2, 0], [3, 2.5, 0], [2.5, 3, 0],
  [2, 3.2, 0], [1.5, 3.5, 0], [1, 3.8, 0], [0.5, 3.5, 0],
  [0, 3.2, 0], [-0.5, 3, 0], [-1, 2.8, 0], [-1.5, 2.5, 0],
  [-2, 2.2, 0], [-2.5, 2, 0], [-3, 1.5, 0], [-3.2, 1, 0],
  [-3.5, 0.5, 0], [-3.8, 0, 0], [-3.5, -0.5, 0], [-3.2, -1, 0],
  [-3, -1.5, 0], [-2.8, -2, 0], [-3, -2.5, 0], [-3, -3, 0]
];

// Office marker component
function OfficeMarker({ office, isHovered, onHover }: { 
  office: typeof officeLocations[0], 
  isHovered: boolean, 
  onHover: (id: number | null) => void 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={office.position as [number, number, number]}>
      {/* Main marker */}
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover(office.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <cylinderGeometry args={[0.1, 0.15, 0.3, 8]} />
        <meshStandardMaterial 
          color={hovered || isHovered ? "#f59e0b" : "#1e40af"} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Base platform */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.1, 8]} />
        <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Glow effect */}
      {(hovered || isHovered) && (
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.05, 16]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.3} />
        </mesh>
      )}

      {/* City label */}
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.3}
        color={hovered || isHovered ? "#f59e0b" : "#1e40af"}
        anchorX="center"
        anchorY="middle"
      >
        {office.city}
      </Text>

      {/* Office details popup */}
      {(hovered || isHovered) && (
        <Html
          position={[0, 1.5, 0]}
          center
          distanceFactor={8}
          occlude
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-primary/20 min-w-[250px]">
            <h3 className="font-bold text-primary text-lg mb-2">{office.city} Office</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">{office.phone}</p>
              <p className="text-muted-foreground">{office.email}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {office.specialties.slice(0, 2).map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// City border component
function CityBorders() {
  const borderGeometry = useMemo(() => {
    const points = saudiBorder.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    const curve = new THREE.CatmullRomCurve3(points, true);
    return curve.getPoints(100);
  }, []);

  const points = borderGeometry.map(point => [point.x, point.y, point.z]).flat();

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={new Float32Array(points)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#1e40af" linewidth={3} />
    </line>
  );
}

// City dots component
function CityDots() {
  return (
    <>
      {majorCities.map((city, index) => (
        <mesh key={index} position={city.position as [number, number, number]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#64748b" />
        </mesh>
      ))}
    </>
  );
}

// Fallback 2D map component
function SaudiArabiaMap2D() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-background via-background/95 to-primary/5 rounded-xl overflow-hidden shadow-2xl border border-primary/20 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Saudi Arabia Office Locations</h3>
          <div className="grid grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div key={office.id} className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-primary/20">
                <h4 className="font-bold text-primary mb-2">{office.city}</h4>
                <p className="text-sm text-muted-foreground mb-2">{office.phone}</p>
                <p className="text-xs text-muted-foreground">{office.email}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {office.specialties.slice(0, 2).map((specialty, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main map component
function SaudiArabiaMap3D() {
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <SaudiArabiaMap2D />;
  }

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-background via-background/95 to-primary/5 rounded-xl overflow-hidden shadow-2xl border border-primary/20">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-primary">Loading 3D Map...</div>}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: 'transparent' }}
          onError={() => setHasError(true)}
        >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f59e0b" />

        {/* Saudi Arabia base */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[8, 6]} />
          <meshStandardMaterial 
            color="#f1f5f9" 
            metalness={0.2} 
            roughness={0.6}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* Border outline */}
        <CityBorders />

        {/* City dots */}
        <CityDots />

        {/* Office markers */}
        {officeLocations.map((office) => (
          <OfficeMarker
            key={office.id}
            office={office}
            isHovered={hoveredOffice === office.id}
            onHover={setHoveredOffice}
          />
        ))}

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
        />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default SaudiArabiaMap3D;
