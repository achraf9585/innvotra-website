<script>
  let email = '';

  function handleSubmit() {
      console.log('Subscribing email:', email);
      email = '';
  }
</script>

<section class="newsletter-section rounded-3xl mx-auto py-20 mb-20">
  <div class="absolute top-0 h-full w-full" 
      style="background-image: url('/images/newsletter.png'); 
             background-size: cover;
             background-repeat: no-repeat;  
             background-position: 25% 80%;">
  </div>

  <div class="bg-gray-900 absolute top-0 h-full w-full opacity-20"></div>
  
  <div class="newsletter-content flex flex-col items-center relative z-10 text-white px-6 md:px-12 space-y-8">
      <!-- Title and Description -->
      <div class="textWrap w-full text-center md:text-left">
          <h2 class="font-semibold text-3xl md:text-5xl">Subscribe to our newsletter</h2>
          <p class="text-lg md:text-xl font-thin py-2">Follow all our news and novelties</p>
      </div>

      <!-- Form -->
      <div class="paragraphWrapper w-full md:w-3/4">
          <form on:submit|preventDefault={handleSubmit} class="w-full">
              <div class="inputsWrapper bg-white rounded-md p-1 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
                  <input
                      type="email"
                      bind:value={email}  
                      placeholder="Enter your email"
                      required
                      class="w-full sm:w-3/4 p-3 rounded-md border border-gray-300 text-black"
                  />
                  <button 
                      type="submit" 
                      class="w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] font-semibold text-white hover:opacity-90 transition"
                  >
                      Submit
                  </button>
              </div>
          </form>
      </div>
  </div>
</section>

<style>
.newsletter-section {
  position: relative;
  overflow: hidden;
  width: 90%;
  max-width: 1200px;
  height: auto;
}

.newsletter-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  color: white;
}

@media (min-width: 768px) {
  .newsletter-content {
      text-align: left;
  }
}

input {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  background-color: #646cff;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #535bf2;
}
</style>
