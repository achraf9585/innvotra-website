

<script>
    export let text = '';
    export let href = '#';
  </script>
  

  

  
  <section class="hero ">
    <div class="content">
      <h1>Innovate with us</h1>
      <p>Tell us about your requirements and our team will be eager to know more and help you achieve your goals.</p>
      <button class="button bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD]"> Tell us about your needs </button> 
    </div>
    <div class="image-container">
      <img 
        src="/images/innovation.jpg" 
        alt="Business team analyzing data in meeting"
        class="hero-image"
      />
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
  </style>