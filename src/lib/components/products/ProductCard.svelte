<script>
    export let title = '';
    export let description = '';
    export let icon = '';
    let showFullDescription = false;

function toggleDescription() {
  showFullDescription = !showFullDescription;
}
  </script>
<style>
  .product-card {
    min-height: 300px; /* Set a minimum height instead of a fixed height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>


<div class="product-card bg-gray-50 bg-opacity-30 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
  <div class="mb-6">
    <img src={icon} alt={title} class="w-12 h-12" />
  </div>
  <h3 class="text-2xl font-bold text-navy-900 mb-4">{title}</h3>
  <p class="text-gray-600 mb-6 leading-relaxed">
    {#if showFullDescription}
      {description}
    {:else}
      {description.slice(0, 100)}... <!-- Show a preview of the description -->
    {/if}
  </p>
  <button on:click={toggleDescription} class="text-blue-600 justify-center bg-blue-50 border border-blue-600 px-6 py-2 rounded-full w-full font-semibold flex items-center hover:text-blue-700 transition-colors">
    {#if showFullDescription}
      Show Less
    {:else}
      Read More
    {/if}
    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>