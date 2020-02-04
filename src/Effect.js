export default class Effect {
    static effect = [
        { name: "1", frontSet: "\n# ", backSet: "\n" },
        { name: "2", frontSet: "\n## ", backSet: "\n" },
        { name: "3", frontSet: "\n### ", backSet: "\n" },
        { name: "heading", frontSet: "", backSet: "\n----------" },
        { name: "b", frontSet: "**", backSet: "**" },
        { name: "i", frontSet: "_", backSet: "_" },
        { name: "q", frontSet: "\n> ", backSet: "\n" },
        { name: "m", frontSet: "~~", backSet: "~~" },
        { name: "u", frontSet: "\n* ", backSet: "\n" },
        { name: "o", frontSet: "\n1. ", backSet: "\n" },
        { name: "cl1", frontSet: "\n* [ ] ", backSet: "\n" },
        { name: "cl2", frontSet: "\n* [x] ", backSet: "\n" },
        { name: "l", frontSet: "[link](http://example.com)", backSet: "" },
        { name: "image", frontSet: "![Alt](img.jpg)", backSet: "" },
        { name: "code", frontSet: "```\n", backSet: "\n```" },
        {
            name: "table",
            frontSet:
                "Item     | Value\n-------- | -----\nComputer | $1600\nPhone    | $12\nPipe     | $1\n",
            backSet: "\n"
        },
        { name: "line", frontSet: "\n\n-----------------\n\n", backSet: "" }
    ];

    static set(event) {
        let name = event.key;
        let editor = event.target;

        let setting = this.effect.filter(x => x.name === name)[0];

        if (setting === null || setting === undefined) return false;
        event.preventDefault();

        let startIndex = editor.selectionStart;
        let endIndex = editor.selectionEnd;
        let text = editor.value.substring(startIndex, endIndex);
        let replaceText = setting.frontSet + text + setting.backSet;

        if (!document.execCommand("insertText", false, replaceText)) {
            editor.setRangeText(replaceText);
        }
        // editor.value = this.replaceText(editor.value, startIndex, endIndex, replaceText);
        editor.selectionStart = startIndex + setting.frontSet.length;
        editor.selectionEnd =
            startIndex + setting.frontSet.length + text.length;
        return true;
    }

    // static replaceText(text, StartIndex, EndIndex, character){
    //     return text.substr(0, StartIndex) + character + text.substr(EndIndex, character.length);
    // }
}
