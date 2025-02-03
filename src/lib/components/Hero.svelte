<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from "svelte-i18n";

  let videoSrc =
    'https://player.vimeo.com/video/1051072213?autoplay=1&muted=1&loop=1&background=1';

  let isMobile = false;

  function updateVideoSrc() {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
    videoSrc = isMobile
      ? 'https://player.vimeo.com/video/1050703289?autoplay=1&muted=1&loop=1&background=1'
      : 'https://player.vimeo.com/video/1051072213?autoplay=1&muted=1&loop=1&background=1';
  }

  onMount(() => {
    updateVideoSrc(); // Set the initial state
    window.addEventListener('resize', updateVideoSrc); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateVideoSrc); // Clean up the event listener
    };
  });


  let langMarginStyle = '';

onMount(() => {
  const lang = document.documentElement.lang || "en";
  langMarginStyle = lang === "ar" ? 'margin-right: 1%;' : 'margin-left: 1%;';
});



   // Add this click handler to your existing script
   function handleBackdropClick(event: MouseEvent) {
    const modalContainer = document.getElementById("modal-container");
    if (event.target === modalContainer) {
      closeModal();
    }
  }

  function loadJotForm(formUrl: string) {
    const loader = document.getElementById('loader-innovate');
    const externalForm = document.getElementById("external-form-innovate");
    
    loader.style.display = 'flex';
    externalForm.innerHTML = ''; // Clear previous form content

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = formUrl;
    iframe.className = 'w-full h-[600px] border-0'; // Updated width class
    iframe.onload = () => {
      loader.style.display = 'none';
    };

    externalForm.appendChild(iframe);
  }

  let scrollPosition = 0;
  function openModal() {
     // Lock body scroll
  scrollPosition = window.pageYOffset;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
  const modalContainer = document.getElementById("modal-container-innovate");
  const loader = document.getElementById('loader-innovate');
  modalContainer.style.display = "flex";
  loader.style.display = 'flex';

  const htmlLang = document.documentElement.lang || "en";
  const formUrl = htmlLang === "ar" 
    ? "https://form.jotform.com/form/250276292161555" 
    : "https://form.jotform.com/form/250276433898064";
  
  loadJotForm(formUrl);
}



  // Update the hero button handler
  function handleHeroButtonClick() {
    const htmlLang = document.documentElement.lang || "en";
    const [formUrl, titleKey] = htmlLang === "ar" 
      ? ["https://form.jotform.com/form/250276292161555", "modal_ar_title"]
      : ["https://form.jotform.com/form/250276433898064", "modal_en_title"];
    
    openModal();
  }

  function closeModal() {

      // Restore body scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
    const modalContainer = document.getElementById("modal-container-innovate");
    const externalForm = document.getElementById("external-form-innovate");
    const loader = document.getElementById('loader-innovate');
    
    modalContainer.style.display = "none";
    externalForm.innerHTML = ''; // Clear form content
    loader.style.display = 'none'; // Reset loader
  }
</script>
<section class="relative h-screen w-full overflow-hidden">
  {#if isMobile}
    <div class="absolute inset-0">
      <!-- Vimeo Video Background for Mobile -->
      <iframe
        id="vimeo-video"
        title="Vimeo Video"
        src={videoSrc}
        class="absolute top-0 left-0 w-full h-full object-cover"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  {:else}
    <div class="absolute w-full aspect-video">
      <!-- Vimeo Video Background for Desktop -->
      <iframe
        id="vimeo-video"
        title="Vimeo Video"
        src={videoSrc}
        class="absolute top-0 left-0 w-full h-full object-cover"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  {/if}

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>

  <!-- Content -->
  <div class="relative h-full flex items-end">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-10 space-y-4 md:space-y-0"
    >
      <h1
        class="text-white text-4xl md:text-5xl font-sans font-sans-600 w-full md:w-auto text-center md:text-left"
      >
        {$t('hero_text')}
      </h1>
      <button
      class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-8 py-3 font-sans font-sans-600 rounded-xl text-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
      on:click={handleHeroButtonClick} 
    >
      {$t('hero_button')}
    </button>
    </div>
  </div>
</section>

<!-- Modal -->
<!-- Modal container -->
<div
  id="modal-container-innovate"
  class="hidden fixed inset-0 z-50 flex items-center justify-center w-full bg-black/50 overflow-y-auto"
  style="display: none; touch-action: none; -webkit-overflow-scrolling: touch;"
  role="dialog"
  aria-modal="true"
  on:touchstart|preventDefault
  on:touchmove|preventDefault
>
<div 
class="relative mx-4 w-full max-w-2xl max-h-[90vh]"
style="touch-action: auto;"
> 

<div class="relative rounded-xl bg-white p-6 shadow-2xl overflow-y-auto">
        <div class="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
        <!-- Logo and Text -->
        <div class="flex items-center justify-center w-full">
          <img src="/images/icon.png" alt="Logo" class="w-8 h-8 mr-2" />
          <span class="text-xl text-[#2c5cc6]" style="font-family: 'Trebuchet MS', sans-serif;">
            {$t('modal_innovate')}
          </span>
        </div>
        
        <!-- Close Button -->
        <button
          on:click={closeModal}
          class="text-gray-400 hover:text-gray-500 transition-colors ml-2"
          aria-label="Close modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div
        id="loader-innovate"
        class="flex h-24 items-center justify-center"
        style="display: none;"
      >
        <div class="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"/>
      </div>

      <div id="external-form-innovate" class="w-full h-[500px] md:h-[600px]" style={langMarginStyle}></div>
    </div>
  </div>
</div>


<style global>


#external-form {
    width: 100%;
  }

  #modal-container iframe {
    width: 100% !important;
    min-height: 100px;
    @apply rounded-lg;
  }

  @media (max-width: 768px) {
    #modal-container iframe {
      min-height: 400px;
    }

  }

  #modal-container .modal-header {
    font-family: "Trebuchet MS", Tahoma, sans-serif;
}


#trebuchet  {
  font-family: "Trebuchet MS";
}


  #external-form {
      @apply -mx-4;
    }
  
     /* Remove horizontal padding on mobile */
     #modal-container .relative.rounded-xl {
      @apply px-4;
    }

  #modal-container {
    display: none;
  }
  #loader div {
    border-color: #2A4167 transparent transparent transparent;
  }


  /* Custom scrollbar for modal */
  #modal-container ::-webkit-scrollbar {
    width: 6px;
  }

  #modal-container ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  #modal-container ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  #modal-container ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }


</style>
