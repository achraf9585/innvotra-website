<script>
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
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
        {#each partners as partner}
          <div class="w-full max-w-[200px] flex items-center justify-center p-4">
            <img
              src={partner.logo}
              alt={partner.alt}
              class="w-full h-auto object-contain filter  transition-all duration-300"
            />
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    section {
      background-color: white;
    }
  </style>