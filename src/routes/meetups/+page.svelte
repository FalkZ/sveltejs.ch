<script lang="ts">
  const content = import.meta.glob(`$events/*.md`, { eager: true });

  console.log(content);

  const arrayOfContent = Object.entries(content).map(
    ([fileName, { attributes, html }]) => {
      const id = fileName.replace("/src/events/", "").replace(".md", "");

      return { id, attributes, html };
    }
  );
</script>

{#each arrayOfContent as { id, attributes }}
  <a href="/meetups/{id}">{attributes.title}</a>
{/each}
