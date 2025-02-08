const tabs = document.querySelectorAll(".tab-btn");
const content = document.getElementById("tab-content");

const tabData = {
  1: "محتوای تب اول اینجاست.",
  2: "محتوای تب دوم اینجاست.",
  3: "محتوای تب سوم اینجاست.",
  4: "محتوای تب چهارم اینجاست.",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("border-blue-500", "text-blue-500"));
    tab.classList.add("border-blue-500", "text-blue-500");
    content.innerText = tabData[tab.dataset.tab];
  });
});

tabs[0].classList.add("border-blue-500", "text-blue-500"); // انتخاب تب اول به صورت پیش‌فرض
