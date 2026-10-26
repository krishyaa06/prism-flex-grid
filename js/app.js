(() => {
  const { $, $$, copy, store, tabs, esc } = Prism;
  const FLEX = { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], "align-items": ["stretch", "flex-start", "center", "flex-end", "baseline"], "align-content": ["normal", "flex-start", "center", "flex-end", "space-between", "space-around", "stretch"], gap: "text" };
  const GRID = { "grid-template-columns": "text", "grid-template-rows": "text", "grid-auto-flow": ["row", "column", "row dense", "column dense"], "justify-items": ["stretch", "start", "center", "end"], "align-items": ["stretch", "start", "center", "end"], gap: "text" };
  const ITEM = { flex: { "flex-grow": "text", "flex-shrink": "text", "flex-basis": "text", order: "text", "align-self": ["auto", "flex-start", "center", "flex-end", "stretch", "baseline"] }, grid: { "grid-column": "text", "grid-row": "text", "justify-self": ["auto", "start", "center", "end", "stretch"], "align-self": ["auto", "start", "center", "end", "stretch"] } };
  const COLORS = ["#00D2FF", "#6C63FF", "#3EE69A", "#FFC857", "#FF6B9A", "#B388FF"];
  const fresh = () => ({ mode: "flex", flex: { ...Core.FLEX_DEFAULTS, gap: "12px" }, grid: { ...Core.GRID_DEFAULTS, "grid-template-columns": "repeat(3, 1fr)", gap: "12px" }, items: Array.from({ length: 5 }, () => ({})) });
  let S = store.get("flex:state", null) || fresh(), sel = -1, fmt = "css";
  const field = (k, spec, val, attr) => `<label class="field"><span>${k}</span>${Array.isArray(spec) ? `<select ${attr}="${k}">${spec.map((o) => `<option ${o === val ? "selected" : ""}>${o}</option>`).join("")}</select>` : `<input ${attr}="${k}" value="${esc(val ?? "")}" spellcheck="false" />`}</label>`;
  function controls() {
    $("#flexCtl").innerHTML = Object.entries(FLEX).map(([k, s]) => field(k, s, S.flex[k], "data-f")).join("");
    $("#gridCtl").innerHTML = Object.entries(GRID).map(([k, s]) => field(k, s, S.grid[k], "data-g")).join("");
    $("#flexCtl").hidden = S.mode !== "flex"; $("#gridCtl").hidden = S.mode !== "grid";
    $$("#mode button").forEach((b) => b.classList.toggle("on", b.dataset.v === S.mode));
    $("#count").value = S.items.length;
    $$("[data-f]").forEach((el) => (el.oninput = () => { S.flex[el.dataset.f] = el.value; render(); }));
    $$("[data-g]").forEach((el) => (el.oninput = () => { S.grid[el.dataset.g] = el.value; render(); }));
  }
  function itemControls() {
    $("#itemCard").hidden = sel < 0; if (sel < 0) return;
    $("#itemTitle").textContent = `Item ${sel + 1}`;
    $("#itemCtl").innerHTML = Object.entries(ITEM[S.mode]).map(([k, s]) => field(k, s, S.items[sel][k], "data-i")).join("");
    $$("[data-i]").forEach((el) => (el.oninput = () => { S.items[sel][el.dataset.i] = el.value; render(); }));
  }
  function render() {
    const st = $("#stage"), p = S.mode === "grid" ? S.grid : S.flex;
    st.removeAttribute("style"); st.style.display = S.mode;
    for (const [k, v] of Object.entries(p)) if (v) st.style.setProperty(k, v);
    st.innerHTML = S.items.map((it, i) => `<div class="item${i === sel ? " sel" : ""}" data-n="${i}" style="background:${COLORS[i % COLORS.length]};${Object.entries(it).filter(([, v]) => v).map(([k, v]) => `${k}:${esc(v)}`).join(";")};${i % 3 === 1 ? "min-height:70px" : ""}">${i + 1}</div>`).join("");
    $$(".item", st).forEach((el) => (el.onclick = () => { sel = sel === +el.dataset.n ? -1 : +el.dataset.n; render(); itemControls(); }));
    $("#code").textContent = fmt === "css" ? Core.fullCSS(S) : `<div class="${Core.tailwind(S)}">\n  ...\n</div>`;
    store.set("flex:state", S);
  }
  tabs($("#mode"), (v) => { S.mode = v; sel = -1; controls(); itemControls(); render(); });
  tabs($("#fmt"), (v) => { fmt = v; render(); });
  $("#count").oninput = (e) => { const n = +e.target.value; while (S.items.length < n) S.items.push({}); S.items.length = n; if (sel >= n) sel = -1; itemControls(); render(); };
  $("#presets").innerHTML = Object.keys(Core.PRESETS).map((n) => `<button data-p="${n}">${n}</button>`).join("") + `<button data-p="">Reset</button>`;
  $$("#presets button").forEach((b) => (b.onclick = () => {
    const p = Core.PRESETS[b.dataset.p]; const base = fresh();
    if (p) { base.mode = p.mode; Object.assign(base[p.mode], p[p.mode]); if (p.items) base.items = p.items.map((x) => ({ ...x })); }
    S = base; sel = -1; controls(); itemControls(); render();
  }));
  $("#itemReset").onclick = () => { S.items[sel] = {}; itemControls(); render(); };
  $("#copy").onclick = () => copy($("#code").textContent);
  controls(); render();
})();
