import "grapesjs/dist/css/grapes.min.css";

const EditorConfig = () => {
    return {
        container: "#gjs",
        height: "700px",
        width: "100%",
        plugins: ["gjs-preset-webpage"],
        storageManager: {
            id: "gjs-",
            type: "local",
            autosave: true,
            storeComponents: true,
            storeStyles: true,
            storeHtml: true,
            storeCss: true,
        },
        deviceManager: {
            devices: [
                {
                    id: "desktop",
                    name: "Desktop",
                    width: "",
                },
                {
                    id: "tablet",
                    name: "Tablet",
                    width: "768px",
                    widthMedia: "992px",
                },
                {
                    id: "mobilePortrait",
                    name: "Mobile portrait",
                    width: "320px",
                    widthMedia: "575px",
                },
            ],
        },
        pluginsOpts: {
            "grapesjs-preset-webpage": {
                blocksBasicOpts: {
                    blocks: [
                        "column1",
                        "column2",
                        "column3",
                        "column3-7",
                        "section",
                        "text",
                        "link",
                        "image",
                        "video",
                        "button",
                        "divider",
                        "spacer",
                    ],
                    flexGrid: 1,
                },
                blocks: ["link-block", "quote", "text-basic"],
            },
        },
    };
};

export default EditorConfig;
