export interface Event {
  html: string;
  id: string;
  title: string;
  start: Date;
}

const rawEvents = import.meta.glob(`./*.md`, { eager: true }) as Record<
  string,
  { html: string; attributes: any }
>;

const events = new Map<string, Event>();

Object.entries(rawEvents).forEach(([fileName, { html, attributes }]) => {
  const id = fileName.replace("./", "").replace(".md", "");

  events.set(id, {
    id,
    html,
    title: attributes.title,
    start: new Date(attributes.start),
  });
});

export const getEvent = (id: string) => events.get(id)!;

export const allEvents = [...events.values()];
