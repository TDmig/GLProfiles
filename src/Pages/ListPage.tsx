import { ListBlock } from 'Components/ListBlock/ListBlock';
import React from 'react'
import FolderBar from "../Components/FolderBar";
import ProfileItem from "../Components/ListBlock/ProfileItem";
import { status, platform, Profile } from '../types';


const s: status = 'ready'
const p: platform = 'Windows'


const first: Profile = {
    'name': 'Test 123',
    'folders': ['Folder1', 'Folder2', 'JustFolder1'],
    'status': s,
    'platform': p, 
    'lastRun': '20 May 2021',

    'proxy': ['HTTP Proxy', '127.0.0.10.0.0.0.0.0.0'],
    'language': ['English (UK)', 'English (US)', 'French'],
    'timezone': 'Europe / Madrid (+01:00)',
    'resolution': '1920x1080',
    'geolocation': 'Stuttgart',
    'cookie': ['CGIC', 'other 1', 'other 2', 'other 3'],
    'notes': 'Заметка с паролями и логинами для амазона',
    'profileID': '5ff85f4d355d435fe7b95a52',
}


export default function ListPage() {

    const profiles = [first, first, first, first, first, first]

    return <div className="list-page">
        <FolderBar/>

        {profiles.map((profile, i) => <ProfileItem profile={profile} key={i}/>)}

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