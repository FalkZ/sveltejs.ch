<script>
  import Button from "$lib/components/Button.svelte";
  import Hero from "$lib/components//Hero.svelte";
</script>

<Hero />
<div class="content">
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
</div>

<style>
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    padding: 20px;
    gap: 20px;
  }

  .content > * {
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    flex: 1 1 400px;
    margin: 5px;
    padding: 0 1em;
  }

  h2 {
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
</style>
