import { faBold } from "@fortawesome/free-solid-svg-icons";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";

export default class Effect {
    static effect = [
        { name: "b", icon: faBold, frontSet: "**", backSet: "**" },
        { name: "i", icon: faItalic, frontSet: "_", backSet: "_" },
        { name: "m", icon: faStrikethrough, frontSet: "~~", backSet: "~~" },
        { name: "q", icon: faChevronRight, frontSet: "\n> ", backSet: "\n" },
        { name: "1", icon: faDiceOne, frontSet: "\n# ", backSet: "\n" },
        { name: "2", icon: faDiceTwo, frontSet: "\n## ", backSet: "\n" },
        { name: "3", icon: faDiceThree, frontSet: "\n### ", backSet: "\n" },
        {
            name: "heading",
            icon: faHeading,
            frontSet: "",
            backSet: "\n----------"
        },
        { name: "u", icon: faListUl, frontSet: "\n* ", backSet: "\n" },
        { name: "o", icon: faListOl, frontSet: "\n1. ", backSet: "\n" },
        { name: "cl1", icon: faSquare, frontSet: "\n* [ ] ", backSet: "\n" },
        {
            name: "cl2",
            icon: faCheckSquare,
            frontSet: "\n* [x] ",
            backSet: "\n"
        },
        {
            name: "line",
            icon: faGripLines,
            frontSet: "\n\n-----------------\n\n",
            backSet: ""
        },
        { name: "code", icon: faCode, frontSet: "```\n", backSet: "\n```" },
        {
            name: "table",
            icon: faTable,
            frontSet:
                "Item     | Value\n-------- | -----\nComputer | $1600\nPhone    | $12\nPipe     | $1\n",
            backSet: "\n"
        },
        {
            name: "l",
            icon: faLink,
            frontSet: "[link](http://example.com)",
            backSet: ""
        },
        {
            name: "image",
            icon: faImage,
            frontSet: "![Alt](img.jpg)",
            backSet: ""
        }
    ];

    static set(name, editor) {
        let setting = this.effect.filter(x => x.name === name)[0];

        if (setting === null || setting === undefined) return false;

        let startIndex = editor.selectionStart;
        let endIndex = editor.selectionEnd;

        let text = editor.value.substring(startIndex, endIndex);
        let replaceText = setting.frontSet + text + setting.backSet;

        if (!document.execCommand("insertText", false, replaceText)) {
            editor.setRangeText(replaceText);
        }

        editor.selectionStart = startIndex + setting.frontSet.length;
        editor.selectionEnd =
            startIndex + setting.frontSet.length + text.length;
        return true;
    }
}
