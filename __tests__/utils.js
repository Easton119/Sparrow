// __tests__/utils.js

export function createDiv() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  return div;
}
