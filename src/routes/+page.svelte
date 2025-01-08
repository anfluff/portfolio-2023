<div class="main">
  <div class="person">
    <div class="container">
      <Photo />

      <Name />
    </div>
  </div>

  <div class="projects">
    <ProjectsList />

    <Signature />
  </div>
</div>

<script>
  import ProjectsList from '../components/projects/ProjectsList.svelte';
  import Photo from '../components/Photo.svelte';
  import Signature from '../components/Signature.svelte';
  import Name from '../components/Name.svelte';
</script>

<style>
    .main {
        display: flex;
        gap: var(--page-padding-horizontal);
    }

    .main .person {
        flex: 0 0 30vw;
        position: relative;
        height: calc(100vh - var(--page-padding-vertical) * 2);
    }

    .main .person .container {
        position: fixed;
        z-index: 2;
        top: var(--page-padding-vertical);
        bottom: var(--page-padding-vertical);
        left: var(--page-padding-horizontal);
        width: 30vw;
    }

    .main .projects {
        flex-grow: 1;
        position: relative;
    }

    @media (max-width: 480px) {
        .main {
            flex-direction: column;
        }
        .main .person {
            flex-basis: 60vh;
        }
        .main .person .container {
            position: static;
            height: 100%;
            width: 100%;
        }
    }
</style>
