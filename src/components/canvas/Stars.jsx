import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useRef } from "react"

const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 30
    ref.current.rotation.y -= delta / 250
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={'#f272c8'}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = (props) => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Stars {...props} />
      </Canvas>
    </div>
  )
}

export default StarsCanvas