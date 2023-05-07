<script lang="ts">
  export let data;

  const { attributes, html } = data.content;
</script>

<h1>{attributes.title}</h1>

{@html html}
