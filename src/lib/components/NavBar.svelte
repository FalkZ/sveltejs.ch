<nav>
  <a class="home" href="/">
    <img src="/svelte-logo.svg" />
    Society Switzerland
  </a>
  <a href="/meetups">Meetups</a>
  <a href="/impressions">Impressions</a>
  <a href="/learn">Learn</a>
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
    display: block;
    position: absolute;
    left: 1em;
    display: flex;
    align-content: center;
  }

  .home img {
    height: 2.2em;

    margin: -0.5em 1em;
  }
</style>
