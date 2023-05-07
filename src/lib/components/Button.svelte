<script lang="ts">
  export let href = "";
</script>

<a {href}>
  <button>
    <slot />
  </button>
</a>

<style>
  button {
    font-family: var(--font);
    font-size: 1.1rem;
    padding: 0.25em 0.5em;
    margin: 1em 0;
    background-color: var(--slate-200);
    border-radius: 3px;
    border: none;
    display: block;
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }
</style>
