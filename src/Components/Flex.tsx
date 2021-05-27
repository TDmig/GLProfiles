import styled from 'styled-components'


export const HorizontalFlex = styled.div<{margin?: string}>`
    display: flex;
    ${props => props.margin && `
        & > * + * {
            margin-left: ${props.margin};
        }
    `}
    
`