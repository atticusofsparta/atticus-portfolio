import { createContext, useContext, useRef, useCallback, useEffect } from "react"

interface MouseState {
  x: number
  y: number
  isOverCanvas: boolean
}

const MouseContext = createContext<{
  state: React.MutableRefObject<MouseState>
  setRef: (el: HTMLCanvasElement | null) => void
}>({
  state: { current: { x: 0, y: 0, isOverCanvas: false } },
  setRef: () => {},
})

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const stateRef = useRef<MouseState>({ x: 0, y: 0, isOverCanvas: false })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const setRef = useCallback((el: HTMLCanvasElement | null) => {
    canvasRef.current = el
  }, [])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      stateRef.current.x = e.clientX
      stateRef.current.y = e.clientY

      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        stateRef.current.isOverCanvas =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
      }
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <MouseContext.Provider value={{ state: stateRef, setRef }}>
      {children}
    </MouseContext.Provider>
  )
}

export function useMouse() {
  const ctx = useContext(MouseContext)
  if (!ctx) throw new Error("useMouse must be used within MouseProvider")
  return ctx
}
