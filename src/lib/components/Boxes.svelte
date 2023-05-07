<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    padding: 20px;
    gap: 20px;
  }

  div > :global(*) {
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    flex: 1 1 400px;
    margin: 5px;
    padding: 0 1em;
  }
</style>
