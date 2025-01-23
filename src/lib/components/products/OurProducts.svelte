<script>
    import {   t } from "svelte-i18n";

    import ProductCard from './ProductCard.svelte';
  
    const products = [

      {
        id:1,
        title: 'Insider - Chat With Your Data',
        titleAr:' انسايدر:  تحاور مع البيانات  ',
        descriptionAr:'    تحدث إلى بياناتك بسهولة مع  انسايدر، المنتج الذي يتيح لك التعامل مع قواعد البيانات دون الحاجة لأي خبرات تقنية. بفضل الذكاء الاصطناعي ومعالجة اللغة الطبيعية (NLP)، يُحوّل  انسايدر التعامل مع البيانات إلى حوار بسيط وفعّال. سواء كنت موظفًا تحتاج لتحليل البيانات والتقارير أو متخذ قرار يسعى لقرارات سريعة قائمة على البيانات، انسايدر يُمكّنك من الوصول إلى تحليلات دقيقة بسهولة عبر واجهة استخدام بسيطة وداعمة ',
        description: 'Get a significant advancement in making data more accessible and understandable. We enable users to engage with their datasets in a conversational way, leading to improved insights and decision-making processes. Interact with your enterprise datasets through our conversational interfaces without technical expertise. Simply, ask questions about your data and receive insights in a conversational and cognitive manner, and user-friendly. Using NLP and AI via user interface that enables users to query and analyze datasets through conversational interactions.',
     
        icon: '/icons/safe.png'
      },
      {
        id:2,
        title: 'Virtual Agent',
        titleAr:' المساعد الافتراضي ',
        descriptionAr:'نقدم المساعد الافتراضي كمنتج رقمي مبتكر يُحدث تحولًا في تفاعل المستفيدين مع قطاع الأعمال في المنظومات الحكومية والخاصة. بفضل تقنيات الذكاء الاصطناعي والنماذج اللغوية الضخمة (AI/LLM) ومعالجة اللغة الطبيعية (NLP)، يتيح المساعد الافتراضي تواصلًا فعالًا على مدار الساعة، مع تحسين تجربة المستخدم وتبسيط العمليات. سواء لخدمة العملاء، استرجاع المعلومات، أو المساعدة الشخصية، يقدّم المساعد الافتراضي تفاعلًا ذكيًا عبر النص أو الصوت، محققًا تجربة سلسة تحاكي التواصل البشري وتدعم الكفاءة التشغيلية. ',
        description: 'Our Virtual agents represent a significant advancement in how businesses and individuals interact with technology. By leveraging AI and LLM, we facilitate efficient communication, streamline processes, and enhance user experience across various applications. As technology continues to evolve, our virtual agent is capable, and integrated into our daily lives. We build a simulated like human conversation and interaction, typically powered by artificial intelligence (AI/LLM) and natural language processing (NLP) technologies. Our Virtual agents can function in various applications, including customer service, information retrieval, and personal assistance. An AI-driven digital agent that can engage in conversations with users through text or voice, providing responses, assistance, or information based on user inputs.',
       icon: '/icons/agents.png'
      },
      {
        id:3,
        title: 'Metaservice Center',
        titleAr:'  مركز الخدمة الافتراضي   ',
        descriptionAr:'مركز الخدمة الافتراضي على الميتافيرس هو منتج مبتكر يُحدث نقلة نوعية في تفاعل الشركات مع العملاء. من خلال تقنيات الواقع الافتراضي (VR)، والواقع المعزز (AR)، والواقع المختلط (MR)، نقدم بيئة رقمية تتيح وصولًا فعالًا إلى خدمات ودعم شخصي، مع تعزيز تجربة المستخدم بطرق جديدة وفعّالة',
        description: 'Our Metaverse-Based Service Center represents a significant evolution in how businesses can interact with customers, leveraging immersive technologies to create engaging, efficient, and personalized service experiences. As the metaverse continues to develop, the potential applications for service centers will expand, offering innovative ways to enhance customer engagement and support across various industries. We build a virtual environment where users can access various services and support through immersive technologies such as virtual reality (VR), augmented reality (AR), and mixed reality (MR).',
        icon: '/icons/customer-service.png'
      },
      {
        id:4,
        title: 'DocsChain - Digital Notarization',
        titleAr:' توثيق رقمي باستخدام تقنية سلسلة الكتل "البلوك تشين" ',
        descriptionAr: 'كحل مبتكر لإدارة المستندات يعزز الأمان والشفافية والكفاءة باستخدام تقنية البلوك تشين والعقود الذكية. نحول المستندات العادية إلى مستندات ذكية، مما يتيح أتمتة العمليات وضمان الامتثال، مع تقليل التكاليف والمخاطر، وتحقيق كفاءة تشغيلية عالية في مختلف الصناعات',
        description: 'We offer a transformative approach to document management by enhancing security, transparency, and efficiency. Leveraging Blockchain features, organizations can create more robust systems for managing digital documents, ensuring integrity and compliance while reducing costs and risks. Our blockchain document management turns normal documents into smart document, providing significant benefits across various industries. By leveraging the capabilities of blockchain and smart contracts, our clints can automate processes and ensure compliance, ultimately leading to improved operational effectiveness. Our smart documents product is growing, providing innovative solutions across business in multiple industries. To transform the way organizations manages documents in a transformational innovative approach.',
        icon: '/icons/smart-contracts.png'
      },
      {
        id:5,
        title: 'Virtual Tours',
        titleAr:' الجولات الافتراضية ',
descriptionAr: 'تقدم جولاتنا الافتراضية تجربة قوية لاستكشاف البيئات المختلفة، سواء في العقارات أو التعليم أو السياحة أو تطبيقات أخرى. باستخدام التصوير بزاوية 360 درجة، يمكن للمستخدمين التفاعل مع المكان من جميع الزوايا، مع إمكانية الوصول إلى معلومات إضافية مثل الصور والفيديوهات. ندمج الصوت والفيديو والنص لتوفير تجربة قصصية غنية، مع أدوات تحكم بسيطة تتيح التنقل والتقريب بين المناطق والعرض من زوايا متعددة. ',
        description: 'Our Virtual tours offer a powerful way to explore and engage with various environments, whether for real estate, education, tourism, or other applications. By providing immersive and interactive experiences, virtual tours enhance accessibility and understanding, making them an increasingly popular tool in many industries. We continue to expand our Virtual tours capabilities and applications, further enriching user experiences. Using 360-Degree Imagery, users can view surroundings from all angles, allowing for comprehensive exploration of the environment, such as hotspots or icons to access additional information, images, or videos about specific features within the tour. Integration of audio, video, and text to enhance the storytelling aspect and provide context about the location, we provide simple controls that allow users to move through the space, zoom in on details, and switch between different views or areas.',
        icon: '/icons/virtual-tour.png'
      },
      {
        id:6,
        title: 'Digital Twin',
        titleAr:'التوأم الرقمي',
descriptionAr:' نقدم توأمنا الرقمي ضمن عدد من منتجاتنا الرقمية والذي يعتبر تحولا في طريقة عرض والربط بين المساحات المكانية وتوأمها الرقمي ، مما يتيح عدد من حالات الاستخدام مثل الرقابة والتحكم والتحليل وتحسين إدارة الأنظمة المعقدة بشكل لحظي. من خلال الاستفادة من التقنيات المتقدمة مثل إنترنت الأشياء وتحليلات الذكاء الاصطناعي والبيانات ، يوفر منتجنا لبناء التوائم الرقمية  مزايا كبيرة في مختلف القطاعات والمنظومات ، من التصنيع والرعاية الصحية إلى الطيران والمدن الذكية ' ,
        description: 'Our Digital twin product represents a transformative data visualization technology that bridges the physical and digital worlds, enabling real-time monitoring, analysis, and optimization of complex systems. By leveraging advanced technologies such as IoT, AI, and data analytics, our digital twin offer significant benefits in various industries, from manufacturing and healthcare to aerospace and smart cities.',
        icon: '/icons/digitial-twin.png'
      }
    ];

    let expandedCardId = null; // Track the currently expanded card
    function handleExpand(cardId) {
    expandedCardId = expandedCardId === cardId ? null : cardId; // Toggle expansion
  }
  </script>
  
  <section class="py-20 bg-white" id="products">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16 font-sans">
        {$t('products_title')}    
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each products as product}
          <ProductCard {...product}  isExpanded={product.id === expandedCardId} 
          onExpand={() => handleExpand(product.id)}  />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .text-navy-900 {
      color: #1a2b4b;
    }
  </style>