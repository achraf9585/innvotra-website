<script>
      import { locale  } from "svelte-i18n";
      import { onMount } from "svelte";
  export let title = '';
  export let titleAr = '';
  export let descriptionAr = '';
  export let description = '';
  export let icon = '';
  export let values = [];

  $: currentLocale = $locale;

  onMount(() => {
    currentLocale = $locale; // Fetch the current locale
  });
</script>

<div class="relative border-[0.5px] border-white/15  backdrop-filter backdrop-brightness-200  backdrop-blur-3xl rounded-xl p-8 text-white ">
  <!-- Icon container positioned above the card -->
  <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
    <img src={icon} class="" alt={title} />
  </div>

  <!-- Card content -->
  <div class="flex flex-col items-center mt-6">
    <h3 class="text-2xl font-bold text-center mb-4">{title}</h3>
    {#if description}
      <p class="text-gray-300 leading-relaxed text-center mb-4">
        {currentLocale === 'ar' ? descriptionAr : description}

      </p>
    {/if}
    {#if values.length > 0}
      <div class="space-y-4">
        {#each values as value}
          <div>
            <span class="font-semibold">{currentLocale === 'ar' ? value.titleAr : value.title}:</span>
            <span class="text-gray-300">      {currentLocale === 'ar' ? value.descriptionAr : value.description}
            </span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .bg-navy-900 {
    background-color: #1a2b4b;
  }
</style>
