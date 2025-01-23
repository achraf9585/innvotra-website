<script>
        import {  t} from "svelte-i18n";
  import  Carousel  from 'svelte-carousel'
  import { onMount } from 'svelte';

  let particlesToShow = 5; // Default value for larger screens

// Function to handle screen size change
function updateParticlesToShow() {
  if (window.innerWidth <= 768) {
    particlesToShow = 2; // Use 3 particles on mobile screens
  } else {
    particlesToShow = 5; // Use 5 particles on larger screens
  }
}

// Add event listener to handle screen resize
onMount(() => {
  updateParticlesToShow(); // Initial check
  window.addEventListener('resize', updateParticlesToShow);

  return () => {
    window.removeEventListener('resize', updateParticlesToShow);
  };
});

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
      {$t('partners_title')}
    </h2>
    <div dir="ltr">

   
    <Carousel
      autoplay
      autoplayDuration={3000}
      pauseOnFocus
      arrows={true}
      dots={false}
      swiping={true}
      particlesToShow={particlesToShow}
      particlesToScroll={1}
      
    >
    {#each partners as partner}
    <div class="carousel-item w-full max-w-[250px] sm:max-w-[200px] flex items-center justify-center p-6 sm:p-4">
      <img
        src={partner.logo}
        alt={partner.alt}
        class="w-full h-auto max-h-[80px] sm:max-h-[60px] object-contain transition-all duration-300 hover:scale-110"
      />
    </div>
  {/each}
  
    </Carousel>
  </div>
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