import { Button } from 'Components/Buttons'
import { HorizontalFlex } from 'Components/Flex'
import { useRef } from 'react'
import styled from 'styled-components'
import { useOutsideClick } from '../../Utils/hooks';


const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        position: relative;
        /* margin: auto; */
        width: 35%;

        background: #43484C;
        padding: 1em 2.8em;

        border-radius: 0.6em;
    }
`

export function Modal({active, onClose, children}: 
    React.PropsWithChildren<{active: boolean, onClose: () => void}>) {

    const ref = useRef(null)

    useOutsideClick(ref, () => onClose())

    return !active ? null : <ModalWrapper ref={ref}>
        <div>
            {children}
        </div>
    </ModalWrapper>
}


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
    active: boolean
    title: string
    onClose: () => void
    onSave: () => void
}


export function EditModal({active, title, onClose, onSave, children}: 
    React.PropsWithChildren<EditModalProps>) {

    return <Modal active={active} onClose={() => onClose()}>
        <EditModalWrapper>
            <div><b className='edit-title'>{title}</b></div>
            <div>
                {children}
            </div>
            <HorizontalFlex margin='0.5em'>
                <Button color='green' onClick={() => {onSave(); onClose()}}>Save</Button>
                <Button onClick={() => onClose()}>Cancel</Button>
            </HorizontalFlex>
        </EditModalWrapper>
    </Modal>
}
