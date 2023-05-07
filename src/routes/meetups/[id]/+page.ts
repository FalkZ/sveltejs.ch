import { allEvents, getEvent } from "$events";

export const prerender = true;

export const load = ({ params: { id } }) => {
  return { event: getEvent(id) };
};

export function entries() {
  return allEvents.map(({ id }) => ({ id }));
}
