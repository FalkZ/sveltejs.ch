<script>
  import Logo from "./Logo.svelte";
  import LogoRaw from "./Logo.svelte?raw";
  import Replize from "$lib/components/repl/Replize.svelte";
</script>

<div>
  <Replize raw={LogoRaw} width="30vw" height="40vh">
    <Logo />
  </Replize>
  <h1>Welcome to Svelte Society Switzerland</h1>
</div>

<style>
  div {
    text-align: center;
    padding: 30px;
  }

  div > :global(*) {
    margin: 0 auto;
  }
</style>
