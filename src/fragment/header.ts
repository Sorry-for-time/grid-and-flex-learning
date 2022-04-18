export const headerTrack = (): void => {
  const headerEl: HTMLElement = document.querySelector("header")!;
  headerEl.addEventListener(
    "animationend",
    () => {
      // 在动画结束后移除样式
      headerEl.classList.remove("once-show");
    },
    {
      // 在第一次动画结束后移除此监听器
      once: true,
    }
  );

  // 监听滚动位置, 当达到设定阈值或添加固定的样式/反之移除
  window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;
    if (window.scrollY - height > 600) {
      if (!headerEl.classList.contains("pin")) {
        headerEl.classList.add("pin");
      }
    } else {
      headerEl.classList.remove("pin");
    }
  });
};
