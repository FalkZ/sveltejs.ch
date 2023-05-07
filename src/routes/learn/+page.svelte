<script>
  import Button from "$lib/components/Button.svelte";
  import Boxes from "$lib/components/Boxes.svelte";
</script>

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
    <h2>Come to our next Meetup!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam, vel
      neque vitae delectus ipsa iste culpa debitis beatae animi, distinctio
      minima temporibus iure dignissimos aperiam sequi eligendi perspiciatis
      accusantium.
    </p>
    <Button href="/meetups">Next meetup</Button>
  </div>

  <div>
    <h2>Resources</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam, vel
      neque vitae delectus ipsa iste culpa debitis beatae animi, distinctio
      minima temporibus iure dignissimos aperiam sequi eligendi perspiciatis
      accusantium.
    </p>

    <Button href="https://learn.svelte.dev">Tutorial</Button>
  </div>

  <div>
    <h2>Try it Yourself</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam, vel
      neque vitae delectus ipsa iste culpa debitis beatae animi, distinctio
      minima temporibus iure dignissimos aperiam sequi eligendi perspiciatis
      accusantium.
    </p>

    <Button href="https://svelte.new">Start coding</Button>
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
