import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Zürich</h1>

<blockquote>Next Meetup: [Date] Impact Hub</blockquote>

<a href="${"https://www.meetup.com/sveltesocietyzurich/"}">https://www.meetup.com/sveltesocietyzurich/
</a>
<h1>Basel</h1>`;
});
export {
  Page as default
};
