<script>
  import { onMount } from 'svelte';

  let videoElement;
  let videoSrc = '/videos/hero.mp4'; // Default to desktop video

  // Check the device type and update the video source
  function updateVideoSrc() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    videoSrc = isMobile ? '/videos/hero_mobile.mp4' : '/videos/hero.mp4';
  }

  onMount(() => {
    updateVideoSrc(); // Set the initial video source
    window.addEventListener('resize', updateVideoSrc); // Update on window resize

    if (videoElement) {
      videoElement.play();
    }

    return () => {
      window.removeEventListener('resize', updateVideoSrc); // Clean up the event listener
    };
  });
</script>

<section class="relative h-screen w-full overflow-hidden">
  <!-- Video Background -->
  <video
    bind:this={videoElement}
    class="absolute top-0 left-0 w-full h-full object-cover"
    autoplay
    muted
    loop
    playsinline
  >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>

  <!-- Content -->
  <div class="relative h-full flex items-end">
    <div class="container mx-auto px-6 flex justify-between items-center w-full mb-10">
      <h1 class="text-white text-5xl md:text-5xl font-sans font-sans-600">
        We Think, Plan and Execute
      </h1>
      <button class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-8 py-3 font-sans font-sans-600 rounded-xl text-lg hover:bg-blue-700 transition-colors">
        Get in Touch
      </button>
    </div>
  </div>
</section>
