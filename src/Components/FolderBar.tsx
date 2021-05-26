import React from 'react'
import { NavButton } from 'Components/Buttons/NavButton'


import { VerticalSeparator } from './Separator'
import { DimmedButton } from './Buttons'
import styled from 'styled-components';


const FolderBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content min-content;

    margin-bottom: 1.4em;

    nav {
        display: flex;
    }
`


export default function FolderBar() {
    return <FolderBarWrapper>
        <nav>
            <NavButton active>
                All profiles
            </NavButton>
            <NavButton>
                SellerProfiles
            </NavButton>
            <NavButton>
                JustFolder 1
            </NavButton>
        </nav>
        <VerticalSeparator/>
        <DimmedButton>
            <span>Last update</span>
            <span className="material-icons">
                expand_more
            </span>
        </DimmedButton>
    </FolderBarWrapper>
}