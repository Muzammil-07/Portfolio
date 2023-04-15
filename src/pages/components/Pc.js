import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import Model from './models/pc/Model'
import { OrbitControls ,PerspectiveCamera } from '@react-three/drei'
const Pc = () => {
  return (
   <Canvas>
    <Suspense fallback={null}>
    <OrbitControls/>
        <ambientLight intensity="0.04"/>
        <spotLight args={["white",1,10,Math.PI*180/120,0.8]} position={[0,0,2]}/>
        <PerspectiveCamera makeDefault position={[-2,4,13]} /> {/* <ambientLight intensity={1}/> */}
     <Model/>
    </Suspense>
   </Canvas>
  )
}

export default Pc