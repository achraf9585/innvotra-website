<script>
  import { onMount } from 'svelte';

  let videoSrc = 'https://player.vimeo.com/video/1039608835?autoplay=1&muted=1&loop=1&background=1';

  function updateVideoSrc() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    videoSrc = isMobile
      ? 'https://player.vimeo.com/video/1039608809?autoplay=1&muted=1&loop=1&background=1'
      : 'https://player.vimeo.com/video/1039608835?autoplay=1&muted=1&loop=1&background=1';
  }

  onMount(() => {
    updateVideoSrc(); // Set the initial video source
    window.addEventListener('resize', updateVideoSrc); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateVideoSrc); // Clean up the event listener
    };
  });
</script>

<section class="relative h-screen w-full overflow-hidden">
  <!-- Vimeo Video Background -->
  <iframe
    src={videoSrc}
    class="absolute top-0 left-0 w-full h-full"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>

  <!-- Content -->
  <div class="relative h-full flex items-end">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-10 space-y-4 md:space-y-0"
    >
      <h1
        class="text-white text-4xl md:text-5xl font-sans font-sans-600 w-full md:w-auto text-center md:text-left"
      >
        We Think, Plan and Execute
      </h1>
      <button
        class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-8 py-3 font-sans font-sans-600 rounded-xl text-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
      >
        Get in Touch
      </button>
    </div>
  </div>
</section>
