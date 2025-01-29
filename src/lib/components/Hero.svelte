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

      <div id="external-form" class="w-full"></div>
    </div>
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
    iframe.className = 'w-full h-[600px] border-0';
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

<style global>
  /* Enhanced HubSpot Form Styles */
  .hs-form {
    @apply space-y-6;
  }

  .hs-form-field {
    @apply mb-4;
  }

  .hs-input,
  .hs-input[type="text"],
  .hs-input[type="email"],
  .hs-input[type="tel"],
  .hs-input[type="number"],
  .hs-input[type="date"],
  .hs-input[type="file"],
  .hs-select,
  .hs-form textarea {
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all;
  }

  .hs-form label {
    @apply block text-sm font-medium text-gray-700 mb-2;
  }

  .hs-form .hs-form-required {
    @apply text-red-500;
  }

  .hs-form .hs-error-msg {
    @apply text-red-600 text-sm mt-1;
  }

  .hs-form textarea {
    @apply min-h-[100px];
  }

  .hs-button.primary {
    @apply w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }

  /* Enhanced Modal Styles */
  #modal-container .hs-form {
    @apply pt-4;
  }

  #modal-container .hs-form h3 {
    @apply text-xl font-semibold mb-6 pb-4 border-b border-gray-200;
  }

  /* Select dropdown arrow */
  .hs-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
  }


    /* Updated Modal Styles */
    #modal-container iframe {
    min-height: 500px;
    @apply rounded-lg;
  }
  @media (max-width: 768px) {
    #modal-container iframe {
      min-height: 400px;
    }
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

  /* Ensure form elements don't overflow */
  .hs-form {
    @apply max-w-full overflow-hidden;
  }
</style>
