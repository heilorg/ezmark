import React from "react";

import styled from "styled-components";

export default function Editor(props) {
    return (
        <MarkedEditor id="editor" value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} />
    );
}

const MarkedEditor = styled.textarea`
    margin : 10px;
    width: 100%;
    height: calc(100% - 20px);
    border: solid #123 1px;
    resize: none;
    flex: 2;
    font-size: 18px;
    padding: 20px;
    font-family: 'Nanum Gothic Coding', monospace;
    outline: none;
`;