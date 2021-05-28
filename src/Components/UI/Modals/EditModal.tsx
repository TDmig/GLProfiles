import { Button } from 'Components/UI/Buttons';
import { HorizontalFlex } from 'Components/UI/Flex';
import styled from 'styled-components';
import { Modal } from './index';


const EditModalWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0.5em 0;

    & > * {
        margin: 0 auto;
    }

    & > *:not(:last-child) {
        border-bottom: 0.05em solid #383D42;
        padding-bottom: 1em;
        margin-bottom: 1em;
    }

    b:not(.edit-title) {
        display: block;
        font-weight: 500;
        margin-bottom: 0.8em;
    }

    b.edit-title {
        font-size: 1.4em;
        font-weight: 500;
    }
`

interface EditModalProps {
    active: boolean;
    title: string;
    onClose: () => void;
    onSave: () => void;
}


export default function EditModal({ active, title, onClose, onSave, children }: React.PropsWithChildren<EditModalProps>) {
    return <Modal active={active} onClose={() => onClose()}>
        <EditModalWrapper>
            <div><b className='edit-title'>{title}</b></div>
            <div>
                {children}
            </div>
            <HorizontalFlex margin='0.5em'>
                <Button color='green' onClick={() => { onSave(); onClose(); }}>Save</Button>
                <Button onClick={() => onClose()}>Cancel</Button>
            </HorizontalFlex>
        </EditModalWrapper>
    </Modal>
}
