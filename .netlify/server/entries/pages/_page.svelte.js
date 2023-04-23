import { c as create_ssr_component, d as add_styles, e as escape, v as validate_component } from "../../chunks/index.js";
const Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-lpqesx{font-family:var(--font);font-size:1.1rem;padding:0.25em 0.5em;margin:1em 0;background-color:var(--slate-200);border-radius:3px;border:none;display:block;font-weight:600}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<button class="${"svelte-lpqesx"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"30vw"}" height="${"40vh"}" viewBox="${"0 0 107 128"}"><title>svelte-logo</title><path style="${"fill:#ff3e00"}" d="${"M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"}"></path><path style="${"fill:#fff"}" d="${"M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"}"></path></svg>`;
});
const LogoRaw = '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="30vw"\n  height="40vh"\n  viewBox="0 0 107 128"\n>\n  <title>svelte-logo</title>\n  <path\n    style="fill:#ff3e00"\n    d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"\n  />\n  <path\n    style="fill:#fff"\n    d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"\n  />\n</svg>\n';
const Tabs_svelte_svelte_type_style_lang = "";
const Input_svelte_svelte_type_style_lang = "";
const Output_svelte_svelte_type_style_lang = "";
const Replize_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-sftosk.svelte-sftosk{position:relative}button.svelte-sftosk.svelte-sftosk{position:absolute;bottom:0;right:0;display:none}div.svelte-sftosk:hover button.svelte-sftosk{display:block}",
  map: null
};
const Replize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  let { raw } = $$props;
  let { width = "100%" } = $$props;
  let { height = "100%" } = $$props;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"svelte-sftosk"}"${add_styles({ width, height })}>${`${slots.default ? slots.default({}) : ``}`}
  <button class="${"svelte-sftosk"}">${escape("edit this svelte component")}</button>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-ehe0q3{text-align:center;padding:30px}div.svelte-ehe0q3>*{margin:0 auto}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"svelte-ehe0q3"}">${validate_component(Replize, "Replize").$$render(
    $$result,
    {
      raw: LogoRaw,
      width: "30vw",
      height: "40vh"
    },
    {},
    {
      default: () => {
        return `${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}`;
      }
    }
  )}
  <h1>Welcome to Svelte Society Switzerland</h1>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1thy51l.svelte-1thy51l{display:flex;flex-wrap:wrap;justify-content:center;margin-top:40px;padding:20px;gap:20px}.content.svelte-1thy51l>.svelte-1thy51l{border-radius:10px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);flex:1 1 400px;margin:5px;padding:0 1em}h2.svelte-1thy51l.svelte-1thy51l{font-weight:500}p.svelte-1thy51l.svelte-1thy51l{font-size:1.1rem;font-weight:300}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
<div class="${"content svelte-1thy51l"}"><div class="${"svelte-1thy51l"}"><h2 class="${"svelte-1thy51l"}">What is Svelte?</h2>
    <p class="${"svelte-1thy51l"}">Svelte is a radical new approach to building user interfaces. Whereas
      traditional frameworks like React and Vue do the bulk of their work in the
      browser, Svelte shifts that work into a compile step that happens when you
      build your app...

      ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Learn more`;
    }
  })}</p></div>

  <div class="${"svelte-1thy51l"}"><h2 class="${"svelte-1thy51l"}">About Svelte Society Switzerland</h2></div>
</div>`;
});
export {
  Page as default
};
