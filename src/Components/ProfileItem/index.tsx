import { Button } from 'Components/UI/Buttons';
import React, { useState } from 'react'
import { ListBlock } from "../UI/ListBlock";
import { LetterWithCheckbox } from '../LetterIcon/index';
import styled from 'styled-components';
import ProfileStatus from './ProfileStatus'
import { Profile, ProfileSummary } from '../../types'
import ProfileTable from './ProfileTable';
import { DimmedText } from '../UI/TextStyles';


const ItemGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: min-content 12em 7em min-content 1fr min-content 8em min-content;
    grid-column-gap: 1.5em;
    align-items: center;
`


interface ProfileItemProps {
    profile: Profile

    isSelected: boolean
    onToggleSelect: () => void

    onEdit: (field: string) => void
}


export default function ProfileItem(props: ProfileItemProps) {
    const [extended, setExtended] = useState(false)


    return <ListBlock>
        <ProfileSummaryItem 
            {...props.profile} 
            onStatusChange={() => props.onEdit('status')}
            onExtendToggle={() => setExtended(prev => !prev)}
            isSelected={props.isSelected}
            onToggleSelect={() => props.onToggleSelect()}
        />
        {extended && <ProfileTable 
                profile={props.profile}
                onEdit={(f) => props.onEdit(f)}
            />
        }
    </ListBlock>
}


interface ProfileSummaryProps extends ProfileSummary {
    isSelected: boolean
    onToggleSelect: () => void

    onStatusChange: () => void
    onExtendToggle: () => void
}


function ProfileSummaryItem(props: ProfileSummaryProps) {
    const buttonText = props.status === 'running' ? 'Stop' : 'Run profile'
    return <ItemGridWrapper>
        <LetterWithCheckbox letter={props.name} 
            isActive={props.isSelected} 
            onToggle={() => props.onToggleSelect()}/>
        <ProfilePrimary name={props.name} folders={props.folders}/>
        <ProfileStatus status={props.status}/>
        <img src={`/svg/${props.platform}.svg`} alt={`Platform: ${props.platform}`}/>
        <div/>
        <DimmedText>Last run {props.lastRun}</DimmedText>
        <Button 
            color={props.status === 'running' ? 'red' : 'green'}
            onClick={() => props.onStatusChange()}
        >
            {buttonText}
        </Button>
        <Button color='dark' circle onClick={() => props.onExtendToggle()}>
            <span className="material-icons">settings</span>
        </Button>
    </ItemGridWrapper>
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


function ProfilePrimary(props: {name: string, folders: string[]}) {
    return <div className="flex_v">
        <div>{props.name}</div>
        <FoldersSubText>
            {props.folders.map((folder) => 
                <span key={folder}>{folder}</span>
            )}
        </FoldersSubText>
    </div>
}
