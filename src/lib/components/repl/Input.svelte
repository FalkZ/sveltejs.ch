<script lang="ts">
  import Tabs from "./Tabs.svelte";

  import type { Component } from "./types";

  export let components: Component[] = [];
  export let current: number = 0;

  let textarea: HTMLTextAreaElement;

  function get_max(_components: Component[]): number {
    const ids = _components.map(({ id }) => id);
    return Math.max(...ids);
  }

  function new_component() {
    const id = get_max(components) + 1;

    components = components.concat({
      id,
      name: `Component${id}`,
      type: "svelte",
      source: "",
    });

    current = id;
    textarea.focus();
  }

  $: current_component = components.findIndex(({ id }) => id === current);
  $: tabs = components.map(({ id, name, type }) => ({ id, name, type }));
</script>

<section>
  <div class="hide">
    <Tabs
      {tabs}
      {current}
      on:select={({ detail }) => (current = detail)}
      on:new={new_component}
    />
  </div>
  <div class="code">
    <textarea
      bind:value={components[current_component].source}
      bind:this={textarea}
      rows="20"
      cols="150"
    />
  </div>
</section>

<style>
  .hide {
    display: none;
  }

  .code {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    white-space: nowrap;
  }
</style>
