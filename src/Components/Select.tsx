import React, { useState } from "react";
import styled from "styled-components";
import { useOutsideClick } from '../Utils/hooks';
import { useRef } from 'react';
import { HorizontalFlex } from 'Components/Flex';


const DropDown = styled("div")<{width: string}>`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    width: ${props => props.width};
    background-color: #6C7175;

    li, span {
        font-size: 0.85em;
    }

    &, * {
        box-sizing: border-box;
        user-select: none;
    }

    &, ul {
        border-radius: 1.5em;
        padding: 1em;
    }

    .material-icons {
        font-size: 1.3em;
    }
`

const DropDownList = styled("ul")`
    position: fixed;
    width: inherit;
    padding: 0;
    margin: 0;
    background: #6C7175;
    margin-top: -2.15em;
    margin-left: -1em;
    cursor: pointer;

    li + li {
        margin-top: 1.4em;
    }
`

const DropDownItem = styled("li")`
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #fffa
    }

    display: flex;
    align-items: center;
    .material-icons {
        margin-left: 1em;
    }
`


interface SelectProps {
    options: Array<string>
    selectedOption: string
    width: string
    onOptionChanged: (newOption: string) => void
}


export default function Select(props: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.selectedOption);

    const ref = useRef(null)

    useOutsideClick(ref, () => setIsOpen(false))

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        props.onOptionChanged(value)
    }

    return <DropDown onClick={() => setIsOpen(!isOpen)} width={props.width} ref={ref}>
        <HorizontalFlex>
            <span>{selectedOption}</span>
            <span className='material-icons'>expand_more</span>
        </HorizontalFlex>
        {isOpen &&<DropDownList>
            {props.options.map(option => (
                <DropDownItem onClick={onOptionClicked(option)} key={option}>
                    {option}
                    {option === selectedOption && <span className='material-icons'>checkmark</span>}
                </DropDownItem>
            ))}
        </DropDownList>}
    </DropDown>
}
