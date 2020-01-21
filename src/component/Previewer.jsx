import React from "react";
import marked from "marked";

import styled from "styled-components";

marked.setOptions({
    sanitize: true
});

export default function Previewer(props){
    return (
        <MarkedPreviewer id="priviewer">
            <span dangerouslySetInnerHTML={{__html:marked(props.value) }} />
        </MarkedPreviewer>
    );
}

const MarkedPreviewer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin : 10px;
    width: 100%;
    height: calc(100% - 20px);
    position: relative;
    overflow-y: scroll;
    flex: 2;
    border: solid #123 1px;
    font-size: 18px;
    font-family: "arial", sans-serif;
`;