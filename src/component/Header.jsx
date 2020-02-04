import React from "react";
import Tool from "./Tool";
import Effect from "../Effect";

import styled from "styled-components";

export default function Header(props) {
    return (
        <EZMarkHeader>
            EZMark
            <Tools>
                {Effect.effect.map((data, idx) => {
                    return (
                        <Tool
                            title={
                                data.name.length === 1
                                    ? "ctrl + " + data.name
                                    : ""
                            }
                            onButtonClick={props.onButtonClick}
                            key={idx}
                            icon={data.icon}
                            name={data.name}
                        />
                    );
                })}
            </Tools>
        </EZMarkHeader>
    );
}

const EZMarkHeader = styled.header`
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: #718eff;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
`;

const Tools = styled.div`
    display: flex;
`;
