import { useEffect } from "react";


export function useOutsideClick(ref: React.RefObject<HTMLElement>, onOutsideClick: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                event.preventDefault()
                onOutsideClick()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, onOutsideClick])
}