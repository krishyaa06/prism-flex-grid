const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
test("minimal container css skips defaults", () => {
  assert.equal(C.containerCSS("flex", { ...C.FLEX_DEFAULTS, "justify-content": "center", gap: "8px" }), ".container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}");
});
test("item css", () => {
  assert.equal(C.itemCSS("flex", { "flex-grow": "1", order: "0" }, ".a"), ".a {\n  flex-grow: 1;\n}");
  assert.equal(C.itemCSS("grid", {}, ".a"), "");
});
test("full css includes item rules", () => {
  const css = C.fullCSS({ mode: "grid", grid: { ...C.GRID_DEFAULTS, "grid-template-columns": "1fr 2fr" }, items: [{ "grid-column": "1 / -1" }, {}] });
  assert.match(css, /grid-template-columns: 1fr 2fr;/); assert.match(css, /\.item:nth-child\(1\) \{\n  grid-column: 1 \/ -1;/);
});
test("tailwind classes", () => {
  assert.equal(C.tailwind({ mode: "flex", flex: { ...C.FLEX_DEFAULTS, "flex-direction": "column", "justify-content": "space-between", "align-items": "center", gap: "16px" } }), "flex flex-col justify-between items-center gap-4");
  assert.equal(C.tailwind({ mode: "grid", grid: { ...C.GRID_DEFAULTS, "grid-template-columns": "repeat(3, 1fr)", gap: "10px" } }), "grid grid-cols-3 gap-[10px]");
});
test("presets are valid", () => { for (const p of Object.values(C.PRESETS)) assert.ok(["flex", "grid"].includes(p.mode)); });
