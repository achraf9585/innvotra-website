<script>
    import ProductCard from './ProductCard.svelte';
  
    const products = [
      {
        title: 'Insider - Chat With Your Data',
        description: 'Get a significant advancement in making data more accessible and understandable. We enable users to engage with their datasets in a conversational way, leading to improved insights and decision-making processes. Interact with your enterprise datasets through our conversational interfaces without technical expertise. Simply, ask questions about your data and receive insights in a conversational and cognitive manner, and user-friendly. Using NLP and AI via user interface that enables users to query and analyze datasets through conversational interactions.',
        icon: '/icons/safe.png'
      },
      {
        title: 'Virtual Agent',
        description: 'Our Virtual agents represent a significant advancement in how businesses and individuals interact with technology. By leveraging AI and LLM, we facilitate efficient communication, streamline processes, and enhance user experience across various applications. As technology continues to evolve, our virtual agent is capable, and integrated into our daily lives. We build a simulated like human conversation and interaction, typically powered by artificial intelligence (AI/LLM) and natural language processing (NLP) technologies. Our Virtual agents can function in various applications, including customer service, information retrieval, and personal assistance. An AI-driven digital agent that can engage in conversations with users through text or voice, providing responses, assistance, or information based on user inputs.',
       icon: '/icons/agents.png'
      },
      {
        title: 'Metaservice center',
        description: 'Our Metaverse-Based Service Center represents a significant evolution in how businesses can interact with customers, leveraging immersive technologies to create engaging, efficient, and personalized service experiences. As the metaverse continues to develop, the potential applications for service centers will expand, offering innovative ways to enhance customer engagement and support across various industries. We build a virtual environment where users can access various services and support through immersive technologies such as virtual reality (VR), augmented reality (AR), and mixed reality (MR).',
        icon: '/icons/customer-service.png'
      },
      {
        title: 'DocsChain - Digital Notarization',
        description: 'We offer a transformative approach to document management by enhancing security, transparency, and efficiency. Leveraging Blockchain features, organizations can create more robust systems for managing digital documents, ensuring integrity and compliance while reducing costs and risks. Our blockchain document management turns normal documents into smart document, providing significant benefits across various industries. By leveraging the capabilities of blockchain and smart contracts, our clints can automate processes and ensure compliance, ultimately leading to improved operational effectiveness. Our smart documents product is growing, providing innovative solutions across business in multiple industries. To transform the way organizations manages documents in a transformational innovative approach.',
        icon: '/icons/smart-contracts.png'
      },
      {
        title: 'Virtual tours',
        description: 'Our Virtual tours offer a powerful way to explore and engage with various environments, whether for real estate, education, tourism, or other applications. By providing immersive and interactive experiences, virtual tours enhance accessibility and understanding, making them an increasingly popular tool in many industries. We continue to expand our Virtual tours capabilities and applications, further enriching user experiences. Using 360-Degree Imagery, users can view surroundings from all angles, allowing for comprehensive exploration of the environment, such as hotspots or icons to access additional information, images, or videos about specific features within the tour. Integration of audio, video, and text to enhance the storytelling aspect and provide context about the location, we provide simple controls that allow users to move through the space, zoom in on details, and switch between different views or areas.',
        icon: '/icons/virtual-tour.png'
      },
      {
        title: 'Digital Twin',
        description: 'Our Digital twin product represents a transformative data visualization technology that bridges the physical and digital worlds, enabling real-time monitoring, analysis, and optimization of complex systems. By leveraging advanced technologies such as IoT, AI, and data analytics, our digital twin offer significant benefits in various industries, from manufacturing and healthcare to aerospace and smart cities.',
        icon: '/icons/digitial-twin.png'
      }
    ];
  </script>
  
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16 font-sans">
        Our Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each products as product}
          <ProductCard {...product} />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .text-navy-900 {
      color: #1a2b4b;
    }
  </style>