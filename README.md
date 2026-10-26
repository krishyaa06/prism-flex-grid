<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:FFC857,100:FF6B9A&height=200&section=header&text=Prism%20Flex%20%26%20Grid%20Lab&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Visual%20layout%20playground%20%C2%B7%20CSS%20%2B%20Tailwind&descAlignY=58&descSize=16" width="100%" alt="Prism Flex & Grid Lab" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=FFC857&center=true&vCenter=true&width=680&lines=justify-content%3A+space-between;grid-template-columns%3A+repeat%28auto-fit%2C+%E2%80%A6%29;Export+to+Tailwind+classes;Click+any+item+to+tweak+it" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-flex-grid/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-flex-grid/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-flex-grid/"><img src="https://img.shields.io/badge/Live_Demo-Open-FFC857?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-FFC857?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-flex-grid?style=for-the-badge&color=FF6B9A" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism Flex & Grid Lab screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" />

## ⚡ Overview

**Prism Flex & Grid Lab** is a hands-on playground for CSS layout. Switch between Flexbox and Grid, change any container property, click individual items to set grow/shrink/basis/order or grid placement, and resize the stage to test responsiveness. The generated code only contains properties that differ from defaults, and can be exported as Tailwind classes.

## ✨ Features

- **Flexbox + Grid** modes with every common container property
- **Per-item controls** — flex-grow/shrink/basis, order, align-self, grid-column/row
- **Presets**: center anything, navbar, wrap cards, stack, 3-col, auto-fit cards, holy grail
- **Resizable stage** to test wrapping and responsiveness
- **Minimal CSS** output (defaults omitted) and **Tailwind** class export
- State saved locally

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism Flex & Grid Lab on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism Flex & Grid Lab on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-flex-grid/](https://krishyaa06.github.io/prism-flex-grid/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-flex-grid.git
cd prism-flex-grid
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

1. Choose **Flexbox** or **Grid** and adjust the container controls.
2. Click an item in the preview to edit its own properties.
3. Drag the stage corner to resize; copy the CSS or Tailwind output.

## 📁 Project Structure

```
prism-flex-grid/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # controls and live preview
│   ├── core.js   # CSS / Tailwind generators + presets — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism Flex & Grid Lab is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B9A,50:FFC857,100:07060f&height=110&section=footer" width="100%" />
