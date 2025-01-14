<script>
        import {  t } from "svelte-i18n";

    import DifferentiatorCard from './DifferentiatorCard.svelte';
  
    const differentiators = [
    {
      title: 'Vision',
      titleAr: 'الرؤية',
      descriptionAr:'الاستفادة من تطبيق التقنيات الناشئة بأفضل  الحلول والممارسات في مجال التحول الرقمي وتوفير أعلى مستوى من الخدمات الاستشارية العالية  الجودة المدعومة بالابتكار الرقمي.',
      description:
        'To lead in innovative leveraging of cutting-edge technologies with best practices in digital transformation and provide the highest level of quality consulting services and solutions.',
      icon: './icons/eye.png' // Example Iconify icon
    },
    {
      title: 'Mission',
      titleAr: 'المهمة',
      descriptionAr:'خدمة عملائنا كشركاء موثوق بهم، وتزويدهم بأفضل الممارسات  في مجال التحول الرقمي وحلول البيانات والذكاء الاصطناعي من خلال توفير أعلى مستويات  الخدمات الاستشارية عالية الجودة المدعومة بالابتكار الرقمي.',
      description:
        'Serve our customers as trusted allies, leveraging best practices in digital transforming, data and business insight with highest level of quality consulting services, customer services, and digital innovation.',
      icon: './icons/mission.png' // Example Iconify icon
    },
    {
      title: 'Value',
      titleAr: 'القيم',
      values: [
        {
          title: 'Commitment',
          titleAr: 'التزام',
          descriptionAr: 'مكرسة لتجاوز التوقعات.',
          description: 'Dedicated to exceeding expectations.'
        },
        {
          title: 'Confidentiality',
          titleAr: ' السرية',
          descriptionAr:' حماية عملك بنزاهة.',
          description: 'Safeguarding your business with integrity.'
        },
        {
          title: 'Agility',
          titleAr:'المرونة',
          descriptionAr:'التكيف مع احتياجاتك المتطورة.',
          description: 'Adapting to your evolving needs.'
        }
      ],
      icon: './icons/diamond.png' // Example Iconify icon
    }
  ];
  </script>
  
  <section class="py-20 bg-navy-950 relative overflow-hidden">
    <!-- Background Network Effect -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: url('/images/diff.png'); background-size: cover;"></div>
    </div>
  
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        {$t('differentiates_title')}
      </h2>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
        {#each differentiators as card}
          <DifferentiatorCard {...card} />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .bg-navy-950 {
      background-color: #0a1629;
    }
  </style>