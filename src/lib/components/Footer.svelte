<script>
    import { t } from "svelte-i18n";
    const currentYear = new Date().getFullYear();
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
        <a href="#" class="contact-button bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] ">{$t('contact_button')}</a>
      </div>
    </div>
  </header>
  
  <slot />
  
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3> {$t('footer_product_title')}</h3>
        <ul>
          <li><a href="/chat">Insider - Chat With Your Data</a></li>
          <li><a href="/agent">Virtual Agent</a></li>
          <li><a href="/center">Metaservice Center</a></li>
          <li><a href="/chain">DocChain - Digital Notarization</a></li>
          <li><a href="/tours">Virtual tours</a></li>
          <li><a href="/twin">Digital Twin</a></li>
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
          <li><a href="tel:+96611232775">+966 11 232 775</a></li>
        </ul>
        <div class="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">{$t('footer_linkedin')}</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">{$t('footer_twitter')}</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{$t('footer_copyright')} - {currentYear} ©</p>
    </div>
  </footer>
  
  <style>
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