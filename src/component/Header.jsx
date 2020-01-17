import React from "react";

import styled from "styled-components";

export default function Header(props) {
    return (
        <EZMarkHeader>
            EZMark
        </EZMarkHeader>
    );
}

const EZMarkHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: #000;
    color: #fff;
`;