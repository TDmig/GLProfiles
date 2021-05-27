import { ListBlock } from 'Components/ListBlock/ListBlock';
import React from 'react'
import FolderBar from "../Components/FolderBar";
import ProfileItem from "../Components/ListBlock/ProfileItem";
import { Profile } from '../types';
import { EditModal, Modal } from '../Components/Popups/index';
import { useState } from 'react';
import Select from '../Components/Select';
import { TextArea } from '../Components/SearchField';



const actualProfiles: Array<Profile> = [{
    'name': 'Test 123',
    'folders': ['Folder1', 'Folder2', 'JustFolder1'],
    'status': 'ready',
    'platform': 'Windows', 
    'lastRun': '20 May 2021',

    'proxy': ['HTTP Proxy', 'US (United States)', '127.0.0.1'],
    'language': ['English (UK)', 'English (US)', 'French'],
    'timezone': 'Madrid (+01:00)',
    'resolution': '1920x1080',
    'geolocation': 'Stuttgart',
    'cookie': ['CGIC', 'other 1', 'other 2', 'other 3'],
    'notes': 'Заметка с паролями и логинами для амазона',
    'profileID': '5ff85f4d355d435fe7b95a52',
}]


const possibleValues: Record<string, string[]> = {
    'proxy': ['HTTP Proxy', 'SOCKS4 Proxy', 'SOCKS5 Proxy'],
    'proxy__country': ['US (United States)', 'RU (Russia)'],
    'timezone': ['London (+00:00)', 'Madrid (+01:00)', 'New York (-05:00)'],
    'resolution': ['1920x1080', '1280x720'],
}


/**
 * Simulating API
 */
function editProfiles(profileID: string, field: string, value: any): Array<Profile> {
    const profile = actualProfiles.find((p) => p.profileID === profileID)
    if (profile === undefined) {
        throw Error('404 profile not found')
    }
    if (field === 'status') {
        profile.status = value
    } else if (field === 'notes') {
        profile.notes = value
    } else if (field === 'proxy') {
        profile.proxy[0] = value
    } else if (field === 'timezone') {
        profile.timezone = value
    } else if (field === 'resolution') {
        profile.resolution = value
    } else {
        throw Error('Trying to edit unknown field')
    }
    console.log(profile)
    return [...actualProfiles]
}


interface FilledEditModalProps {
    profile: Profile
    field: string
    onSave: (value: any) => void
    onExit: () => void
}


function FilledEditModal(props: FilledEditModalProps) {
    const [value, setValue] = useState<any>(null)

    const onSave = () => {
        console.log('hey', value)
        props.onSave(value)
    }

    let options: string[] | null, selectedOption: string | null

    switch(props.field) {
        case 'notes':
            options = null
            selectedOption = props.profile.notes
            break
        case 'proxy':
            options = possibleValues.proxy
            selectedOption = props.profile.proxy[0]
            break
        case 'timezone':
            options = possibleValues.timezone
            selectedOption = props.profile.timezone
            break
        case 'resolution':
            options = possibleValues.resolution
            selectedOption = props.profile.resolution
            break
        default:
            throw Error('Trying to edit unknown field')
    }

    return <EditModal 
        active={true} 
        title={'Edit ' + props.field} 
        onClose={() => props.onExit()}
        onSave={() => onSave()}
    >
        {(options && selectedOption)
            ? <>
                <b>{props.field.charAt(0).toUpperCase() + props.field.slice(1)}:</b>
                <Select
                    width='22em'
                    options={options}
                    selectedOption={selectedOption}
                    onOptionChanged={(v) => setValue(v)}
                />
            </>
            : <>
                <TextArea value={value ? value : selectedOption} onChange={(v) => setValue(v)}/>
            </>}
        
    </EditModal>
}


export default function ListPage() {
    const [profiles, setProfiles] = useState(actualProfiles)
    const [editing, setEditing] = useState<{profile: Profile, field: string} | null>(null)


    function onEdit(f: string, profile: Profile) {
        console.log(f, profile)
        if (f === 'status') {
            setProfiles(editProfiles(profile.profileID, f, profile.status === 'ready' ? 'running' : 'ready'))
        } else {
            setEditing({profile: profile, field: f})
        }
    }

    return <div className="list-page">
        <FolderBar/>

        {profiles.map((profile, i) => 
            <ProfileItem profile={profile} key={i}
                onEdit={(f) => onEdit(f, profile)}
            />
        )}

        {editing && 
            <FilledEditModal 
                profile={editing.profile} 
                field={editing.field}
                onSave={
                    (v) => v 
                    ? setProfiles(editProfiles(editing.profile.profileID, editing.field, v))
                    : {}
                }
                onExit={() => setEditing(null)}
            />
        }

        {/*
                name={'Hello world'} folders={['Folder3', 'More Folder']} status={'running'}
                platform={'Linux'} lastRun={'12 May 2021'}

                name={'rough-term'} folders={['Folder3', 'Folder4']} status={'ready'}
                platform={'Linux'} lastRun={'17 Apr 2021'}

                name={'London'} folders={['Cities', 'More Folder', 'Folder2']} status={'ready'}
                platform={'Mac'} lastRun={'15 Jan 2021'}
            
                name={'Los-Angeles'} folders={['More Folder', 'Cities']} status={'running'}
                platform={'Windows'} lastRun={'11 Oct 2020'}

                name={'Moscow 4'} folders={['Cities', 'Folder4']} status={'running'}
                platform={'Mac'} lastRun={'07 Mar 2020'}
        */}
    </div>
}