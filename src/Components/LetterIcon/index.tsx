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


const LetterWithCheckboxWrapper = styled(ProtoIcon)`
    position: relative;
    & > * {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .cool {
        z-index: 10000;

        opacity: 0;

        &.active, &:hover {
            opacity: 1;
        }
    }
`


export function LetterWithCheckbox(props: {letter: string, isActive: boolean, onToggle: () => void}) {
    return <LetterWithCheckboxWrapper>
        <LetterIcon letter={props.letter}/> 
        <div className={'cool ' + (props.isActive ? 'active' : '')}>
            <CircledCheckbox isActive={props.isActive} onToggle={() => props.onToggle()}/>
        </div>
    </LetterWithCheckboxWrapper>
}
