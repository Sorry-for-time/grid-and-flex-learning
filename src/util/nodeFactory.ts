/**
 * @description 一个简单的节点批量复制函数
 *
 * @param {string} nodeSelector 需要复制的节点
 * @param {bigint} copyLimit 复制次数
 * @param {boolean} [isDeepClone=false] 深度拷贝选项, 可选, 默认: false
 * @return {*}  {(Array<Node> | null)} 拷贝成功返回节点数组, 否则返回null
 * @version 0.01
 */
export default function multiNodeCloneFactory(
  nodeSelector: string,
  copyLimit: bigint,
  isDeepClone: boolean = false
): Array<Node> | null {
  let searchedNode: HTMLElement | null = document.querySelector(nodeSelector);
  if (searchedNode) {
    let copies: Array<Node> = [];
    for (let i = 0; i < copyLimit; i++) {
      copies.push(searchedNode.cloneNode(isDeepClone));
    }
    return copies;
  }

  return null;
}
