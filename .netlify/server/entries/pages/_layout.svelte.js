import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const NavBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-axu2tg.svelte-axu2tg{box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:1em;display:flex;gap:1em;justify-content:center}a.svelte-axu2tg.svelte-axu2tg{text-decoration:none;color:rgb(68, 68, 68)}.home.svelte-axu2tg.svelte-axu2tg{display:block;position:absolute;left:1em;display:flex;align-content:center}.home.svelte-axu2tg img.svelte-axu2tg{height:2.2em;margin:-0.5em 1em}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-axu2tg"}"><a class="${"home svelte-axu2tg"}" href="${"/"}"><img src="${"/svelte-logo.svg"}" class="${"svelte-axu2tg"}">
    Society Switzerland
  </a>
  <a href="${"/meetups"}" class="${"svelte-axu2tg"}">Meetups</a>
  <a href="${"/impressions"}" class="${"svelte-axu2tg"}">Impressions</a>
  <a href="${"/learn"}" class="${"svelte-axu2tg"}">Learn</a>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'html, body{min-height:100vh}body{--font:"Overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;--slate-50:#f8fafc;--slate-100:#f1f5f9;--slate-200:#e2e8f0;--slate-300:#cbd5e1;--slate-400:#94a3b8;font-family:var(--font);margin:0;background:linear-gradient(var(--slate-50), var(--slate-100))}main.svelte-enxinr{padding:1em}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-tsdtjy_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"true"}"><link href="${"https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tsdtjy_END -->`, ""}

${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}
<main class="${"svelte-enxinr"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
