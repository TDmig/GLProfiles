import styled from 'styled-components';


export const ListBlock = styled.div`
    background: #43484C;
    border-radius: 0.6em;

    box-shadow: 0 0.25em 0.625em rgba(0, 0, 0, 0.1);

    padding: 1.2em 1.9em;

    & + & {
        margin-top: 1em;
    }
`
