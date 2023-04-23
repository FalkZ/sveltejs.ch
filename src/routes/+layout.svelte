<script>
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<NavBar />
<main>
  <slot />
</main>

<style>
  :global(html, body) {
    min-height: 100vh;
  }
  :global(body) {
    --font: "Overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    --slate-50: #f8fafc;
    --slate-100: #f1f5f9;
    --slate-200: #e2e8f0;
    --slate-300: #cbd5e1;
    --slate-400: #94a3b8;

    font-family: var(--font);
    margin: 0;
    background: linear-gradient(var(--slate-50), var(--slate-100));
  }

  main {
    padding: 1em;
  }
</style>
