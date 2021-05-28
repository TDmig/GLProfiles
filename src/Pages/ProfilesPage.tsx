import FolderBar from "../Components/FolderBar";
import React, { useState } from 'react';
import Header from '../Components/Header';
import { useEffect } from 'react';
import { actualProfiles, allFolders, editProfiles } from '../API/index';
import ProfilesContainer from '../ProfilesContainer/index';


export default function ProfilesPage() {
    const [searchText, setSearchText] = useState('')
    const [currentFolder, setCurrentFolder] = useState<string | null>(null)

    const [currentProfiles, setCurrentProfiles] = useState(actualProfiles)
    const [allProfiles, setAllProfiles] = useState(actualProfiles)

    useEffect(() => {
        setCurrentProfiles(allProfiles.filter(profile => (
            (searchText === '' || profile.name.toLowerCase().includes(searchText.toLowerCase()))
            && (currentFolder === null || profile.folders.includes(currentFolder))
        )))
    }, [searchText, currentFolder, allProfiles])

    return <>
        <Header searchText={searchText} onSearchChange={(s) => setSearchText(s)}/>
        <FolderBar folders={allFolders()} currentFolder={currentFolder} onFolderChange={(f) => setCurrentFolder(f)}/>
        <ProfilesContainer profiles={currentProfiles} onEditProfile={
            (id, f, v) => setAllProfiles(editProfiles(id, f, v))
        }/>
    </>
}
