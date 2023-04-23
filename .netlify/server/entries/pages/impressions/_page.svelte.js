import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-15fyckb{max-width:100%;width:600px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1>Pictures</h1>

<img src="${"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}" class="${"svelte-15fyckb"}">
<p>Grid of pictures as a gallery?</p>
<h1>Talks</h1>

<p>Videos of talks maybe?</p>`;
});
export {
  Page as default
};
