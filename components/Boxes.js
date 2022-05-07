import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'

const Boxes = () => {
  return (
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} />
        <OrbitControls />
      </Canvas>
  )
}

export default Boxes