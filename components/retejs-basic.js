import * as React from "https://esm.sh/react";
import {useRete} from "https://esm.sh/rete-react-plugin";
import {createRoot} from "https://esm.sh/react-dom/client";
import {NodeEditor, ClassicPreset} from "https://esm.sh/rete";
import {AreaPlugin, AreaExtensions} from "https://esm.sh/rete-area-plugin";
import {
  ConnectionPlugin,
  Presets as ConnectionPresets
} from "https://esm.sh/rete-connection-plugin";
import {ReactPlugin, Presets} from "https://esm.sh/rete-react-plugin";
export async function createEditor(container) {
  const socket = new ClassicPreset.Socket("socket");
  const editor = new NodeEditor();
  const area = new AreaPlugin(container);
  const connection = new ConnectionPlugin();
  const render = new ReactPlugin({createRoot});
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
  a.addControl("a", new ClassicPreset.InputControl("text", {initial: "a"}));
  a.addOutput("a", new ClassicPreset.Output(socket));
  await editor.addNode(a);
  const b = new ClassicPreset.Node("B");
  b.addControl("b", new ClassicPreset.InputControl("text", {initial: "b"}));
  b.addInput("b", new ClassicPreset.Input(socket));
  await editor.addNode(b);
  await editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));
  await area.translate(a.id, {x: 0, y: 0});
  await area.translate(b.id, {x: 270, y: 0});
  setTimeout(() => {
    AreaExtensions.zoomAt(area, editor.getNodes());
  }, 10);
  return {
    destroy: () => area.destroy()
  };
}
const RetejsBasic = () => {
  const [ref] = useRete(createEditor);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: {height: "20vh", width: "100vw"}
  }));
};
export default RetejsBasic;
