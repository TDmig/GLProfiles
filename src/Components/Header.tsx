import React from 'react'

import { Button, OutlinedButton } from './UI/Buttons/index';
import { SearchInput } from 'Components/UI/Input'
import LetterIcon from './LetterIcon';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr repeat(3, min-content);
    grid-column-gap: 2rem;
    align-items: center;

    margin-bottom: 2em;
`


export default function Header(props: {searchText: string, onSearchChange: (s: string) => void}) {
    return <HeaderWrapper>
        <h1>Profiles</h1>
        <SearchInput value={props.searchText} onChange={(s) => props.onSearchChange(s)}/>
        <OutlinedButton color="green" bold>
            <span className="material-icons">add</span>
            <span>Create new profile</span>
        </OutlinedButton>
        <Button>
            <span className="material-icons">folder</span>
            <span>Folders</span>
        </Button>
        <LetterIcon letter='S'/>
    </HeaderWrapper>
}