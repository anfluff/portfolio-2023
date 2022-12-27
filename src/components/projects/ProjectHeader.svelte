<div class="project-intro">
  <BackButton />

  <div class="caption">
    <h1>{ title }</h1>
    <div class="description">
      ― { description }
    </div>
  </div>

  <div class="features">
    {#if roles}
      <div>
        <h3>Roles</h3>
        <div class="roles">
          {#each roles as role, index}
            <span>{role}</span>
            {#if index < roles.length - 1}
              •
            {/if}
          {/each}
        </div>
      </div>
    {/if}
    {#if link}
      <div>
        <h3>See it live</h3>
        <div>
          <a
            href="{link}"
            target="_blank"
            rel="noreferrer"
          >{ link } →</a>
        </div>
      </div>
    {/if}
  </div>
</div>
<div class="pusher"></div>

<script>
  import BackButton from '../BackButton.svelte'

  export let title
  export let description
  export let link
  export let roles
</script>

<style>
  .project-intro {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80vh;
      background: var(--color-pink);
      padding: var(--page-padding);
      padding-bottom: 7rem;
      font-size: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      color: var(--color-white);
  }

  .pusher {
      height: 80vh;
  }

  h1, h3 {
      margin: 0;
  }
  h1 {
      line-height: 1;
  }

  .description {
      max-width: 1000px;
  }

  a:not(:hover) {
      opacity: .5;
  }
  a:hover {
      color: var(--color-white);
      opacity: 1;
  }

  .caption {
      padding-bottom: 2rem;
  }

  .features {
      display: flex;
      gap: 5rem;
  }

  .roles {
      display: flex;
      gap: 12px;
  }
</style>
