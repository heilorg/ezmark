import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Header from "./Header";

import Effect from "../Effect";

import styled from "styled-components";

export default class MarkdownEditorUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onEditorBlur = this.onEditorBlur.bind(this);
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    onKeyDown(e) {
        if (e.ctrlKey) {
            if (Effect.set(e)) {
                e.preventDefault();
            } else if (e.key === "s") {
                e.preventDefault();
                this.saveFile(e.target.value);
            }
        }
        if (e.key === "Tab") e.preventDefault();
    }

    onButtonClick(name) {
        if (Effect.set(name, document.querySelector("#editor"))) {
            this.setState({
                text: document.querySelector("#editor").value
            });
            document.querySelector("#editor").focus();
        }
    }

    onEditorBlur(e) {
        e.target.focus();
    }

    saveFile(data) {
        var link = document.createElement("a");
        link.download = "download.md";
        link.href =
            "data: text/plain;charset=utf-8," +
            "\ufeff" +
            encodeURIComponent(data);
        link.click();
    }

    render() {
        return (
            <Container>
                <Header onButtonClick={this.onButtonClick} />
                <MarkdownEditor>
                    <Editor
                        onChange={this.onChangeText}
                        onKeyDown={this.onKeyDown}
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
`;
