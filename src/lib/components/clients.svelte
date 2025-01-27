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
        name: "Culture",
        logo: "/partners/mculture.png",
        alt: "Culture logo"
      },

      {
        name: "Transport Ministery",
        logo: "/partners/mtransport.png",
        alt: "Transport Ministery logo"
      },
      {
        name: "technology ministry", 
        logo: "/partners/mintechnology.png",
        alt: "technology ministry logo"
      },
   
      {
        name: "Indistructure", 
        logo: "/partners/mindustry.png",
        alt: "Indistructure logo"
      },
      {
        name: "Moyas",
        logo: "/partners/mrural.png",
        alt: "Moyas logo"
      },
      {
        name: "Tourism Ministry",
        logo: "/partners/tourism.png",
        alt: "Tourism Ministry logo"
      },
      {
        name: "Islamic Ministry",
        logo: "/partners/islamic.png",
        alt: "Islamic Ministry logo"
      },
      {
        name: "Asas",
        logo: "/partners/asas.png",
        alt: "Asas logo"
      },
      {
        name: "Modon",
        logo: "/partners/modon.png",
        alt: "modon logo"
      },

      {
        name: "KACST",
        logo: "/partners/KACST.png",
        alt: "KACST logo"
      },
  

   
      {
        name: "Sadirat",
        logo: "/partners/sadirat.png",
        alt: "Sadirat logo"
      },

      {
        name: "Dhaman",
        logo: "/partners/dhaman.png",
        alt: "Dhaman logo"
      },

      {
        name: "Digital Ministry",
        logo: "/partners/digital.png",
        alt: "Digital Ministry logo"
      },

      {
        name: "Digital Ministry",
        logo: "/partners/images (2).png",
        alt: "Digital Ministry logo"
      },

      {
        name: "king",
        logo: "/partners/king.png",
        alt: "king logo"
      },

      {
        name: "tga",
        logo: "/partners/tga.png",
        alt: "tga logo"
      },

      {
        name: "estate",
        logo: "/partners/estate.png",
        alt: "estate logo"
      },
      {
        name: "holy",
        logo: "/partners/holy.png",
        alt: "holy logo"
      },

      {
        name: "Heritage Ministry",
        logo: "/partners/heritage.png",
        alt: "Heritage Ministry logo"
      },
      {
        name: "Debt Ministry",
        logo: "/partners/debt.png",
        alt: "Debt Ministry logo"
      },

      {
        name: "Nazeel",
        logo: "/partners/nazeel.png",
        alt: "Nazeel logo"
      },

      {
        name: "Villa",
        logo: "/partners/villa.jpeg",
        alt: "Villa logo"
      },

      {
        name: "Mrna",
        logo: "/partners/mrna.png",
        alt: "Mrna logo"
      },

      {
        name: "Merit",
        logo: "/partners/merit.png",
        alt: "merit logo"
      },
    ];
  </script>
  
  <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-4xl md:text-5xl font-bold text-[#0a1f44] mb-16">
        {$t('clients_title')}
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
          <div class="carousel-item flex items-center justify-center p-6 sm:p-4">
            <div class="logo-container">
              <img
                src={partner.logo}
                alt={partner.alt}
               class="logo-image"
              />
            </div>
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
  
    .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px; /* Set a fixed width */
  height: 200px; /* Set a fixed height */
  border-radius: 8px; /* Optional: add rounded corners */
  overflow: hidden; /* Ensure logos do not exceed the container */
}

.logo-image {
  max-width: 100%; /* Ensures the logo fits within the container width */
  max-height: 100%; /* Ensures the logo fits within the container height */
  object-fit: contain; /* Maintains aspect ratio and ensures the logo is fully visible */
  transition: transform 0.3s ease-in-out;
}

.logo-image:hover {
  transform: scale(1.1); /* Adds a hover effect */
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