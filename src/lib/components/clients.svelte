<script>
    import  Carousel  from 'svelte-carousel'

    const partners = [
      {
        name: "OvalEdge",
        logo: "/partners/mculture.png",
        alt: "OvalEdge logo"
      },
      {
        name: "KingEclient",
        logo: "/partners/kingeclient.png",
        alt: "mcommunication logo"
      },
      {
        name: "Founder Institute",
        logo: "/partners/mtransport.png",
        alt: "Founder Institute logo"
      },
      {
        name: "Merit",
        logo: "/partners/mindustry.png",
        alt: "Merit logo"
      },
      {
        name: "Moyas",
        logo: "/partners/mrural.png",
        alt: "Moyas logo"
      }
    ];
  </script>
  
  <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-4xl md:text-5xl font-bold text-[#0a1f44] mb-16">
        Our Clients
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
          <div class="w-full max-w-[500px] flex items-center justify-center p-4">
            <img
              src={partner.logo}
              alt={partner.alt}
              class="w-full h-auto object-contain filter  transition-all duration-300"
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
  </style>