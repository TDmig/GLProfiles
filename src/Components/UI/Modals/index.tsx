import { useRef } from 'react'
import styled from 'styled-components'
import { useOutsideClick } from 'Utils/hooks';


const ModalWrapper = styled.div`
    position: fixed;
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
