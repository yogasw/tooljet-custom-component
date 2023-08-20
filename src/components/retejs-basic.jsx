import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';

import { useRete } from "https://cdn.jsdelivr.net/npm/rete-react-plugin/+esm";
import { createRoot } from "https://cdn.jsdelivr.net/npm/react-dom/client/+esm";
import { NodeEditor, ClassicPreset } from "https://cdn.jsdelivr.net/npm/rete/+esm";
import { AreaPlugin, AreaExtensions } from "https://cdn.jsdelivr.net/npm/rete-area-plugin/+esm";
import {
    ConnectionPlugin,
    Presets as ConnectionPresets
} from "https://cdn.jsdelivr.net/npm/rete-connection-plugin/+esm";
import { ReactPlugin, Presets } from "https://cdn.jsdelivr.net/npm/rete-react-plugin/+esm";


export async function createEditor(container) {
    const socket = new ClassicPreset.Socket("socket");

    const editor = new NodeEditor();
    const area = new AreaPlugin(container);
    const connection = new ConnectionPlugin();
    const render = new ReactPlugin({ createRoot });

    AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
        accumulating: AreaExtensions.accumulateOnCtrl()
    });

    render.addPreset(Presets.classic.setup());

    connection.addPreset(ConnectionPresets.classic.setup());

    editor.use(area);
    area.use(connection);
    area.use(render);

    AreaExtensions.simpleNodesOrder(area);

    const a = new ClassicPreset.Node("A");
    a.addControl("a", new ClassicPreset.InputControl("text", { initial: "a" }));
    a.addOutput("a", new ClassicPreset.Output(socket));
    await editor.addNode(a);

    const b = new ClassicPreset.Node("B");
    b.addControl("b", new ClassicPreset.InputControl("text", { initial: "b" }));
    b.addInput("b", new ClassicPreset.Input(socket));
    await editor.addNode(b);

    await editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));

    await area.translate(a.id, { x: 0, y: 0 });
    await area.translate(b.id, { x: 270, y: 0 });

    setTimeout(() => {
        // wait until nodes rendered because they dont have predefined width and height
        AreaExtensions.zoomAt(area, editor.getNodes());
    }, 10);
    return {
        destroy: () => area.destroy()
    };
}

const RetejsBasic = () =>{
    const [ref] = useRete(createEditor);
    return (
        <div className="App">
            <div ref={ref} style={{ height: "20vh", width: "100vw" }}></div>
        </div>
    );
}
export default RetejsBasic;
