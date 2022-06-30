import React, { useEffect } from "react";
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "./editor.css";
import dynamicConfig from "./editorConfig";

const HtmlEditor = () => {
    useEffect(() => {
        loadGrapesJs();
    }, []);

    const loadGrapesJs = () => {
        const editor = Grapesjs.init(dynamicConfig());
        window.editor = editor;
        editor.on("style:property:update", (a) => {
            console.log(a, "dvdsvdsvsvs");
        });
    };
    return (
        <>
            <div id="gjs">
                <h1>Hello World Component!</h1>
            </div>
        </>
    );
};

export default HtmlEditor;
