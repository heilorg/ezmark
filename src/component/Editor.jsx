import React from "react";

import styled from "styled-components";

export default function Editor(props) {
    return (
        <MarkedEditor id="editor" value={props.value} onChange={props.onChange} />
    );
}

const MarkedEditor = styled.textarea`
    margin : 10px;
    width: 100%;
    border: solid #ddd 1px;
    resize: none;
    flex: 2;
`;