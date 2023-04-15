import { PerspectiveCamera ,useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

    
       const Globe =(props)=>{
     
        useFrame((state)=>{
    //    console.log(state.clock.getElapsedTime())
    let a =state.clock.getElapsedTime()
    ref.current.rotation.y=a;
        })
        const ref=useRef()
        const reactTexture =useTexture("/react1.png")
        const nextTexture =useTexture("/images/next.png")
        const expressTexture =useTexture("/images/express.png")
        const threeTexture =useTexture("/images/three.png")
        return(
        <mesh ref={ref} scale={1} rotation={[0.2,-1,0]} position={[props.position.x,0,0]}>
        <sphereGeometry args={[1,33,33]}/>
         <meshStandardMaterial map={ useTexture( props.texture)} />
     </mesh>
        )
       }
       const Tech = () => {
  return (
   <Canvas>
    <Suspense fallback={null}>
      <ambientLight intensity={0.2}/>
      <PerspectiveCamera makeDefault position={[0,0,5]} />
      <spotLight args={["white",1,10,Math.PI*180/120,0.8]} position={[0,0,2]}/>
      <Globe color="yellow" position={{x:0,y:0,z:0}} texture={"/images/mern1.jpg"}/>
    </Suspense>
   </Canvas>
  )
}

export default Tech