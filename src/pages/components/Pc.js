import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'

// import Pc1 from './Pc1'
import { OrbitControls ,PerspectiveCamera ,useGLTF} from '@react-three/drei'


const Computer=()=>{
 const computer = useGLTF('/desktop/scene.gltf')
 return(
     <mesh>
        <primitive
           object={computer.scene}
        scale={0.5 }
        position={[1, -1, -1.5]}
        rotation={[-0.01, -2, -0.1]}/>
       </mesh>
       )
}
const Pc = () => {

  return (
   <Canvas>
    <Suspense fallback={null}>
    <OrbitControls maxPolarAngle={Math.PI/2} 
    minPolarAngle={Math.PI/2}/>
        <ambientLight intensity={0.2}/>
        <spotLight args={["white",1,10,Math.PI*180/120,0.8]} position={[0,0,2]}/>
        <PerspectiveCamera makeDefault position={[-2,2,5]} /> {/* <ambientLight intensity={1}/> */}
     {/* <Model/> */}
       {/* <Pc1/> */}
   <Computer/>
    </Suspense>
   </Canvas>
  )
}

export default Pc