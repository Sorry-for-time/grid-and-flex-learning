import "./scss/style.scss";

import { headerTrack } from "./fragment/header";
import { contentTrack } from "./fragment/content";
import multiNodeCloneFactory from "./util/nodeFactory";

window.addEventListener("load", () => {
  // 在页面加载完成后移除隐藏页面的样式
  const getBody: HTMLElement = document.querySelector("body")!;
  getBody.removeAttribute("style");

  const targetNode: Node = document.querySelector(".content")!;
  // 复制节点并插入到dom树
  let tmpNodes: Array<Node> | null = multiNodeCloneFactory(
    ".content li",
    BigInt(11),
    true
  );

  if (tmpNodes) {
    tmpNodes.forEach((element) => {
      targetNode?.appendChild(element);
    });
    tmpNodes = null;
  }

  headerTrack();
  contentTrack();
});
