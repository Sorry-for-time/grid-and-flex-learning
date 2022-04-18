export const contentTrack = (): void => {
  const focusColor: string = `rgb(79, 20, 204)`;
  const EleCollections: NodeListOf<HTMLElement> =
    document.querySelectorAll(".single-element")!;

  EleCollections.forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      // 我直接copy fleet官网的样式🤣
      element.style.background = `radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, ${focusColor} 0%, rgba(79, 20, 204, 0) calc(0% + 160px)) no-repeat`;
    });
    element.addEventListener("mouseout", () => {
      element.style.background = "none";
    });
  });
};
