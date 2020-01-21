import React from "react";

import { faBold } from "@fortawesome/free-solid-svg-icons";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

export default function Header(props) {
    return (
        <EZMarkHeader>
            EZMark
            <Tools>
                <Tool title="ctrl + b" onClick={() => props.onButtonClick("b")} >
                    <FontAwesomeIcon icon={faBold} />
                </Tool>
                <Tool title="ctrl + i" onClick={() => props.onButtonClick("i")} >
                    <FontAwesomeIcon icon={faItalic} />
                </Tool>
                <Tool title="ctrl + m" onClick={() => props.onButtonClick("m")} >
                    <FontAwesomeIcon icon={faStrikethrough} />
                </Tool>
                <Tool title="ctrl + q" onClick={() => props.onButtonClick("q")} >
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("heading")} >
                    <FontAwesomeIcon icon={faHeading} />
                </Tool>
                <Tool title="ctrl + 1" onClick={() => props.onButtonClick("1")} >
                    <FontAwesomeIcon icon={faHeading} />1
                </Tool>
                <Tool title="ctrl + 2" onClick={() => props.onButtonClick("2")} >
                    <FontAwesomeIcon icon={faHeading} />2
                </Tool>
                <Tool title="ctrl + 3" onClick={() => props.onButtonClick("3")} >
                    <FontAwesomeIcon icon={faHeading} />3
                </Tool>
                <Tool title="ctrl + u" onClick={() => props.onButtonClick("u")} >
                    <FontAwesomeIcon icon={faListUl} />
                </Tool>
                <Tool title="ctrl + o" onClick={() => props.onButtonClick("o")} >
                    <FontAwesomeIcon icon={faListOl} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("cl1")} >
                    <FontAwesomeIcon icon={faSquare} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("cl2")} >
                    <FontAwesomeIcon icon={faCheckSquare} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("line")} >
                    <FontAwesomeIcon icon={faGripLines} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("code")} >
                    <FontAwesomeIcon icon={faCode} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("table")} >
                    <FontAwesomeIcon icon={faTable} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("link")} >
                    <FontAwesomeIcon icon={faLink} />
                </Tool>
                <Tool onClick={() => props.onButtonClick("image")} >
                    <FontAwesomeIcon icon={faImage} />
                </Tool>
            </Tools>
        </EZMarkHeader>
    );
}

const EZMarkHeader = styled.header`
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: #718EFF;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
`;

const Tools = styled.div`
    display: flex;
`;

const Tool = styled.button`
    width: 35px;
    height: 35px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    box-shadow: none;
    border: none;
    background-color: #fff;
    cursor: pointer;
`;