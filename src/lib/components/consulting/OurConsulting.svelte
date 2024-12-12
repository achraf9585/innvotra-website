<script>
  import ConsultingCard from './ConsultingCard.svelte';
    import ProductCard from './ConsultingCard.svelte';
  
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
        title: 'Digital Marketing & Immersive Experience',
        description: 'We develop business-oriented XR experiences that revolutionize the way you engage with clients and stakeholders, offering immersive and interactive solutions.',
        icon: '/icons/social-media.png'
      },

    ];
  </script>
  
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="text-gray-400">We deliver our differentiating</span>
              <br />
              <span class="text-navy-900">consulting services & emerging technology</span>
              <br />
              <span class="text-gray-400">based solutions</span>
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