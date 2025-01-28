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
<div
  id="modal-container"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50"
>
  <div class="bg-white rounded-xl p-8 w-11/12 md:w-1/2 relative">
    <!-- Modal Title -->
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-center">
      {$t('modal_get_in_touch')}
    </h2>

    <!-- Loader -->
    <div
      id="loader"
      class="flex items-center justify-center mb-4"
      style="display: none;"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <!-- External Form -->
    <div id="external-form"></div>

    <!-- Close Button -->
    <button
      class="absolute top-4 right-4 text-gray-700 hover:text-black"
      on:click={() => (document.getElementById('modal-container').style.display = 'none')}
    >
      ✕
    </button>
  </div>
</div>

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


  function loadHubSpotForm(formId: string) {
    const loader = document.getElementById('loader');
    const externalForm = document.getElementById("external-form");
    loader.style.display = 'flex';
    externalForm.innerHTML = ''; // Clear previous form content
 //@ts-ignore
    if (window.hbspt) {
      // Use existing script if already loaded
       //@ts-ignore
      window.hbspt.forms.create({
        portalId: "48736590",
        formId: formId,
        target: "#external-form",
        onFormReady: () => {
          loader.style.display = 'none';
        },
      });
    } else {
      // Load script if not present
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.onload = () => {
 //@ts-ignore
        window.hbspt.forms.create({
          portalId: "48736590",
          formId: formId,
          target: "#external-form",
          onFormReady: () => {
            loader.style.display = 'none';
          },
        });
      };
      document.body.appendChild(script);
    }
  }

  function openModal() {
    const modalContainer = document.getElementById("modal-container");
    const loader = document.getElementById('loader');
    modalContainer.style.display = "flex";
    loader.style.display = 'flex';

    const htmlLang = document.documentElement.lang || "en";
    const formId = htmlLang === "ar" 
    ? '497d00c6-1438-4ec7-91b6-f85163af826c' // Arabic formId
    : 'e7685f76-aa7c-480f-ac0c-a361fb248a32'; // English formId
    
    loadHubSpotForm(formId);
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

<style>
  #modal-container {
    display: none;
  }
  #loader div {
    border-color: #2A4167 transparent transparent transparent;
  }
</style>
