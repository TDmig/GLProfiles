import { ListBlock } from "Components/ListBlock/ListBlock";
import { Button, OutlinedButton } from './Buttons/index';
import { CircledCheckbox } from './LetterIcon/index';
import styled from 'styled-components'


const SelectionBarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, min-content) 1fr min-content;
    grid-column-gap: 1.5em;

    align-items: center;
`


interface SelectionBarProps {
    allSelected: boolean;
    onToggleSelectAll: () => void;
    onCancel: () => void;
}


export function SelectionBar(props: SelectionBarProps) {
    return <ListBlock>
        <SelectionBarWrapper>
            <CircledCheckbox isActive={props.allSelected} onToggle={() => props.onToggleSelectAll()} />
            <OutlinedButton color='green'>
                <span className='material-icons'>shortcut</span>
                <span>Share</span>
            </OutlinedButton>
            <OutlinedButton color='green'>
                <span className='material-icons'>create_new_folder</span>
                <span>Add to Folder</span>
            </OutlinedButton>
            <OutlinedButton color='green'>
                <span className='material-icons'>content_copy</span>
                <span>Clone</span>
            </OutlinedButton>
            <OutlinedButton color='green'>
                <span className='material-icons'>fingerprint</span>
                <span>New Fingerprint</span>
            </OutlinedButton>
            <OutlinedButton color='red'>
                <span className='material-icons'>delete</span>
                <span>Delete</span>
            </OutlinedButton>
            <div />
            <div>
                <Button circle onClick={() => props.onCancel()}>
                    <span className='material-icons'>cancel</span>
                </Button>
            </div>
        </SelectionBarWrapper>
    </ListBlock>;
}
