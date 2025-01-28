<script lang="ts">
  import { t } from "svelte-i18n";

  const currentYear = new Date().getFullYear();

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
      ? "5fe59cb0-4d84-4fb7-a1a8-fbdf059f6a2b" 
      : "6ff042f7-8ed9-4fc8-b3e5-8fe7fe21b0d5";
    
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
  class="fixed inset-0 hidden items-center justify-center bg-black/50 backdrop-blur-sm z-[999]"
  style="display: none;"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <div class="relative mx-4 w-full max-w-2xl">
    <div class="relative rounded-xl bg-white p-6 shadow-2xl sm:p-8">
      <button
        on:click={closeModal}
        class="absolute -right-2 -top-2 z-10 rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Close modal"
      >
        <svg
          class="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 id="modal-title" class="mb-6 text-2xl font-bold text-gray-900">
        {$t('modal_contact_us')}
      </h2>

      <div
        id="loader"
        class="flex h-32 items-center justify-center"
        style="display: none;"
      >
        <div
          class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
        />
      </div>

      <div id="external-form" class="[&_form]:w-full" />
    </div>
  </div>
</div>

<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h3> {$t('footer_product_title')}</h3>
      <ul>


        <li><a href="/#">{$t('footer_product_1')}</a></li>
        <li><a href="/#"> {$t('footer_product_2')}</a></li>
        <li><a href="/#"> {$t('footer_product_3')}</a></li>
        <li><a href="/#"> {$t('footer_product_4')}</a></li>
        <li><a href="/#"> {$t('footer_product_5')}</a></li>
        <li><a href="/#">   {$t('footer_product_6')}</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>{$t('footer_service_title')}</h3>
      <ul> 
        <li><a href="/#">{$t('footer_service_1')}</a></li>
        <li><a href="/#"> {$t('footer_service_2')}</a></li>
        <li><a href="/#"> {$t('footer_service_3')}</a></li>
        <li><a href="/#"> {$t('footer_service_4')}</a></li>
        <li><a href="/#"> {$t('footer_service_5')}</a></li>
        <li><a href="/#">   {$t('footer_service_6')}</a></li>

     
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



<!-- Single Modal Container -->
<div
  id="modal-container"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50"
>
  <div class="bg-white rounded-xl p-8 w-11/12 md:w-1/2 relative">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-center">
      {$t('modal_contact_us')}
    </h2>
    <div
      id="loader"
      class="flex items-center justify-center mb-4"
      style="display: none;"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    <div id="external-form"></div>
    <button
      class="absolute top-4 right-4 text-gray-700 hover:text-black"
      on:click={closeModal}
    >
      ✕
    </button>
  </div>
</div>
</footer>


<style>

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