export const headerTrack = (): void => {
  const headerEl: HTMLElement = document.querySelector("header")!;
  headerEl.addEventListener(
    "animationend",
    () => {
      // 在动画结束后移除样式
      headerEl.classList.remove("once-show");
    },
    {
      // 在第一次动画结束后移除次监听器
      once: true,
    }
  );

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
