<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "svelte-i18n";

  const currentYear = new Date().getFullYear();

  function loadJotForm(formUrl: string) {
    const loader = document.getElementById('loader-contact');
    const externalForm = document.getElementById("external-form-contact");
    
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
  const modalContainer = document.getElementById("modal-container-contact");
  const loader = document.getElementById('loader-contact');
  modalContainer.style.display = "flex";
  loader.style.display = 'flex';

  const htmlLang = document.documentElement.lang || "en";
  const formUrl = htmlLang === "ar" 
  ? "https://form.jotform.com/form/250277344095560" 
  : "https://form.jotform.com/form/250276930823559";
  
  loadJotForm(formUrl);
}




function closeModal() {
    const modalContainer = document.getElementById("modal-container-contact");
    const externalForm = document.getElementById("external-form-contact");
    const loader = document.getElementById('loader-contact');
    
    modalContainer.style.display = "none";
    externalForm.innerHTML = ''; // Clear form content
    loader.style.display = 'none'; // Reset loader
  }
</script>
<header>
  <div class="header-container">
    <div class="logo">
      <a href="/">
        <img src="/images/logo.png" alt="Innovative Transformation" />
      </a>
    </div>
    
    <div class="header-right">
      <p class="contact-text">{$t('contact_title')}</p>
      <button
        on:click={openModal}
        id="contact-us-btn"
        class="contact-button bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD]"
      >
        {$t('contact_button')}
      </button>
    </div>
  </div>
</header>

<!-- Modal container -->
<div
  id="modal-container"
  class="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-black/50"
  style="display: none;"
  role="dialog"
  aria-modal="true"
>
  <div class="relative mx-4 w-full  max-w-2xl h-[80%]" >
    <div class="relative rounded-xl  bg-white p-8 shadow-2xl">
 
        <h2 class="text-2xl font-semibold text-gray-900">{$t('modal_contact_us')}</h2>
        <button
          on:click={closeModal}
          class="text-gray-400 hover:text-gray-500 transition-colors"
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



<footer id="contactUs">
  <div class="footer-content">
    <div class="footer-section">
      <h3> {$t('footer_product_title')}</h3>
      <ul>


       <a href="#products">  <li>{$t('footer_product_1')}</li></a> 
       <a href="#products">      <li> {$t('footer_product_2')}</li></a> 
        <a href="#products">  <li> {$t('footer_product_3')}</li></a> 
          <a href="#products">  <li> {$t('footer_product_4')}</li></a> 
            <a href="#products">  <li> {$t('footer_product_5')}</li></a> 
              <a href="#products">   <li>   {$t('footer_product_6')}</li></a> 
      </ul>
    </div>

    <div class="footer-section">
      <h3>{$t('footer_service_title')}</h3>
      <ul> 
        <a href="#services"> <li>{$t('footer_service_1')}</li></a> 
          <a href="#services">   <li> {$t('footer_service_2')}</li></a> 
            <a href="#services">   <li> {$t('footer_service_3')}</li></a> 
              <a href="#services">   <li> {$t('footer_service_4')}</li></a> 
                <a href="#services">   <li> {$t('footer_service_5')}</li></a> 
                  <a href="#services">    <li>   {$t('footer_service_6')}</li></a> 

     
      </ul>
    </div>

    <div class="footer-section">
      <h3>{$t('footer_contact_title')}</h3>
      <ul>
        <li>{$t('footer_contact_address')}</li>
        <li>{$t('footer_contact_city')}</li>
        <li><a href="mailto:info@innvotra.com">info@innvotra.com</a></li>
        <li><a href="tel:+96611232775" dir="ltr">+966 11 232 775</a></li>
      </ul>
      <div class="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <!-- Linkedin -->
<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c0c1c3]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span></a>

<a href="https://x.com" target="_blank" rel="noreferrer">
<!-- X -->
<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c0c1c3]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>{$t('footer_copyright')} - {currentYear} ©</p>
  </div>



<!-- Modal -->
<!-- Modal container -->
<div
  id="modal-container-contact"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
  style="display: none;"
  role="dialog"
  aria-modal="true"
>
<div class="relative mx-4 w-full max-w-2xl">
  <div class="relative rounded-xl bg-white p-8 shadow-2xl">
    <div class="flex justify-between items-center border-b border-gray-200">
      <!-- Logo and Text in the Center -->
      <div class="flex items-center justify-center w-full">
        <img src="/images/icon.png" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-2xl text-[#2c5cc6]" style="font-family: 'Trebuchet MS', sans-serif;">
          {$t('modal_contact_us')}  <!-- Dynamic title key -->
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
        id="loader-contact"
        class="flex h-32 items-center justify-center"
        style="display: none;"
      >
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"/>
      </div>

      <div id="external-form-contact" class="w-full h-3/4" style={langMarginStyle}></div>
    
    </div>
  </div>
</div>
</footer>


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
  /* Select dropdown arrow */
  .hs-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
  }


/* Modal Styles */


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