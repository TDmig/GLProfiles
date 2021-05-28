import FolderBar from "../Components/FolderBar";
import ProfileItem from "../Components/ListBlock/ProfileItem";
import { Profile } from '../types';
import React, { useState } from 'react';
import { SelectionBar } from "../Components/SelectionBar";
import FilledEditModal from "./EditModals";



interface ProfilesContainerProps {
    profiles: Profile[]
    onEditProfile: (profileID: string, field: string, value: any) => void
}


export default function ProfilesContainer(props: ProfilesContainerProps) {
    const {profiles, onEditProfile} = props
    const [editing, setEditing] = useState<{profile: Profile, field: string} | null>(null)

    const [selectedProfiles, setSelectedProfiles] = useState<string[]>([])


    const hasSelected = selectedProfiles.length > 0
    const allSelected = selectedProfiles.length === profiles.length


    function toggleSelect(id: string) {
        selectedProfiles.includes(id) 
            ? setSelectedProfiles(selectedProfiles.filter(item => item !== id))
            : setSelectedProfiles([...selectedProfiles, id])
    }


    function onEdit(f: string, profile: Profile) {
        console.log(f, profile)
        if (f === 'status') {
            onEditProfile(profile.profileID, f, profile.status === 'ready' ? 'running' : 'ready')
        } else {
            setEditing({profile: profile, field: f})
        }
    }

    return <div>
        {hasSelected && <SelectionBar
            allSelected={allSelected}
            onToggleSelectAll={() => allSelected ? setSelectedProfiles([]) : setSelectedProfiles(
                profiles.reduce((acc: string[], cur) => [...acc, cur.profileID], [])
            )}
            onCancel={() => setSelectedProfiles([])}
        />}

        {profiles.map((profile, i) => 
            <ProfileItem profile={profile} key={i}
                onEdit={(f) => onEdit(f, profile)}
                isSelected={selectedProfiles.includes(profile.profileID)}
                onToggleSelect={() => toggleSelect(profile.profileID)}
            />
        )}

        {editing && 
            <FilledEditModal 
                profile={editing.profile} 
                field={editing.field}
                onSave={
                    (v) => v 
                    ? onEditProfile(editing.profile.profileID, editing.field, v)
                    : {}
                }
                onExit={() => setEditing(null)}
            />
        }
    </div>
}
