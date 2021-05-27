import styled from "styled-components"
import { status } from '../../types'


export default function ProfileStatus(props: {status: "running" | "ready"}) {
    return <ProfileStatusContainer status={props.status}>
        <span className="material-icons">circle</span>
        <span>{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</span>
    </ProfileStatusContainer>
}


interface ProfileStatusProps {
    status: status
}


const ProfileStatusContainer = styled.div<ProfileStatusProps>`
    padding: 0.5em 0.7em;
    border-radius: 0.6em;

    width: fit-content;

    user-select: none;
    cursor: default;

    background: ${props => props.status === 'running' ? '#3D615A' : '#BDBDBD'};

    .material-icons {
        font-size: 0.5em;
        color: ${props => props.status === 'running' ? '#00A987' : '#797979'};
        margin-right: 0.6em;
    }


    ${props => props.status === 'ready' && 'span {color: #5A5A5A;}'}
`