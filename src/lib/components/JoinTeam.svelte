<script lang="ts">
    import {  t} from "svelte-i18n";

  // Function to dynamically load the HubSpot form
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
      ? "https://form.jotform.com/form/250276311925555" 
      : "https://form.jotform.com/form/250277281510552";
    
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
  
  <section class="py-20 bg-blue-50 relative overflow-hidden" id="contactUs">
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
        on:click={openModal}
          class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          {$t('join_button')}
        </button>
      </div>
    </div>


    <!-- Modal -->
<div
id="modal-container"
class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50"
>
<div class="bg-white rounded-xl p-8 w-11/12 md:w-1/2 relative">
  <!-- Modal Title -->
  <h2 class="text-xl md:text-2xl font-semibold mb-4 text-center">
    {$t('modal_join_team')}
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