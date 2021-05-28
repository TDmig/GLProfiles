import ProfileItem from "../Components/ProfileItem";
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
    let allSelectedInAvailable = true
    for (let profile of profiles) {
        if (!selectedProfiles.includes(profile.profileID)) {
            allSelectedInAvailable = false
            break
        }
    }


    function unselectAllCurrentlyAvailable() {
        setSelectedProfiles(selectedProfiles.filter(
            profileID => profiles.find(p => p.profileID === profileID) === undefined
        ))
    }


    function selectAllCurrentlyAvailable() {
        setSelectedProfiles(
            [...selectedProfiles, ...profiles
                .filter(p => !selectedProfiles.includes(p.profileID))
                .reduce((acc: string[], cur) => [...acc, cur.profileID], [])
            ]
        )
    }


    function toggleSelect(id: string) {
        selectedProfiles.includes(id) 
            ? setSelectedProfiles(selectedProfiles.filter(item => item !== id))
            : setSelectedProfiles([...selectedProfiles, id])
    }


    function onEdit(f: string, profile: Profile) {
        if (f === 'status') {
            onEditProfile(profile.profileID, f, profile.status === 'ready' ? 'running' : 'ready')
        } else {
            setEditing({profile: profile, field: f})
        }
    }

    return <div>
        {hasSelected && <SelectionBar
            allSelected={allSelectedInAvailable}
            onToggleSelectAll={() => allSelectedInAvailable 
                ? unselectAllCurrentlyAvailable()
                : selectAllCurrentlyAvailable()
            }
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
