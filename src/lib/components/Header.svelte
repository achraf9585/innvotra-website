<script>
  import { locale, t } from "svelte-i18n";
  import { onMount } from "svelte";

  let isMenuOpen = false;
  let isLanguageDropdownOpen = false;

  const languages = [
    { code: "en", text: "English", flag: "/images/usa-flag.png" },
    { code: "ar", text: "العربية", flag: "/images/saudi-flag.png" },
  ];

  let currentLanguage = languages[0]; // Default to English

  let isScrolled = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  $: currentLocale = $locale;

  onMount(() => {
    currentLocale = $locale; // Fetch the current locale

    const handleScroll = () => {
      const threshold = 50; // Adjust this as needed
      isScrolled = window.scrollY > threshold;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen = !isLanguageDropdownOpen;
  };

  function switchLanguage(lang) {
    currentLanguage = languages.find((language) => language.code === lang);
    locale.set(lang);
    isLanguageDropdownOpen = false;
    isMenuOpen = false;
  }

  const menuItems = [
    { text: "Home", textAr: "الصفحة الرئيسية", href: "/" },
    { text: "About Us", textAr: "معلومات عنا", href: "#about" },
    { text: "Products", textAr: "شركاؤنا و عملائنا", href: "#products" },
    { text: "Services", textAr: "خدماتنا", href: "#services" },
    { text: "Contact Us", textAr: "اتصل بنا", href: "#contactUs" },
  ];
</script>


<header class="fixed w-full z-50 bg-transparent {isScrolled ? 'is-scrolled' : ''}">

  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-start">
        <a href="/" class="text-white text-2xl font-bold">
          <img src="/images/logo.png" alt="Logo" class="w-auto max-h-12 " />
        </a>
      </div>

      <!-- Centered Desktop Menu -->
      <div class="hidden md:flex items-center   mx-auto">
        {#each menuItems as item}
        <a
        href={item.href}
        on:click={() => isMenuOpen = false}  
        class="block text-white hover:text-blue-400 px-6 py-2 whitespace-nowrap "
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
        <span class="hidden lg:inline">  {currentLanguage.text}</span> 
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
  <div class="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-70 py-4 font-sans">
    {#each menuItems as item}
      <a
        href={item.href}
        on:click={() => isMenuOpen = false}  
        class="block text-white hover:text-blue-400 px-6 py-2"
      >
        {currentLocale === 'ar' ? item.textAr : item.text}
      </a>
    {/each}

    <!-- Language Dropdown for Mobile -->
    <div class="relative px-6 py-2">
      <button
        class="block w-full bg-blue-600 text-white px-6 py-2 rounded-full font-sans hover:bg-blue-700 transition-colors flex items-center justify-between"
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
        <div class="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-full">
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
  </div>
{/if}


  </nav>
</header>

<style>
  header {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
  }

  header.is-scrolled {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }

  header.is-scrolled a {
    color: black;
  }

  header.is-scrolled a:hover {
    color: blue; /* Hover color for white background */
  }

  a {
    color: white;
    transition: color 0.3s;
  }

  a:hover {
    color: blue; /* Hover color for dark background */
  }
</style>

