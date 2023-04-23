<script lang="ts">
  export const ssr = false;
  import Input from "./Input.svelte";
  import Output from "./Output.svelte";

  import type { Component } from "./types";
  import { browser } from "$app/environment";

  export let raw: string;

  export let width = "100%";
  export let height = "100%";

  let edit = false;

  let components: Component[] = [
    {
      id: 0,
      name: "App",
      type: "svelte",
      source: raw,
    },
  ];

  let current: number = 0;

  let compiled: string = "";

  let compile = () => {};

  if (browser) {
    const worker = new Worker("./worker.js");

    worker.addEventListener("message", (event) => {
      compiled = event.data;
      console.log(compiled);
    });

    compile = (_components: Component[]) => {
      worker.postMessage(_components);
    };

    setTimeout(() => compile(components), 1000);
  }

  $: compile(components);
</script>

<div style:width style:height>
  {#if edit}
    {#if browser}
      <Output {compiled} />
      <Input bind:components bind:current />
    {/if}
  {:else}
    <slot />
  {/if}
  <button
    on:click={() => {
      edit = !edit;
    }}
  >
    {edit ? "hide editor" : "edit this svelte component"}
  </button>
</div>

<style>
  div {
    position: relative;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: none;
  }

  div:hover button {
    display: block;
  }
</style>
