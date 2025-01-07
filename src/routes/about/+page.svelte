<BackButton />

<div class="project-story">
  <div class="text">
    In <strong>2012</strong> I graduated from the <strong>St.Petersburg Polytechnic University</strong>
    and got my <strong>MaSc</strong> with <strong>First Class Honours</strong> in <strong>Applied Informatics and
    Multimedia Design</strong>.
  </div>
  <div class="text">
    I started working as a web developer in my last course, so by now I have <strong>more then 10 years of
    experience</strong>.
  </div>
  <div class="text">
    I like to work in <strong>small teams</strong> on <strong>ambitious tasks</strong>.
  </div>
  <div class="text">
    I prefer to work as <strong>fullstack frontend developer</strong> — manage all the UX, UI and then the Frontend.
  </div>
</div>

<PageFooter />

<script>
  import BackButton from '../../components/BackButton.svelte';
  import PageFooter from '../../components/PageFooter.svelte';
</script>

<style>
    .project-story {
        margin-top: 3rem;
        background: var(--color-secondary);
        color: var(--color-white);
        padding: var(--page-padding-vertical) var(--page-padding-horizontal);
        gap: 2rem;
    }
</style>
