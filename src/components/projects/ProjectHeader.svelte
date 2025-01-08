<div class="project-intro">
  <BackButton />

  <h1>{ title }</h1>
  <div class="description">
    ― { description }
  </div>

  <div class="features">
    {#if roles}
      <div>
        <h3>Roles</h3>
        <div class="roles">
          {#each roles as role, index}
            <div>{role}</div>
            {#if index < roles.length - 1}
              <div class="delimiter">•</div>
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

<script>
  import BackButton from '../BackButton.svelte'

  export let title
  export let description
  export let link
  export let roles
</script>

<style>
  .project-intro {
      position: relative;
      margin-left: calc(-1 * var(--page-padding-horizontal));
      margin-top: calc(-1 * var(--page-padding-vertical));
      width: calc(100% + var(--page-padding-horizontal) * 2);;

      /*background: var(--color-primary);*/
      background: var(--color-secondary);

      padding: var(--page-padding-vertical) var(--page-padding-horizontal);
      padding-bottom: calc(var(--page-padding-vertical) * 1.5);
      margin-bottom: calc(var(--page-padding-vertical) * 1.5);

      display: flex;
      flex-direction: column;
      gap: var(--page-padding-vertical);

      font-size: 1.5rem;
      color: var(--color-white);
  }

  h1, h3 {
      margin: 0;
  }
  h1 {
      line-height: 1;
      font-size: 10rem;
  }
  h3 {
      font-size: 3rem;
  }

  .description {
      max-width: 1000px;
      font-size: 2rem;
      opacity: .8;
  }

  a:not(:hover) {
      opacity: .5;
      text-decoration: underline;
  }
  a:hover {
      opacity: 1;
      color: var(--color-white);
  }

  .features {
      display: flex;
      margin-top: calc(var(--page-padding-vertical) / 2);
      gap: var(--page-padding-horizontal);
  }

  .roles {
      display: flex;
      gap: 1rem;
      opacity: .8;
  }

  @media (max-width: 480px) {
      h1 {
          font-size: 6rem;
          line-break: anywhere;
      }

      .project-intro {
          gap: 3rem;
          padding-bottom: 3rem;
          margin-bottom: 3rem;
      }

      .description {
          font-size: 1.5rem;
      }

      .features {
          flex-direction: column;
          gap: 3rem;
      }
      .roles {
          flex-direction: column;
          gap: 0;
      }
      .delimiter {
          display: none;
      }
  }
</style>
