import styled from 'styled-components'

import { DimmedText } from 'Components/TextStyles';
import { Profile } from 'types';
import { HorizontalFlex } from 'Components/Flex';
import { Button } from '../Buttons/index';
import { useState } from 'react';


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
        
    }
`


function ChevronButtonEdit({onClick}: {onClick: () => void}) {
    return <Button circle onClick={() => onClick()}>
        <span className="material-icons">
            expand_more
        </span>
    </Button>
}


const ShadowEditButton = styled.div`
    position: absolute;
    right: 0;
    width: 4.6em;

    height: 100%;

    display: flex;
    align-content: center;
    justify-content: flex-end;
    
    & > * {
        height: fit-content;
        margin: auto 0;
    }

    user-select: none;
    cursor: pointer;

    text-decoration: underline;
    background-image: linear-gradient(to left, #43484C, #43484C 50%, #43484C00);
`


function HoverDiv({children, onClick}: 
    React.PropsWithChildren<{onClick: () => void}>) {

    const [hovering, setHovering] = useState(false)
    
    return <div style={{'position': 'relative'}}
        onClick={() => onClick()}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >
        {children}
        {hovering && <ShadowEditButton>
            <div>edit</div>
        </ShadowEditButton>}
    </div>
}


export default function ProfileTable({profile, onEdit}: 
    {profile: Profile, onEdit: (field: string) => void}) {

    return <ProfileTableWrapper>
        <div>
            <HoverDiv onClick={() => onEdit('proxy')}>
                <b>Proxy</b>
                <span>{profile.proxy[0]}</span>
                <DimmedText>{profile.proxy[1]}</DimmedText>
            </HoverDiv>
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
            <HoverDiv onClick={() => onEdit('notes')}>
                <b>Notes</b>
                <span style={{'whiteSpace': 'break-spaces'}}>{profile.notes}</span>
            </HoverDiv>
            <div>
                <b>Profile ID</b>
                <span>{profile.profileID}</span>
            </div>
            <div>
                <b>Folders</b>
                <HorizontalFlex margin='1em'>
                    {profile.folders.map((folder) => 
                        <span>
                            {folder}
                        </span>
                    )}
                </HorizontalFlex>
            </div>
        </div>
    </ProfileTableWrapper>
}
