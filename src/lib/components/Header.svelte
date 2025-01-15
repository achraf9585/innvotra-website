<script>
  import { locale , t} from "svelte-i18n";
  import { onMount } from "svelte";

  let isMenuOpen = false;
  let isLanguageDropdownOpen = false;

  const languages = [
    { code: 'en', text: 'English', flag: '/images/usa-flag.png' },
    { code: 'ar', text: 'العربية', flag: '/images/saudi-flag.png' },
  ];

  let currentLanguage = languages[0]; // Default to English

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  // Update currentLocale when $locale changes
  $: currentLocale = $locale;

    // Ensure currentLocale gets the correct value on component mount
    onMount(() => {
    currentLocale = $locale; // Fetch the current locale
  });

  const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen = !isLanguageDropdownOpen;
  };

  const menuItems = [
    { text: 'Home', textAr: 'الصفحة الرئيسية',  href: '/' },
    { text: 'About Us',textAr:'معلومات عنا', href: '#about' },
    { text: 'Products',textAr:'شركاؤنا و عملائنا', href: '#products' },
    { text: 'Services', textAr:'خدماتنا',href: '#services' },
    { text: 'Contact Us', textAr:'اتصل بنا',href: '#contactUs' },
  ];

  function switchLanguage(lang) {
    currentLanguage = languages.find(language => language.code === lang);
    locale.set(lang);
    isLanguageDropdownOpen = false; // Close dropdown after selection
  }
</script>

<header class="fixed w-full z-50 bg-transparent">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-start">
        <a href="/" class="text-white text-2xl font-bold">
          <img src="/images/logo.png" alt="Logo" class="w-auto h-12" />
        </a>
      </div>

      <!-- Centered Desktop Menu -->
      <div class="hidden md:flex items-center gap-10  mx-auto">
        {#each menuItems as item}
          <a
            href={item.href}
            class="text-white hover:text-blue-400 transition-colors font-sans font-sans-600 leading-sans-24 text-[16px]"
          >

          {currentLocale === 'ar' ? item.textAr : item.text}

          </a>
        {/each}
      </div>

      <!-- Language Switcher Dropdown -->
      <div class="hidden md:flex relative">
        <button
          class="bg-blue-600 text-white px-6 py-2 rounded-full font-sans hover:bg-blue-700 transition-colors flex items-center"
          on:click={toggleLanguageDropdown}
        >
          <img src={currentLanguage.flag} alt={currentLanguage.text} class="w-5 h-3 mr-2" />
          {currentLanguage.text}
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {#if isLanguageDropdownOpen}
          <div class="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md">
            {#each languages as language}
              <button
                class="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-200"
                on:click={() => switchLanguage(language.code)}
              >
                <img src={language.flag} alt={language.text} class="w-5 h-3 mr-2" />
                {language.text}
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white font-sans"
        on:click={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 py-4 font-sans">
        {#each menuItems as item}
          <a
            href={item.href}
            class="block text-white hover:text-blue-400 px-6 py-2"
          >
            {item.text}
          </a>
        {/each}
        <button
          class="block w-full text-left text-white hover:text-blue-400 px-6 py-2 font-sans"
          on:click={() => switchLanguage('ar')}
        >
          العربية
        </button>
      </div>
    {/if}
  </nav>
</header>

<style>
  header {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
