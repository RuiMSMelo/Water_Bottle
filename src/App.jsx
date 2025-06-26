import './App.css'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Bottle from '../public/Waterbottle-v1-model.jsx'

function WaterBottle() {
    return <Bottle />
}

function App() {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.25} />
            <spotLight position={[3, 4, 3]} intensity={10} />
            <Suspense fallback={null}>
                <Bottle position={[0, -2, 0]} />
            </Suspense>
        </Canvas>
    )
}

export default App
