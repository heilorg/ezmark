import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Tools from "./Tools";
import Header from "./Header";

import styled from "styled-components";

export default class MarkdownEditorUI extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ""};
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(e){
        this.setState({
            text: e.target.value
        });
    }

    render(){
        return (
            <div>
                <Header/>
                <MarkdownEditor>
                    <Editor value={this.state.text} onChange={this.onChangeText} />
                    <Previewer value={this.state.text} />
                    <Tools />
                </MarkdownEditor>
            </div>
        );
    }
}

const MarkdownEditor = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

