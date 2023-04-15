import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'

import Pc1 from './models/pc/Pc1'
import { OrbitControls ,PerspectiveCamera } from '@react-three/drei'
const Pc = () => {
  return (
   <Canvas>
    <Suspense fallback={null}>
    <OrbitControls/>
        <ambientLight intensity="0.04"/>
        <spotLight args={["white",1,10,Math.PI*180/120,0.8]} position={[0,0,2]}/>
        <PerspectiveCamera makeDefault position={[-2,2,5]} /> {/* <ambientLight intensity={1}/> */}
     {/* <Model/> */}
       <Pc1/>
    </Suspense>
   </Canvas>
  )
}

export default Pc