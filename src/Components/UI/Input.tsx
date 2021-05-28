import styled from "styled-components"


interface SearchContainerProps {
    active?: boolean
    backgroundColor?: string
}


const InputContainer = styled.div<SearchContainerProps>`
    border-radius: 1.56em;
    padding: 0.6em 1em;
    background: ${props => props.backgroundColor ? props.backgroundColor : '#43484C'};
    width: ${props => props.active ? '100%' : '18em'};

    display: flex;
    align-items: center;

    & > * + * {
        margin-left: 0.5em;
    }

    input, textarea {
        width: 100%;
        background: none;
        border: none;
        outline: none;
    }

    textarea {
        width: 20em;
        height: 5em;
    }

    .material-icons, input::placeholder {
        color: #828282
    }
`


interface TextInputProps {
    value: string
    onChange: (newValue: string) => void
}


export function TextArea(props: TextInputProps) {
    return <InputContainer backgroundColor='#6C7175'>
        <textarea
            placeholder='...' 
            value={props.value} onChange={e => props.onChange(e.target.value)}
            style={{whiteSpace: 'break-spaces'}}
        />
    </InputContainer>
}


export function SearchInput(props: TextInputProps) {
    return <InputContainer>
        <span className="material-icons">search</span>
        <input type='text' placeholder='Search profiles...'
            value={props.value} onChange={e => props.onChange(e.target.value)}
        />
    </InputContainer>
}
