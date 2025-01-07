<script>
  import IconLinkedIn from './icons/IconLinkedIn.svelte';
  import IconTelegram from './icons/IconTelegram.svelte';
  import IconEmail from './icons/IconEmail.svelte';
</script>

<div class="pusher" />

<div class="signature">
  <div class="cta">
    Looking for a job. Strive to relocate!
  </div>
  <div class="links">
    <a
      href="/CV.pdf"
      download
    >
      Download CV
    </a>
    •
    <a href="/about">
      About me
    </a>
    •
    <a
      href="mailto:nickolayanatolievich@gmail.com"
      target="_blank"
      rel="noreferrer"
      class="icon"
    >
      <IconEmail />
    </a>
    <a
      href="https://www.linkedin.com/in/nicolay-apraksin"
      target="_blank"
      rel="noreferrer"
      class="icon"
    >
      <IconLinkedIn />
    </a>
    <a
      href="https://t.me/afluff"
      target="_blank"
      rel="noreferrer"
      class="icon"
    >
      <IconTelegram />
    </a>
  </div>
</div>

<style>
    .pusher {
        height: 100px;
    }

    .signature {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;

        font-size: 1.4rem;
        text-align: right;
    }

    .signature .cta {
        color: var(--color-white);
        margin-bottom: 1rem;
    }

    .signature .links {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 12px;
    }

    .signature .links * {
        color: var(--color-secondary);
    }

    .signature .links a {
        display: inline-block;
    }

    .signature .links a:hover {
        color: var(--color-primary);
    }

    .signature .icon {
        width: 2.2rem;
        height: 2.2rem;
    }

    @media (max-width: 480px) {
        .signature {
            font-size: 1rem;
        }
    }
</style>
