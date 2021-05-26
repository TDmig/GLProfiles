import React from 'react'


import styled from 'styled-components';


export const ListBlock = styled.div`
    background: #43484C;
    border-radius: 0.6em;

    padding: 1.2em 1.9em;

    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 1em;
    }
`
