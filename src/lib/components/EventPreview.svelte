<script lang="ts">
  import type { Event } from "$events";

  export let event: Event;

  console.log(event);
</script>

<a href="/meetups/{event.id}">
  <tr>
    <td>{event.start.toLocaleDateString()}</td>

    <td>
      <strong>
        {event.title}
      </strong>
    </td>

    <td>
      <div class="pill">
        {event.start.toLocaleTimeString().slice(0, -3)}
      </div>
    </td>
  </tr>
</a>

<style>
  a {
    display: contents;
    text-decoration: none;
    color: rgb(68, 68, 68);
  }

  tr:hover td {
    background-color: var(--slate-100);
  }

  td {
    padding: 20px;
  }

  .pill {
    background: rgb(68, 68, 68);
    border-radius: 1em;
    color: white;
    font-weight: 800;
    font-size: 0.8em;
    padding: 0.1em 0.5em;
  }
</style>
