import { useEffect, useState } from "react"

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const wrapper = document.getElementById("wrapper")
    wrapper.addEventListener("mousemove", setFromEvent)

    return () => {
      wrapper.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}
