<div class="photo">
  <img
    src="/src/images/myself/nicolay-morozov.jpg"
    alt="Nikolai Morozov — fullstack frontend developer, product designer, IT enthusiast"
  />
</div>

<style>
    .photo {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
    }

    .photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    @media (max-width: 480px) {
        .photo {
            position: relative;
        }

        .photo img {
            position: absolute;
            left: calc(-1 * var(--page-padding-horizontal));
            width: calc(100% + var(--page-padding-horizontal) * 2);
        }
    }
</style>
