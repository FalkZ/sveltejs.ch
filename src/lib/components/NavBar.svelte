<script lang="ts">
  import { IconCalendar, IconConfetti, IconBulb } from "@tabler/icons-svelte";
</script>

<a class="home" href="/">
  <img src="/svelte-logo.svg" />
  Society Switzerland
</a>
<nav>
  <a href="/meetups"><IconCalendar /> Meetups</a>
  <a href="/impressions"><IconConfetti /> Impressions</a>
  <a href="/learn"><IconBulb /> Learn</a>
</nav>

<style>
  nav {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1em;
    display: flex;
    gap: 1em;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: rgb(68, 68, 68);
  }

  .home {
    display: flex;
    position: absolute;
    padding: 1em;
    display: flex;
    align-content: center;
    top: 0.5em;
  }

  .home img {
    height: 2.2em;
    margin: -0.5em 1em;
  }

  @media (max-width: 800px) {
    nav {
      padding-top: 2.5em;
    }
  }

  :global(.tabler-icon) {
    position: relative;
    top: 0.3em;
  }
</style>
