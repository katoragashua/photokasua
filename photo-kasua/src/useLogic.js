import {useState, useEffect, useRef} from "react"

function useLogic() {
    const [hovered, setHovered] = useState(() => false)

    // const switchHoverState = () => setHovered(prev => !prev)

    const enterHoverState = () => setHovered(true)

    const leaveHoverState = () => setHovered(false)

    const hoverRef = useRef(null)

    useEffect(() => {
        const hover = hoverRef.current
        hover.addEventListener("mouseenter", enterHoverState);
        hover.addEventListener("mouseleave", leaveHoverState)

        return () => {
          hover.removeEventListener("mouseenter", enterHoverState);
          hover.removeEventListener("mouseleave", leaveHoverState);
        }; 
    }, [])

    return {hovered, hoverRef}
}

export default useLogic