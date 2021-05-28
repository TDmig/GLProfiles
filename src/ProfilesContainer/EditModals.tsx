import { Profile } from '../types';
import EditModal from "../Components/UI/Modals/EditModal";
import { useState } from 'react';
import Select from '../Components/UI/Select';
import { TextArea } from 'Components/UI/Input';
import { possibleValues } from 'API';


interface FilledEditModalProps {
    profile: Profile
    field: string
    onSave: (value: any) => void
    onExit: () => void
}


/**
 * Shows editing modal specific to field, giving ability to save it.
 * 
 * This is simpification of all possible edit popups.
 * Generally, each field should have separate component,
 * But for simplicity of prototyping - they all being merged here,
 * With only field string determining their nature.
 */
export default function FilledEditModal(props: FilledEditModalProps) {
    const [value, setValue] = useState<any>(null)

    const onSave = () => {
        props.onSave(value)
    }

    let options: string[] | null, selectedOption: string | null

    // This switch case should actually be separate
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
