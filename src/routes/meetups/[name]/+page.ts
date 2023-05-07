const i = import.meta.glob(`$events/*.md`);

export const load = ({ params: { name } }) => {
  const content = i[`/src/events/${name}.md`]();

  return { content };
};
