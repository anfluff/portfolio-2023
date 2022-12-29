<a
  href="/projects/{id}"
  class="project"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousemove={handleMouseMove}
>
  <div class="role">
    { role }
  </div>
  <div class="content">
    <div>
      { title }
      <span class="delimiter">•</span>
      { description }
    </div>
  </div>
</a>

{#if mouseWithinBlock}
  <div
    bind:this={previewEl}
    class="preview"
  >
    <img
      src="/src/images/projects/{id}/preview.png"
      alt="{title}"
    >
  </div>
{/if}

<script>
  export let role
  export let title
  export let description
  export let id

  let previewEl
  let mouseWithinBlock = false

  const handleMouseEnter = () => {
    mouseWithinBlock = true
  }
  const handleMouseLeave = () => {
    mouseWithinBlock = false
  }
  const handleMouseMove = (event) => {
    if (event.clientY === 0 || event.clientX === 0) {
      mouseWithinBlock = false
      return
    }
    previewEl.style.transform = 'translateY('+(event.clientY-60)+'px)'
    previewEl.style.transform += 'translateX('+(event.clientX-100)+'px)'
  }
</script>

<style>
   .project {
       display: block;
       padding: 1rem 0;
       border-bottom: var(--border);
       user-select: none;
   }
   .role {
       display: inline-block;
       margin-right: 1rem;
       font-size: 2rem;
       font-family: var(--font-family-accedent);
   }
   .content {
       display: inline-block;
       font-size: 1.4rem;
       color: var(--color-teal-text);
       transition: color .15s ease;
   }

   .project:hover {
       color: var(--color-pink);
       cursor: pointer;
   }
   .project:hover .content {
       color: var(--color-pink);
   }

   .preview {
       position: fixed;
       left: 0;
       top: 0;
       z-index: 4;
       /*width: 400px;*/
       /*height: 225px;*/
       width: 500px;
       height: 281px;
       background: black;
       border-radius: var(--border-radius);
       overflow: hidden;
       pointer-events: none;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .preview img {
       width: 100%;
   }
</style>
