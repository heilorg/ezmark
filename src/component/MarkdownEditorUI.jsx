import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Header from "./Header";

import Effect from "../Effect";

import styled from "styled-components";

export default class MarkdownEditorUI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            history : [
                {text: ""},
            ],
            now: 0,
            end: 0,
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onEditorBlur = this.onEditorBlur.bind(this);
    }

    onChangeText(e){
        let {history, now, end} = this.state;
        if(history[now + 1] === undefined || (history[now + 1] !== undefined && e.target.value !== history[now + 1].text)){
            // 이변 칸의 데이터가 존재하지 않을 때
            // 이변 칸의 데이터가 들어온 데이터와 일치할 때
            now += 1;
            end = now;
            history = history.filter((x, idx) => idx < now);
            history = history.concat({text: e.target.value});
        }
        this.setState({
            text: e.target.value,
            history: history,
            now: now,
            end: end
        });
    }

    onKeyDown(e){
        if(e.ctrlKey){
            if(Effect.set(e.key, e.target)){
                e.preventDefault();
            }
            if(e.key === "s"){
                e.preventDefault();
                this.saveFile(e.target.value);
            }
            if(e.key === "z"){
                let {now, history} = this.state;
                now = (now - 1) < 0 ? now : now - 1;
                this.setState({
                    text: history[now].text,
                    now
                });
            }
            if(e.key === "y"){
                let {now, end, history} = this.state;
                
                now = (now + 1) > end ? now : now + 1;
                this.setState({
                    text: history[now].text,
                    now,
                });
            }
        }
        if(e.key === "Tab")e.preventDefault();
    }

    onButtonClick(name){
        if(Effect.set(name, document.querySelector("#editor"))){
            this.setState({
                text: document.querySelector("#editor").value
            });
            document.querySelector("#editor").focus();
        }
    }

    onEditorBlur(e){
        e.target.focus();
    }

    saveFile(data){
        var link = document.createElement("a");
        link.download = "download.md";
        link.href = 'data: text/plain;charset=utf-8,' + '\ufeff' + encodeURIComponent(data);
        link.click();
    }

    render(){
        return (
            <Container>
                <Header onButtonClick={this.onButtonClick} />
                <MarkdownEditor>
                    <Editor 
                        value={this.state.text} 
                        onChange={this.onChangeText} 
                        onKeyDown={this.onKeyDown} 
                        onEditorLoad={this.onEditorLoad}
                        onEditorBlur={this.onEditorBlur}
                    />
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