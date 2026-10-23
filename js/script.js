"use strict";
const menu = document.querySelector(".menu");
const navigation = document.querySelector("#navigation");
menu.hidden = false;
menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  navigation.dataset.collapsed = String(expanded);
});
navigation.dataset.collapsed = "true";
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menu.setAttribute("aria-expanded", "false");
    navigation.dataset.collapsed = "true";
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    menu.setAttribute("aria-expanded", "false");
    navigation.dataset.collapsed = "true";
    menu.focus();
  }
});
const suggestions = {
  create: "Your first step: sketch three ways to improve an everyday object. Bring your favorite idea to a creative conversation.",
  build: "Your first step: choose a small everyday problem and describe a tool that could solve it. Break it into three steps.",
  lead: "Your first step: practice a one-minute introduction about an idea you care about. Invite a trusted person to give feedback."
};
document.querySelector("#join-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-result").textContent = suggestions[document.querySelector("#interest").value] || "Choose an interest to see a first step.";
});
