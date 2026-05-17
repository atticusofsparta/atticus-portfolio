import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useMouse } from "@/src/hooks/useMouse"

const GRID = 180
const SPACING = 0.2
const BASE_SIZE = 0.01
const MAX_SIZE = 0.05
const GLOW_RADIUS = 6
const COLOR = new THREE.Color(0.08, 0.64, 0.23)
const BRIGHT = new THREE.Color(0.25, 1.0, 0.45)

const SCALE_SPEED = 0.08
const GLOW_SPEED = 0.08

function StarPoints() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const mouse3D = useRef(new THREE.Vector3(-100, -100, 0))
  const { viewport, gl } = useThree()
  const { state: mouseState, setRef } = useMouse()

  const positions = useMemo(() => {
    const arr: THREE.Vector3[] = []
    const half = (GRID * SPACING) / 2

    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        arr.push(new THREE.Vector3(col * SPACING - half, row * SPACING - half, 0))
      }
    }

    return arr
  }, [])

  const count = positions.length
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorArray = useMemo(() => new Float32Array(count * 3), [count])
  const scales = useMemo(() => new Float32Array(count).fill(BASE_SIZE), [count])
  const glowAmounts = useMemo(() => new Float32Array(count), [count])

  useEffect(() => {
    setRef(gl.domElement)
    return () => setRef(null)
  }, [gl, setRef])

  useEffect(() => {
    const mesh = meshRef.current

    positions.forEach((pos, i) => {
      dummy.position.copy(pos)
      dummy.scale.setScalar(BASE_SIZE)
      dummy.updateMatrix()

      mesh.setMatrixAt(i, dummy.matrix)
      COLOR.toArray(colorArray, i * 3)
    })

    mesh.instanceMatrix.needsUpdate = true
    mesh.geometry.setAttribute(
      "color",
      new THREE.InstancedBufferAttribute(colorArray, 3)
    )
  }, [positions, dummy, colorArray])

  const updateStars = (cx: number, cy: number, active: boolean) => {
    const mesh = meshRef.current

    for (let i = 0; i < count; i++) {
      const pos = positions[i]

      let targetGlow = 0

      if (active) {
        const dx = pos.x - cx
        const dy = pos.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)

        const t = Math.max(0, 1 - dist / GLOW_RADIUS)
        targetGlow = t * t * t
      }

      glowAmounts[i] = THREE.MathUtils.lerp(
        glowAmounts[i],
        targetGlow,
        GLOW_SPEED
      )

      const targetScale =
        BASE_SIZE + (MAX_SIZE - BASE_SIZE) * glowAmounts[i]

      scales[i] = THREE.MathUtils.lerp(
        scales[i],
        targetScale,
        SCALE_SPEED
      )

      dummy.position.set(pos.x, pos.y, glowAmounts[i] * 0.3)
      dummy.scale.setScalar(scales[i])
      dummy.updateMatrix()

      mesh.setMatrixAt(i, dummy.matrix)

      colorArray[i * 3] =
        COLOR.r + (BRIGHT.r - COLOR.r) * glowAmounts[i]
      colorArray[i * 3 + 1] =
        COLOR.g + (BRIGHT.g - COLOR.g) * glowAmounts[i]
      colorArray[i * 3 + 2] =
        COLOR.b + (BRIGHT.b - COLOR.b) * glowAmounts[i]
    }

    mesh.instanceMatrix.needsUpdate = true
    ;(mesh.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true
  }

  useFrame(() => {
    const mx = mouseState.current.x
    const my = mouseState.current.y
    const isOverCanvas = mouseState.current.isOverCanvas

    if (!isOverCanvas) {
      updateStars(0, 0, false)
      return
    }

    const canvasRect = gl.domElement.getBoundingClientRect()
    if (!canvasRect.width || !canvasRect.height) return

    const relX = mx - canvasRect.left
    const relY = canvasRect.height - (my - canvasRect.top)

    const vx = ((relX / canvasRect.width) * 2 - 1) * (viewport.width / 2)
    const vy = ((relY / canvasRect.height) * 2 - 1) * (viewport.height / 2)

    mouse3D.current.set(vx, vy, 0)

    const cx = mouse3D.current.x
    const cy = mouse3D.current.y

    const half = (GRID * SPACING) / 2
    const minX = -half
    const maxX = half
    const minY = -half
    const maxY = half

    const closestX = Math.max(minX, Math.min(cx, maxX))
    const closestY = Math.max(minY, Math.min(cy, maxY))

    const boxDx = cx - closestX
    const boxDy = cy - closestY
    const distToBox = Math.sqrt(boxDx * boxDx + boxDy * boxDy)

    updateStars(cx, cy, distToBox <= GLOW_RADIUS)
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial vertexColors={true} toneMapped={false} />
    </instancedMesh>
  )
}

export default function StarGrid() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <StarPoints />
      </Canvas>
    </div>
  )
}
