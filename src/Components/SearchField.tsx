import styled from "styled-components"


interface SearchContainerProps {
    active?: boolean
}


const SearchInputContainer = styled.div<SearchContainerProps>`
    border-radius: 1.56em;
    padding: 0.6em 1em;
    background: #43484C;
    width: ${props => props.active ? '100%' : '18em'};

    display: flex;
    align-items: center;

    & > * + * {
        margin-left: 0.5em;
    }

    input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
    }

    .material-icons, input::placeholder {
        color: #828282
    }
`


export default function SearchInput() {
    return <SearchInputContainer>
        <span className="material-icons">search</span>
        <input type='text' placeholder='Search profiles...'/>
    </SearchInputContainer>
}