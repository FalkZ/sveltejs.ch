<script lang="ts">
  import { allEvents } from "$events";
  import EventPreview from "$lib/components/EventPreview.svelte";
</script>

<div class="center">
  <div class="heading">
    <h1>Meetups</h1>
    <p>The next events to take part in!</p>
  </div>
  <table>
    {#each allEvents as event}
      <EventPreview {event} />
    {/each}
  </table>
</div>

<style>
  .heading {
    padding: 1em;
  }
  table {
    border-collapse: collapse;
  }
  .center {
    display: table;
    width: auto;
    margin: 0 auto;
  }
</style>
