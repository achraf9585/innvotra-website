<script>
  import  Carousel  from 'svelte-carousel'

  const partners = [
    {
      name: "OvalEdge",
      logo: "/partners/ovaledge.png",
      alt: "OvalEdge logo"
    },
    {
      name: "KingEclient",
      logo: "/partners/kingeclient.png",
      alt: "KingEclient logo"
    },
    {
      name: "Founder Institute",
      logo: "/partners/founder-institute.png",
      alt: "Founder Institute logo"
    },
    {
      name: "Merit",
      logo: "/partners/merit.png",
      alt: "Merit logo"
    },
    {
      name: "Moyas",
      logo: "/partners/moyasar.png",
      alt: "Moyas logo"
    }
  ];
</script>

<section class="py-16 px-4">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-center text-4xl md:text-5xl font-bold text-[#0a1f44] mb-16">
      Our Partners
    </h2>
    
    <Carousel
      autoplay
      autoplayDuration={3000}
      pauseOnFocus
      arrows={true}
      dots={false}
      swiping={true}
      particlesToShow={5}
      particlesToScroll={1}
    >
      {#each partners as partner}
        <div class="carousel-item w-full max-w-[200px] flex items-center justify-center p-4">
          <img
            src={partner.logo}
            alt={partner.alt}
            class="w-full h-auto object-contain transition-all duration-300 hover:scale-110"
          />
        </div>
      {/each}
    </Carousel>
  </div>
</section>

<style>
  section {
    background-color: white;
  }
  
  :global(.carousel-item) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    :global(.carousel) {
      --particlesToShow: 3;
    }
  }

  @media (max-width: 640px) {
    :global(.carousel) {
      --particlesToShow: 2;
    }
  }
</style>