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
    const loader = document.getElementById('loader');
    const externalForm = document.getElementById("external-form");
    
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

  function openModal() {
    const modalContainer = document.getElementById("modal-container");
    const loader = document.getElementById('loader');
    modalContainer.style.display = "flex";
    loader.style.display = 'flex';

    const htmlLang = document.documentElement.lang || "en";
    const formUrl = htmlLang === "ar" 
      ? "https://form.jotform.com/form/250276292161555" 
      : "https://form.jotform.com/form/250276433898064";
    
    loadJotForm(formUrl);
  }

  function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    const externalForm = document.getElementById("external-form");
    const loader = document.getElementById('loader');
    
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
        on:click={openModal}
      >
        {$t('hero_button')}
      </button>
    </div>
  </div>
</section>

<!-- Modal -->
<!-- Modal container -->
<div
  id="modal-container"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
  style="display: none;"
  role="dialog"
  aria-modal="true"
>
<div class="relative mx-4 w-full max-w-2xl">
  <div class="relative rounded-xl bg-white p-8 shadow-2xl">
    <div class="flex justify-between items-center pb-4 mb-6 border-b border-gray-200">
      <!-- Logo and Text in the Center -->
      <div class="flex items-center justify-center w-full">
        <img src="/images/icon.png" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-2xl  text-[#2c5cc6]" style="font-family: 'Trebuchet MS', sans-serif;">
          {$t('modal_innovate')}
        </span>
      </div>
      
      <!-- Close Button -->
      <button
        on:click={closeModal}
        class="text-gray-400 hover:text-gray-500 transition-colors ml-auto"
        aria-label="Close modal"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

      <div
        id="loader"
        class="flex h-32 items-center justify-center"
        style="display: none;"
      >
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"/>
      </div>

      <div id="external-form" class="w-full h-3/4" style={langMarginStyle}></div>
    
    </div>
  </div>
</div>


<style global>


#external-form {
    width: 100%;
  }

  #modal-container iframe {
    width: 100% !important;
    min-height: 500px;
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
