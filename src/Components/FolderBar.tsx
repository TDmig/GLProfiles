import React from 'react'
import { NavButton } from 'Components/Buttons/NavButton'


import { VerticalSeparator } from './Separator'
import { DimmedButton } from './Buttons'
import styled from 'styled-components';


const FolderBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content min-content;

    margin-bottom: 1.4em;

    nav {
        display: flex;
    }
`


type folderType = null | string


interface FolderBarProps {
    folders: folderType[]
    currentFolder: folderType
    onFolderChange: (newFolder: folderType) => void
}


export default function FolderBar(props: FolderBarProps) {
    const folders = [null, ...props.folders]

    return <FolderBarWrapper>
        <nav>
            {folders.map((folder, i) => (
                <NavButton 
                    active={folder === props.currentFolder}
                    onClick={() => props.onFolderChange(folder)}
                >
                    {folder === null ? 'All profiles' : folder}
                </NavButton>
            ))}
        </nav>
        <VerticalSeparator/>
        <DimmedButton>
            {/* No ordering implemented for now */}
            <span>Last update</span>
            <span className="material-icons">
                expand_more
            </span>
        </DimmedButton>
    </FolderBarWrapper>
}
