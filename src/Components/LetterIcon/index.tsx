import React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';


const ProtoIcon = styled.div`
    width: 2.25em;
    height: 2.25em;
    border-radius: 1.56em;
`


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


export function CircledCheckbox(props: {isActive: boolean, onToggle: () => void, pure?: boolean}) {
    return <CheckboxIcon active={props.isActive} onClick={() => props.onToggle()} pure={props.pure}>
        {props.isActive ? <ActiveCheckbox><div/></ActiveCheckbox> : <Checkbox/>}
    </CheckboxIcon>
}


const CheckboxIcon = styled(ProtoIcon)<{active?: boolean, pure?: boolean}>`
    ${props => props.active && !props.pure && 'border: 0.125em solid #00A987;'}
    ${props => !props.pure && 'background: #575B5F;'}
    
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
`


const ActiveCheckbox = styled.div`
    width: 1em;
    height: 1em;

    background: #00A987;
    border-radius: 2px;

    position: relative;

    & > div {
        position: absolute;
        width: 0.25em;
        height: 0.5em;
        left: 0.35em;
        top: 0.12em;

        display: inline-block;
        transform: rotate(45deg);
        border-bottom: 2px solid #FFFFFF;
        border-right: 2px solid #FFFFFF;
    }
`


const Checkbox = styled.div`
    width: 0.875em;
    height: 0.875em;

    background: #737377;
    border: 0.125em solid #E0E0E0;
    border-radius: 0.125em;
`