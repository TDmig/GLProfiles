import { Button } from 'Components/Buttons';
import React from 'react'
import { ListBlock } from "./ListBlock";
import LetterIcon from '../LetterIcon/index';
import styled from 'styled-components';
import ProfileStatus, {status} from './ProfileStatus'



type platform = "Linux" | "Mac" | "Windows"



interface ProfileItemProps {
    name: string
    folders: Array<string>
    status: status
    platform: platform
    lastRun: string
}


const ItemGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: min-content 12em 7em min-content 1fr min-content 8em min-content;
    grid-column-gap: 1.5em;
    align-items: center;
`


export default function ProfileItem(props: ProfileItemProps) {
    const buttonText = props.status === 'running' ? 'Stop' : 'Run profile'
    return <ListBlock>
        <ItemGridWrapper>
            <LetterIcon letter={props.name}/>
            <ProfilePrimary name={props.name} folders={props.folders}/>
            <ProfileStatus status={props.status}/>
            <img src={`/svg/${props.platform}.svg`} alt={`Platform: ${props.platform}`}/>
            <div/>
            <span className="dimmed-text">Last run {props.lastRun}</span>
            <Button color={props.status === 'running' ? 'red' : 'green'}>
                {buttonText}
            </Button>
            <Button color='dark' circle>
                <span className="material-icons">settings</span>
            </Button>
        </ItemGridWrapper>
    </ListBlock>
}


const FoldersSubText = styled.div`
    display: flex;
    & > * + * {
        margin-left: 1em;
    }

    & > * {
        font-size: 0.875em;
        color: #C9C9C9;

        min-width: fit-content;
        text-overflow: clip;
    }
`


function ProfilePrimary(props: {name: string, folders: Array<string>}) {
    return <div className="flex_v">
        <div>{props.name}</div>
        <FoldersSubText>
            {props.folders.map((folder) => 
                <span>{folder}</span>
            )}
        </FoldersSubText>
    </div>
}
