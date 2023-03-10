import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1djnwi8{display:flex;flex-direction:column;min-height:100vh}main.svelte-1djnwi8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1djnwi8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1djnwi8{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1djnwi8"}"><header></header>

	<main class="${"svelte-1djnwi8"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-1djnwi8"}"></footer>
</div>`;
});
export {
  Layout as default
};
