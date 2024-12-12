<script>
    let email = '';
  
    function handleSubmit() {
      // Handle newsletter subscription logic here
      console.log('Subscribing email:', email);
      email = '';
    }
  </script>
  
  <section class="newsletter-section rounded-3xl mx-auto py-20 mb-20" >
    <div class="absolute top-0 h-full w-full " style="background-image: url('/images/newsletter.png'); background-size: cover;
background-repeat: no-repeat;  background-position: 25% 80%;;
"></div>

<div class="bg-gray-900 absolute top-0 h-full w-full  opacity-20"></div>
    
    <div class="newsletter-content flex flex-col md:flex-row items-center relative z-10 text-white px-6 md:px-12" >
      
      <div class="textWrap w-full md:w-1/2 text-left mb-8 md:mb-0">
          <h2 class="font-semibold text-3xl md:text-5xl ">Subscribe to our newsletter</h2>
          <p class="text-lg md:text-xl font-thin py-2">Follow all our news and novelties</p>

      </div>

      <div class="paragraphWrapper w-1/2">
          <form on:submit|preventDefault={handleSubmit}>
            <div class="inputsWrapper bg-white w-full md:w-3/4 rounded-md p-1 flex flex-col sm:flex-row justify-center items-center">
            
                <div class="inputsWrapper text-black bg-white w-3/4 rounded-md p-1 flex flex-row justify-center align-center">

                    <input
                    type="email"
                    bind:value={email}  
                    placeholder="Enter your email"
                    required
                    />
                    <button type="submit" class="bg-gradient-to-r from-[#2C5CC6] to-[#7C9ADD] font-semibold">Submit</button>
                </div>
            
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


.newsletter-section::before {

content: '';

position: absolute;

top: 0;

left: 0;

width: 100%;

height: 100%;

background: #031235B2;

opacity: 0.7;

z-index: 1;

}
  
  .newsletter-content {
    position: relative;
    z-index: 2; /* Ensure the content is above the overlay */
    color: white; /* Ensure text is readable over the overlay */
    text-align: center;
    padding: 40px 20px;
  }

  @media (min-width: 768px) {

.newsletter-content {

    text-align: left;

}

}
  
    /* h2 {
      font-size: 2rem;
      margin: 0;
      margin-bottom: 0.5rem;
    } */
  
    /* p {
      margin: 0;
      margin-bottom: 1.5rem;
      color: #ccc;
    } */
  
    .input-group {
      display: flex;
      gap: 1rem;
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