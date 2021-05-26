import React from 'react'
import FolderBar from "../Components/FolderBar";
import ProfileItem from "../Components/ListBlock/ProfileItem";


export default function ListPage() {
    return <div className="list-page">
        <FolderBar/>
        <ProfileItem
            name={'Test 123'} folders={['Folder1', 'Folder2', 'JustFolder1']} status={'ready'}
            platform={'Windows'} lastRun={'20 May 2021'}
        />
        <ProfileItem
            name={'Hello world'} folders={['Folder3', 'More Folder']} status={'running'}
            platform={'Linux'} lastRun={'12 May 2021'}
        />
        <ProfileItem
            name={'rough-term'} folders={['Folder3', 'Folder4']} status={'ready'}
            platform={'Linux'} lastRun={'17 Apr 2021'}
        />
        <ProfileItem
            name={'London'} folders={['Cities', 'More Folder', 'Folder2']} status={'ready'}
            platform={'Mac'} lastRun={'15 Jan 2021'}
        />
        <ProfileItem
            name={'Los-Angeles'} folders={['More Folder', 'Cities']} status={'running'}
            platform={'Windows'} lastRun={'11 Oct 2020'}
        />
        <ProfileItem
            name={'Moscow 4'} folders={['Cities', 'Folder4']} status={'running'}
            platform={'Mac'} lastRun={'07 Mar 2020'}
        />
    </div>
}