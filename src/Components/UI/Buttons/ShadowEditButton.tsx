import { useState } from "react"
import styled from "styled-components"


const ShadowEditButton = styled.div`
    position: absolute;
    right: 0;
    width: 4.6em;

    height: 100%;

    display: flex;
    align-content: center;
    justify-content: flex-end;
    
    & > * {
        height: fit-content;
        margin: auto 0;
    }

    user-select: none;
    cursor: pointer;

    text-decoration: underline;
    background-image: linear-gradient(to left, #43484C, #43484C 50%, #43484C00);
`


export default function ShadowEditContainer({children, onClick}: 
    React.PropsWithChildren<{onClick: () => void}>) {

    const [hovering, setHovering] = useState(false)
    
    return <div style={{'position': 'relative'}}
        onClick={() => onClick()}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >
        {children}
        {hovering && <ShadowEditButton>
            <div>edit</div>
        </ShadowEditButton>}
    </div>
}
