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
    padding-left: 10px;
    margin : 10px;
    height: 100%;
    width: 100%;
    padding: 2px;
    position: relative;
    overflow-y: scroll;
    flex: 2;
    border: 1px solid #ddd;
`;