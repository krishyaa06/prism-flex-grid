/* Prism Flex & Grid Lab · core logic */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  const FLEX_DEFAULTS = { "flex-direction": "row", "flex-wrap": "nowrap", "justify-content": "flex-start", "align-items": "stretch", "align-content": "normal", gap: "0px" };
  const GRID_DEFAULTS = { "grid-template-columns": "none", "grid-template-rows": "none", "justify-items": "stretch", "align-items": "stretch", "grid-auto-flow": "row", gap: "0px" };
  function containerCSS(mode, props, { selector = ".container", minimal = true } = {}) {
    const defs = mode === "grid" ? GRID_DEFAULTS : FLEX_DEFAULTS;
    const lines = [`  display: ${mode};`];
    for (const [k, v] of Object.entries(props)) {
      if (!(k in defs) || v === "" || v == null) continue;
      if (minimal && defs[k] === v) continue;
      lines.push(`  ${k}: ${v};`);
    }
    return `${selector} {\n${lines.join("\n")}\n}`;
  }
  function itemCSS(mode, item, selector) {
    const keys = mode === "grid" ? ["grid-column", "grid-row", "justify-self", "align-self"] : ["flex-grow", "flex-shrink", "flex-basis", "order", "align-self"];
    const defs = { "flex-grow": "0", "flex-shrink": "1", "flex-basis": "auto", order: "0", "align-self": "auto", "grid-column": "auto", "grid-row": "auto", "justify-self": "auto" };
    const lines = keys.filter((k) => item[k] != null && item[k] !== "" && String(item[k]) !== defs[k]).map((k) => `  ${k}: ${item[k]};`);
    return lines.length ? `${selector} {\n${lines.join("\n")}\n}` : "";
  }
  function fullCSS(state) {
    const blocks = [containerCSS(state.mode, state.mode === "grid" ? state.grid : state.flex)];
    state.items.forEach((it, i) => { const c = itemCSS(state.mode, it, `.item:nth-child(${i + 1})`); if (c) blocks.push(c); });
    return blocks.join("\n\n");
  }
  function tailwind(state) {
    const p = state.mode === "grid" ? state.grid : state.flex, cls = [state.mode];
    const map = { "flex-start": "start", "flex-end": "end", "space-between": "between", "space-around": "around", "space-evenly": "evenly", center: "center", stretch: "stretch", baseline: "baseline", start: "start", end: "end" };
    if (state.mode === "flex") {
      if (p["flex-direction"] !== "row") cls.push({ column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" }[p["flex-direction"]]);
      if (p["flex-wrap"] !== "nowrap") cls.push(p["flex-wrap"] === "wrap" ? "flex-wrap" : "flex-wrap-reverse");
      if (p["justify-content"] !== "flex-start") cls.push(`justify-${map[p["justify-content"]]}`);
      if (p["align-items"] !== "stretch") cls.push(`items-${map[p["align-items"]]}`);
    } else {
      const cols = /^repeat\((\d+),\s*(?:minmax\(0,\s*)?1fr\)?\)$/.exec(p["grid-template-columns"] || "");
      if (cols) cls.push(`grid-cols-${cols[1]}`); else if (p["grid-template-columns"] !== "none") cls.push(`grid-cols-[${p["grid-template-columns"].replace(/\s+/g, "_")}]`);
      if (p["grid-auto-flow"] !== "row") cls.push(`grid-flow-${p["grid-auto-flow"].replace(" ", "-")}`);
      if (p["justify-items"] !== "stretch") cls.push(`justify-items-${map[p["justify-items"]]}`);
      if (p["align-items"] !== "stretch") cls.push(`items-${map[p["align-items"]]}`);
    }
    const g = parseFloat(p.gap); if (g) cls.push(Number.isInteger(g / 4) ? `gap-${g / 4}` : `gap-[${p.gap}]`);
    return cls.join(" ");
  }
  const PRESETS = {
    "Center anything": { mode: "flex", flex: { "justify-content": "center", "align-items": "center" } },
    Navbar: { mode: "flex", flex: { "justify-content": "space-between", "align-items": "center", gap: "12px" } },
    "Wrap cards": { mode: "flex", flex: { "flex-wrap": "wrap", gap: "16px" } },
    "Stack": { mode: "flex", flex: { "flex-direction": "column", gap: "8px" } },
    "3-col grid": { mode: "grid", grid: { "grid-template-columns": "repeat(3, 1fr)", gap: "16px" } },
    "Auto-fit cards": { mode: "grid", grid: { "grid-template-columns": "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px" } },
    "Holy grail": { mode: "grid", grid: { "grid-template-columns": "160px 1fr 160px", "grid-template-rows": "auto 1fr auto", gap: "8px" }, items: [{ "grid-column": "1 / -1" }, {}, {}, {}, { "grid-column": "1 / -1" }] },
  };
  return { containerCSS, itemCSS, fullCSS, tailwind, PRESETS, FLEX_DEFAULTS, GRID_DEFAULTS };
});
