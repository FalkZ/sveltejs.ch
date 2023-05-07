<script lang="ts">
  export let data;

  const { event } = data;
</script>

<h1>{event.title}</h1>

{@html event.html}
