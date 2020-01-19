import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Header from "./Header";

import styled from "styled-components";

export default class MarkdownEditorUI extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ""};
        this.onChangeText = this.onChangeText.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChangeText(e){
        this.setState({
            text: e.target.value
        }); 
    }

    onKeyDown(e){
        console.log(e.key);
        if(e.ctrlKey){
            if(e.key === "b"){
                let editor = e.target;
                let startIndex = editor.selectionStart;
                let endIndex = editor.selectionEnd;
                let replaceText = "**" + editor.value.substring(startIndex, endIndex + 1) + "**";

                editor.value = this.replaceText(editor.value, startIndex, endIndex, replaceText);
                editor.selectionStart = startIndex;
                editor.selectionEnd = startIndex + replaceText.length;
            }
        }
    }

    replaceText(text, StartIndex, EndIndex, character){
        return text.substr(0, StartIndex) + character + text.substr(EndIndex + 1, character.length);
    }

    render(){
        return (
            <Container>
                <Header/>
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
    height: calc(100% - 70px);
`