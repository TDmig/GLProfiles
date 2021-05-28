import styled from 'styled-components'

import { DimmedText } from 'Components/UI/TextStyles';
import { Profile } from 'types';
import { HorizontalFlex } from 'Components/UI/Flex';
import { Button } from '../UI/Buttons/index';
import ShadowEditContainer from '../UI/Buttons/ShadowEditButton';


const ProfileTableWrapper = styled.div`
    margin-top: 2.6em;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4em;

    & > div {
        display: flex;
        flex-direction: column;
        & > * {
            display: flex;
            align-items: center;
            
            margin: auto 0;
            height: 4em;
            & > * + * {
                margin-left: 1.5em;
            }
        }
        & > * + * {
            border-top: 2px solid #393F44;
        }
    }

    * {
        font-size: 0.95em;
    }

    b {
        font-weight: 700;
        min-width: fit-content;
        
    }
`


export default function ProfileTable({profile, onEdit}: 
    {profile: Profile, onEdit: (field: string) => void}) {

    return <ProfileTableWrapper>
        <div>
            <ShadowEditContainer onClick={() => onEdit('proxy')}>
                <b>Proxy</b>
                <span>{profile.proxy[0]}</span>
                <DimmedText>{profile.proxy[2]}</DimmedText>
            </ShadowEditContainer>
            <div>
                <b>Language</b>
                <span>{profile.language[0]}</span>
                {profile.language.length > 1 && 
                    <DimmedText>and {profile.language.length - 1} more...</DimmedText>
                }
            </div>
            <div>
                <b>Timezone</b>
                <span>{profile.timezone}</span>
                <ChevronButtonEdit onClick={() => onEdit('timezone')}/>
            </div>
        </div>
        <div>
            <div>
                <b>Resolution</b>
                <span>{profile.resolution}</span>
                <ChevronButtonEdit onClick={() => onEdit('resolution')}/>
            </div>
            <div>
                <b>Geolocation</b>
                <span>{profile.geolocation}</span>
            </div>
            <div>
                <b>Cookie</b>
                <span>{profile.cookie[0]}</span>
                {profile.cookie.length > 1 && 
                    <DimmedText>and {profile.cookie.length - 1} more...</DimmedText>
                }
            </div>
        </div>
        <div>
            <ShadowEditContainer onClick={() => onEdit('notes')}>
                <b>Notes</b>
                {profile.notes.trim().length > 0 
                    ? <LimitedText>{profile.notes}</LimitedText>
                    : <DimmedText>Empty</DimmedText>
                }
            </ShadowEditContainer>
            <div>
                <b>Profile ID</b>
                <span>{profile.profileID}</span>
            </div>
            <div>
                <b>Folders</b>
                <HorizontalFlex margin='1em'>
                    {profile.folders.map((folder, i) => 
                        <span key={i}>
                            {folder}
                        </span>
                    )}
                </HorizontalFlex>
            </div>
        </div>
    </ProfileTableWrapper>
}


function ChevronButtonEdit({onClick}: {onClick: () => void}) {
    return <Button circle onClick={() => onClick()}>
        <span className="material-icons">
            expand_more
        </span>
    </Button>
}


const LimitedText = styled.span`
    white-space: break-spaces;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 80%;
`
