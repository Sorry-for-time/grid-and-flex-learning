import "./scss/style.scss";

window.addEventListener("load", () => {
  const body: HTMLElement = document.querySelector("body")!;
  // 在页面加载完成后移除隐藏的样式
  body.removeAttribute("style");

  const focusColor: string = `rgb(79, 20, 204)`;
  const EleCollections: NodeListOf<HTMLElement> =
    document.querySelectorAll(".single-element")!;

  EleCollections.forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      element.style.background = `radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, ${focusColor} 0%, rgba(79, 20, 204, 0) calc(0% + 160px)) no-repeat`;
    });
    element.addEventListener("mouseout", () => {
      element.style.background = "none";
    });
  });

  const headerEl: HTMLElement = document.querySelector("header")!;
  window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;
    if (window.scrollY - height > 600) {
      if (!headerEl.classList.contains("pin")) headerEl.classList.add("pin");
    } else {
      headerEl.classList.remove("pin");
    }
  });
});
