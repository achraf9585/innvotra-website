<script>
  import { locale, t } from "svelte-i18n";
  import { onMount } from "svelte";

  export let isExpanded = false;
  export let onExpand = () => {};

  export let title = '';
  export let titleAr = '';
  export let description = '';
  export let descriptionAr = '';
  export let icon = '';

  let currentLocale = 'en';

  $: currentLocale = $locale;

  onMount(() => {
    currentLocale = $locale;
  });
</script>

<style>
  .product-card {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

<div class="product-card bg-gray-50 bg-opacity-30 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-auto ">
  <div class="mb-6">
    <img src={icon || "/placeholder.svg"} alt={title} class="w-12 h-12" />
  </div>
  <h3 class="text-xl font-bold text-navy-900 mb-4">
    {currentLocale === 'ar' ? titleAr : title}
  </h3>
  <p class="text-gray-600 text-lg mb-6 leading-relaxed">
    {#if isExpanded}
      {currentLocale === 'ar' ? descriptionAr : description}
    {:else}
      {currentLocale === 'ar' ? descriptionAr.slice(0, 100) : description.slice(0, 100)}...
    {/if}
  </p>
  <button on:click={onExpand} class="text-blue-600 justify-center bg-blue-50 border border-blue-600 px-6 py-2 rounded-full w-full font-semibold flex items-center hover:text-blue-700 transition-colors">
    {#if isExpanded}
      {$t('read_less_btn')}
    {:else}
      {$t('read_more_btn')}    
    {/if}
    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>
