import styled from 'styled-components';



const LetterIconWrapper = styled.div`
    width: 2.25em;
    height: 2.25em;
    border-radius: 1.56em;
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
