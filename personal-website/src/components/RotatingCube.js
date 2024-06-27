import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {extend} from '@react-three/fiber';

extend({ ShaderMaterial: THREE.ShaderMaterial });

const vertexShader = `
varying vec3 vUv; 
void main() {
  vUv = position; 
  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0); 
  gl_Position = projectionMatrix * modelViewPosition; 
}
`;

const fragmentShader = `
uniform vec3 color1;
uniform vec3 color2;
varying vec3 vUv;

void main() {
  gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
}
`;

function Cube(){
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry args = {[2,2,2]}/>
            <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          color1: { value: new THREE.Color(0x4E3A34) },
          color2: { value: new THREE.Color(0x2E7D32) },
        }}
      />
        </mesh>
    );
}

const RotatingCube = () => {
return(
    
    <Canvas> 
        <ambientLight intensity={0.5}/>
        <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
        <Cube/>
    </Canvas>
)
}

export default RotatingCube;