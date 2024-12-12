<script>
    const handleJoinClick = () => {
      // Handle join button click
      console.log('Join button clicked');
    };
  </script>
  
  <section class="py-20 bg-blue-50 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div 
        class="absolute inset-0" 
        style="background-image: url('/images/hexagon-pattern.svg'); background-size: 40px;"
      ></div>
    </div>
  
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
          Interested To Join Our Team?
        </h2>
        
        <p class="text-gray-600 text-lg mb-10 leading-relaxed">
          We value expertise, creativity, and ambition. Join our team and grow with a company committed to innovation and excellence.
        </p>
  
        <button
          on:click={handleJoinClick}
          class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Join Us
        </button>
      </div>
    </div>
  </section>
  
  <style>
    .text-navy-900 {
      color: #1a2b4b;
    }
  </style>