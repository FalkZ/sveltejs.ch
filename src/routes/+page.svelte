<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components//Hero.svelte";
  import Boxes from "$lib/components/Boxes.svelte";
</script>

<Hero />
<Boxes>
  <div>
    <h2>What is Svelte?</h2>
    <p>
      Svelte is a radical new approach to building user interfaces. Whereas
      traditional frameworks like React and Vue do the bulk of their work in the
      browser, Svelte shifts that work into a compile step that happens when you
      build your app...

      <Button>Learn more</Button>
    </p>
  </div>

  <div>
    <h2>About Svelte Society Switzerland</h2>
  </div>
</Boxes>

<style>
  h2 {
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
</style>
