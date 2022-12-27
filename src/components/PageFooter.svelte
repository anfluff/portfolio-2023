<footer>
  <div class="line">
    <div class="label">
      {#if excludeId}Other<br />{/if}Projects
    </div>

    <div class="content">
      <ProjectsList excludeId="{excludeId}" />
    </div>
  </div>

  <div class="line">
    <div class="label">Contacts</div>

    <div class="content icons">
      <a
        href="mailto:nickolayanatolievich@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <IconEmail />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolay-apraksin"
        target="_blank"
        rel="noreferrer"
      >
        <IconLinkedIn />
      </a>
      <a
        href="https://t.me/afluff"
        target="_blank"
        rel="noreferrer"
      >
        <IconTelegram />
      </a>
    </div>
  </div>
</footer>

<script>
  import IconEmail from './icons/IconEmail.svelte'

  export let excludeId

  import ProjectsList from './projects/ProjectsList.svelte'
  import IconLinkedIn from './icons/IconLinkedIn.svelte'
  import IconTelegram from './icons/IconTelegram.svelte'
</script>

<style>
  footer {
      margin-top: 4rem;
      padding-top: 4rem;
      border-top: var(--border);
  }

  .line {
      display: flex;
      gap: 8rem;
  }
  .line .label {
      font-size: 5rem;
      font-family: var(--font-family-accedent);
      line-height: 1;
      flex: 0 0 400px;
  }
  .line .content {
      flex-grow: 1;
  }

  .line + .line {
      margin-top: 4rem;
  }

  .icons {
      display: flex;
      gap: 2rem;
  }

  .icons > a {
      width: 3.5rem;
      fill: currentColor;
  }
</style>
