import * as React from "react";
import { useEffect, useState } from "react";
import { Jodit } from "jodit";
import 'jodit-react-ts/node_modules/jodit/build/jodit.min.css';

const App = () => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const editor = Jodit.make("#editor", {
      "useSearch": false,
      "disablePlugins": "ai-assistant",
      "buttons": "undo,redo,|,paragraph,|,bold,italic,underline,brush,|,justifyfull, justifyleft, justifyright, justifycenter,| ul, ol, indent, ,outdent, |,about"
    });
    editor.events.on("change", (newContent: string) => {
      setValue(newContent);
    });

    return () => {
      editor.destruct(); 
    };
  }, []); 

  return (
    <div>
      <div id="editor" />
      <div className="mt-5 text-end">
      <button className="bg-blue-800 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded">
          Publish
        </button>      
        </div>
    </div>
  );
};

export default App;
