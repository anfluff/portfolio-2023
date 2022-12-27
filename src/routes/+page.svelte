<div class="main">
  <div class="photo">
    <img
      src="/src/images/myself/nicolay-apraksin.jpg"
      alt="Nicolay Apraksin — fullstack frontend developer, product designer, IT enthusiast"
    />
  </div>

  <div class="projects">
    <ProjectsList />
  </div>
</div>

<div class="credentials">
  <h1>Nicolay
    Apraksin</h1>

  <div class="pusher"></div>

  <div class="content">
    <div class="cta">Looking for a job. Strive to relocate!</div>
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
</div>

<script>
  import ProjectsList from '../components/projects/ProjectsList.svelte'
  import IconEmail from '../components/icons/IconEmail.svelte'
  import IconLinkedIn from '../components/icons/IconLinkedIn.svelte'
  import IconTelegram from '../components/icons/IconTelegram.svelte'
</script>

<style>
  .main {
      display: flex;
      gap: 5vw;
  }
  .main .photo {
      flex: 0 0 30vw;
      border-radius: var(--border-radius);
      overflow: hidden;
      max-height: 80vh
  }
  .main .photo img {
      width: 100%;
  }
  .main .projects {
      flex-grow: 1;
      position: relative;
      z-index: 2;
  }

  .credentials {
      position: relative;
      margin-top: -260px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
  }
  .credentials h1 {
      font-size: 9rem;
      line-height: 9rem;
      margin: 0;
      white-space: pre-line;
      user-select: none;
  }
  .credentials .content {
      position: relative;
      z-index: 3;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      text-align: right;
  }
  .credentials .content .cta {
      color: var(--color-white);
      margin-bottom: 1rem;
  }
  .credentials .content .links {
      display: flex;
      align-items: center;
      gap: 12px;
  }
  .credentials .content .links * {
    color: var(--color-teal-text);
  }
  .credentials .content .links a {
      display: inline-block;
  }
  .credentials .content .links a:hover {
      color: var(--color-pink);
  }
  .credentials .content .icon {
      width: 2.2rem;
      height: 2.2rem;
  }
</style>
