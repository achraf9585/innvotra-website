<script lang="ts">
  import { onMount } from "svelte";
  import {  t} from "svelte-i18n";

// Function to dynamically load the HubSpot form
function loadJotForm(formUrl: string) {
  const loader = document.getElementById('loader-join');
  const externalForm = document.getElementById("external-form-join");
  
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
  const modalContainer = document.getElementById("modal-container-join");
  const loader = document.getElementById('loader-join');
  modalContainer.style.display = "flex";
  loader.style.display = 'flex';

  const htmlLang = document.documentElement.lang || "en";
  const formUrl = htmlLang === "ar" 
    ? "https://form.jotform.com/form/250276311925555" 
    : "https://form.jotform.com/form/250277281510552";
  
  loadJotForm(formUrl);
}

function closeModal() {
  const modalContainer = document.getElementById("modal-container-join");
    const externalForm = document.getElementById("external-form-join");
    const loader = document.getElementById('loader-join');
  
  modalContainer.style.display = "none";
  externalForm.innerHTML = ''; // Clear form content
  loader.style.display = 'none'; // Reset loader
}
</script>

<section class="py-20 bg-blue-50 relative overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <div 
      class="absolute inset-0" 
      style="background-image: url('/images/hexagon-pattern.svg'); background-size: 40px;"
    ></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
        {$t('join_title')}
      </h2>
      
      <p class="text-gray-600 text-lg mb-10 leading-relaxed">
        {$t('join_paragraph')}        </p>

      <button
        id="join-button"
      on:click={openModal}
        class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        {$t('join_button')}
      </button>
    </div>
  </div>


<!-- Modal -->
<!-- Modal container -->
<div
  id="modal-container-join"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
  style="display: none;"
  role="dialog"
  aria-modal="true"
>
<div class="relative mx-4 w-full max-w-2xl">
  <div class="relative rounded-xl bg-white p-8 shadow-2xl">
    <div class="flex justify-between items-center pb-4 mb-6  border-b border-gray-200">
      <!-- Logo and Text in the Center -->
      <div class="flex items-center justify-center w-full">
        <img src="/images/icon.png" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-2xl text-[#2c5cc6]" style="font-family: 'Trebuchet MS', sans-serif;">
          {$t('modal_join_team')}  <!-- Dynamic title key -->
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
        id="loader-join"
        class="flex h-32 items-center justify-center"
        style="display: none;"
      >
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"/>
      </div>

      <div id="external-form-join" class="w-full h-3/4" style={langMarginStyle}></div>
    
    </div>
  </div>
</div>
</section>

<style>
  .text-navy-900 {
    color: #1a2b4b;
  }

  /* Modal Styles */
#modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

#modal-content {
  background-color: #fff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 500px;
  position: relative;
}

#modal-content button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Header Styles */
header {
  background-color: #0A1B3D;
  padding: 1.5rem 2rem;
  width: 100%;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 180px;
}

.logo img {
  width: 100%;
  height: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.contact-text {
  color: white;
  font-size: 1.125rem;
  margin: 0;
}

.contact-button {
  background-color: #4B6BFB;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #3451db;
}

/* Footer Styles */
footer {
  background-color: #0A1B3D;
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.8rem;
}

a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #646cff;
}

.social-links {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #2a2a2a;
  text-align: center;
  color: #888;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1.5rem;
  }

  .header-right {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }


}

</style>