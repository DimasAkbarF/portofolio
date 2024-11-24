function toggleSidebar() {
  const e = document.querySelector(".sidebar"),
    t = document.querySelector(".toggle-arrow"),
    c = document.querySelector(".content"),
    a = document.querySelector(".overlay");
  e.classList.toggle("active"),
    t.classList.toggle("active"),
    c.classList.toggle("shifted"),
    a.classList.toggle("active");
}
function setInitialState() {
  const e = window.location.hash || "#home",
    t = document.querySelector(`a[href="${e}"]`),
    c = document.querySelector(e);
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.setAttribute("data-active", "false");
  }),
    document.querySelectorAll(".section").forEach((e) => {
      e.classList.remove("active");
    }),
    t &&
      c &&
      (t.setAttribute("data-active", "true"), c.classList.add("active"));
}
document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-link").forEach((e) => {
      e.setAttribute("data-active", "false");
    }),
      document.querySelectorAll(".section").forEach((e) => {
        e.classList.remove("active");
      }),
      e.target.setAttribute("data-active", "true");
    const t = document.querySelector(e.target.getAttribute("href"));
    t && t.classList.add("active"), window.innerWidth <= 768 && toggleSidebar();
  });
}),
  setInitialState(),
  window.addEventListener("hashchange", setInitialState);
