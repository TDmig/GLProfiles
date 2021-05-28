import styled from 'styled-components'
import { getColor, Button } from '.'


interface NavButtonProps {
    active?: boolean
}


export const NavButton = styled(Button)<NavButtonProps>`
    color: ${props => props.active ? 'white' : '#989898'};
    ${props => props.active && `border-bottom: 0.15em solid ${getColor("green")}`};
    font-size: 1.2em;
`


NavButton.defaultProps = {
    'pure': true
}