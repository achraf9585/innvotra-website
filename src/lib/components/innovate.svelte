

<script lang="ts">
  import { onMount } from "svelte";
      import {  t} from "svelte-i18n";
    export let text = '';
    export let href = '#';

    function loadJotForm(formUrl: string) {
    const loader = document.getElementById('loader-innovate-innovate');
    const externalForm = document.getElementById("external-form-innovate-innovate");
    
    
    loader.style.display = 'flex';
    externalForm.innerHTML = ''; // Clear previous form content

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = formUrl;
    iframe.className = 'w-full h-[520px] border-0';
    iframe.onload = () => {
      loader.style.display = 'none';
    };

    externalForm.appendChild(iframe);
  }

  let langMarginStyle = '';

onMount(() => {
  const lang = document.documentElement.lang || "en";
  langMarginStyle = lang === "ar" ? 'margin-right: 1%;' : 'margin-left: 1%;';
});



function openModal() {
  const modalContainer = document.getElementById("modal-container-innovate-innovate");
  const loader = document.getElementById('loader-innovate-innovate');
  modalContainer.style.display = "flex";
  loader.style.display = 'flex';

  const htmlLang = document.documentElement.lang || "en";
  const formUrl = htmlLang === "ar" 
    ? "https://form.jotform.com/form/250276292161555" 
    : "https://form.jotform.com/form/250276433898064";
  
  loadJotForm(formUrl);
}


function closeModal() {
    const modalContainer = document.getElementById("modal-container-innovate-innovate");
    const externalForm = document.getElementById("external-form-innovate-innovate");
    const loader = document.getElementById('loader-innovate-innovate');
    
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
<!-- Modal container -->
<div
  id="modal-container-innovate-innovate"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
  style="display: none;"
  role="dialog"
  aria-modal="true"
>
<div class="relative mx-4 w-full max-w-2xl h-3/4">
  <div class="relative rounded-xl bg-white p-8 shadow-2xl">
    <div class="flex justify-between items-center border-b border-gray-200">
      <!-- Logo and Text in the Center -->
      <div class="flex items-center justify-center w-full">
        <img src="/images/icon.png" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-2xl text-[#2c5cc6]" style="font-family: 'Trebuchet MS', sans-serif;">
          {$t('modal_innovate')}  <!-- Dynamic title key -->
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
        id="loader-innovate-innovate"
        class="flex h-32 items-center justify-center"
        style="display: none;"
      >
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"/>
      </div>

      <div id="external-form-innovate-innovate" class="w-full h-3/4" style={langMarginStyle}></div>
    
    </div>
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