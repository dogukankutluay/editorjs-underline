import UnderlinePlugin from "./plugins/editor.js/UnderlinePlugin.js";
import EditorJS from "./plugins/editor.js/editorjs.js";
const editor = new EditorJS({
  holder: "editor",
  tools: {
    underline: {
      class: UnderlinePlugin,
    },
  },
});
