import './App.css'
import { useGLTF } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Bottle from '../public/Waterbottle-v1-model.jsx'

function WaterBottle() {
    return <Bottle />
}

function App() {
    return (
        <>
            <Canvas>
                <color attach='background' args={['tomato']} />
                <ambientLight intensity={2} />
                <spotLight position={[3, 4, 3]} intensity={3} />
                <Suspense fallback={null}>
                    <Bottle position={[0, -2, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default App
