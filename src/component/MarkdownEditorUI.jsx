import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Header from "./Header";

import Effect from "../Effect";

import styled from "styled-components";

export default class MarkdownEditorUI extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ""};
        this.onChangeText = this.onChangeText.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChangeText(e){
        this.setState({
            text: e.target.value
        }); 
    }

    onKeyDown(e){
        if(e.ctrlKey){
            if(Effect.set(e.key, e.target)){
                e.preventDefault();
                this.setState({
                    text: e.target.value
                });
            }
        }
    }

    onButtonClick(name){
        if(Effect.set(name, document.querySelector("#editor"))){
            this.setState({
                text: document.querySelector("#editor").value
            });
            document.querySelector("#editor").focus();
        }
    }

    render(){
        return (
            <Container>
                <Header onButtonClick={this.onButtonClick} />
                <MarkdownEditor>
                    <Editor value={this.state.text} onChange={this.onChangeText} onKeyDown={this.onKeyDown}  />
                    <Previewer value={this.state.text} />
                </MarkdownEditor>
            </Container>
        );
    }
}

const MarkdownEditor = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px);
`