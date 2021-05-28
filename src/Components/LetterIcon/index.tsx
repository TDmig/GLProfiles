import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CircledCheckbox } from 'Components/UI/Checkbox';
import { ProtoIcon } from './ProtoIcons';


const LetterIconWrapper = styled(ProtoIcon)`
    background: linear-gradient(160deg, #A0B2F3 0%, #69CDED 100%);

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    user-select: none;
    cursor: default;

    * {
        font-size: 1.2em;
        font-weight: 700;
    }
`

export default function LetterIcon({letter}: {letter: string}) {
    return <LetterIconWrapper>
        <span>{letter[0].toUpperCase()}</span>
    </LetterIconWrapper>
}


export function LetterWithCheckbox(props: {letter: string, isActive: boolean, onToggle: () => void}) {
    const [hovered, setHovered] = useState(false)

    return <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
    >
        {(!hovered && !props.isActive)
            ? <LetterIcon letter={props.letter}/> 
            : <CircledCheckbox isActive={props.isActive} onToggle={() => props.onToggle()}/>
        }
    </div>
}
