import styled from 'styled-components'


export const HorizontalFlex = styled.div<{margin?: string}>`
    display: flex;
    align-items: center;

    ${props => props.margin ? `
        & > * + * {
            margin-left: ${props.margin};
        }
    ` : 'justify-content: space-between'}
`