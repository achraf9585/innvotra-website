<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from "svelte-i18n";

  let videoSrc = 'https://player.vimeo.com/video/1049611569?autoplay=1&muted=1&loop=1&background=1';

  function updateVideoSrc() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    videoSrc = isMobile
      ? 'https://player.vimeo.com/video/1039608809?autoplay=1&muted=1&loop=1&background=1'
      : 'https://player.vimeo.com/video/1049611569?autoplay=1&muted=1&loop=1&background=1';
    
  }

  onMount(() => {
    updateVideoSrc(); // Set the initial video source
    window.addEventListener('resize', updateVideoSrc); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateVideoSrc); // Clean up the event listener
    };
  });


   // Function to dynamically load the HubSpot form
   function loadHubSpotForm(formId: string) {
    const externalForm = document.getElementById("external-form");
    if (!externalForm.innerHTML) {
      const script = document.createElement("script");
      script.setAttribute("charset", "utf-8");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", "//js.hsforms.net/forms/embed/v2.js");
      script.onload = () => {
        //@ts-ignore
        hbspt.forms.create({
          portalId: "48736590",
          formId: formId,
          target: "#external-form",
        });
      };
      document.body.appendChild(script);
    }
  }
  function openModal() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "flex";


    const htmlLang = document.documentElement.lang || "en";
    console.log(htmlLang)

    if (htmlLang === "ar") {
      loadHubSpotForm("497d00c6-1438-4ec7-91b6-f85163af826c"); // Replace with your Arabic formId
    } else {
      loadHubSpotForm("e7685f76-aa7c-480f-ac0c-a361fb248a32"); // English formId
    }
  }

  // Function to close the modal
  function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "none";
  }

</script>

<section class="relative h-screen w-full overflow-hidden">
  <!-- Vimeo Video Background -->
  <iframe
    src={videoSrc}
    class="absolute top-0 left-0 w-full h-full"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>

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

        <h1>{$t('hero_text')}</h1>
      </h1>
      <button
        class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-8 py-3 font-sans font-sans-600 rounded-xl text-lg hover:bg-blue-700 transition-colors w-full md:w-auto"         on:click={openModal}
      >
      {$t('hero_button')}
      </button>
    </div>
  </div>
</section>
