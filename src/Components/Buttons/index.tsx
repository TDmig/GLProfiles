import styled from 'styled-components'


const btnPadTop = '0.65em'
const btnPadSide = '1.2em'


type color = 'red' | 'green' | 'dark'


interface ButtonProps {
    pure?: boolean
    circle?: boolean
    bold?: boolean

    color?: color
}


export const getColor = (c: color) => {
    if (c === 'red') {
        return '#E9515C'
    } else if (c === 'green') {
        return '#00A987'
    } else if (c === 'dark') {
        return '#3C4246'
    }
}


export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    user-select: none;
    cursor: pointer;

    outline: none;
    border: none;
    background: none;

    padding: ${props => btnPadTop + ' ' + (props.circle ? btnPadTop : btnPadSide)};

    border-radius: ${props => props.pure ? '0' : '1.56em'};

    * {
        white-space: nowrap;
    }
    
    & > * + * {
        margin-left: 0.75em;
    }

    ${props => props.color && `background-color: ${getColor(props.color)}`};

    ${props => props.bold && `
        span:not(.material-icons) {
            font-size: 0.95em;
            font-weight: 700;
        }
    `}

    &:hover {
        box-shadow: inset 0 0 10em 10em rgba(255, 255, 255, 0.1);
    }
`


export const OutlinedButton = styled(Button)<ButtonProps>`
    ${props => props.color && `border: 0.25em solid ${getColor(props.color)}`};
    ${props => props.color && `* {color: ${getColor(props.color)}}`};
    ${props => props.color && 'background: none'};
`


export const DimmedButton = styled(Button)`
    background-color: #3C4246;
    border-radius: 0.2em;
`
