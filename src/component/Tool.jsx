import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tool extends Component {
    render() {
        console.log(this.props.code);
        return (
            <ToolBtn
                title={this.props.title}
                onClick={() => this.props.onButtonClick(this.props.name)}
            >
                <FontAwesomeIcon icon={this.props.icon} />
            </ToolBtn>
        );
    }
}

const ToolBtn = styled.button`
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

export default Tool;
