<script>
    import { t } from "svelte-i18n";

  import ConsultingCard from './ConsultingCard.svelte';
  
    const products = [
      {
        title: 'Digital Transformation',
        description: 'Assist clients in both public and private sectors in accelerating Digital Transformation and enhancing IT governance.',
        icon: '/icons/transformation.png'
      },
      {
        title: 'Customer Experience',
        description: 'Assist clients in both public and private sectors in assessing and enhancing Customer Experience.',
        icon: '/icons/rating.png'
      },
      {
        title: 'Data and Business Insight',
        description: 'To develop innovative solutions that provide business insight for decision makers and enhance customer experience in private and public sectors using scientific insights.',
        icon: '/icons/evaluate.png'
      },
      {
        title: 'Digital Innovation',
        description: 'Assist clients in both public and private sectors in fostering Digital Innovation enhancing their productivity and meeting their organizational objectives.',
        icon: '/icons/digitial-twin.png'
      },
      {
        title: 'Emerging Technologies',
        description: 'Develop innovative and transformative emerging-tech solutions using based best practices to help organizations addressing their challenges and achieving their objectives.',
        icon: '/icons/innovation.png'
      },
      {
        title: 'Design Studio & Immersive Experience',
        description: 'We develop immersive XR experiences that revolutionize engagement with clients and stakeholders, blending design and technology to create stunning audiovisual and interactive solutions.Our services include user interface (UI) and experience (UX) design, the development of digital products, and the re-engineering of services. We specialize in governing design systems and crafting integrated content, utilizing cutting-edge technologies to deliver impactful and engaging experiences.',
        icon: '/icons/social-media.png'
      },
  

    ];
  </script>
  
  <section class="py-20 bg-white" id="services">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="text-gray-400">      {$t('service1_text')}              </span>
              <br />
              <span class="text-navy-900">  {$t('service2_text')}   </span>
              <br />
              <span class="text-gray-400">  {$t('service3_text')}   </span>
            </h2>
          </div>

   
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each products as product}
          <ConsultingCard {...product} />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .text-navy-900 {
      color: #1a2b4b;
    }
  </style>