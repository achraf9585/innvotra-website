

<script lang="ts">
      import {  t} from "svelte-i18n";
    export let text = '';
    export let href = '#';

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
      ? "497d00c6-1438-4ec7-91b6-f85163af826c" 
      : "e7685f76-aa7c-480f-ac0c-a361fb248a32";
    
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
  

  

  
  <section class="hero ">
    <div class="content">
      <h1 class="text-4xl md:text-5xl font-bold text-navy-900 mb-6">{$t('innovate_title')}</h1>
      <p>{$t('innovate_description')}</p>
      <button class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"        on:click={openModal}> {$t('innovate_button')} </button> 
    </div>
    <div class="image-container">
      <img 
        src="/images/innovation.jpg" 
        alt="Business team analyzing data in meeting"
        class="hero-image"
      />
    </div>


        <!-- Modal -->
<div
id="modal-container"
class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50"
>
<div class="bg-white rounded-xl p-8 w-11/12 md:w-1/2 relative">
  <!-- Modal Title -->
  <h2 class="text-xl md:text-2xl font-semibold mb-4 text-center">
    {$t('modal_innovate')}
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
    on:click={closeModal}
    >
    ✕
  </button>
</div>
</div>
  </section>

  <style>
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #4169E1;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
  
    .button:hover {
      background-color: #3457c9;
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      align-items: center;
    }
  
    .content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  
    h1 {
      font-size: 3rem;
      color: #1a1a1a;
      line-height: 1.2;
      margin: 0;
    }
  
    p {
      font-size: 1.25rem;
      color: #4a4a4a;
      margin: 0;
      line-height: 1.6;
    }
  
    .image-container {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
    }
  
    .hero-image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  
    @media (max-width: 768px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }
  
      .content {
        align-items: center;
      }
  
      h1 {
        font-size: 2.5rem;
      }
    }

    #loader div {
    border-color: #2A4167 transparent transparent transparent;
  }
  </style>