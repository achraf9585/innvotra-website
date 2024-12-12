<script>
  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Products', href: '/products' },
    { text: 'Services', href: '/services' },
    { text: 'Contact Us', href: '/contact' }
  ];
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
      <div class="hidden md:flex items-center space-x-16 mx-auto">
        {#each menuItems as item}
          <a
            href={item.href}
            class="text-white hover:text-blue-400 transition-colors font-sans  font-sans-600 leading-sans-24 text-[16px]"
          >
            {item.text}
          </a>
        {/each}
      </div>

      <!-- Arabic Button -->
      <div class="hidden md:flex">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-full font-sans hover:bg-blue-700 transition-colors">
          العربية
        </button>
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden absolute top-full left-0 right-0  bg-black bg-opacity- py-4 font-sans">
        {#each menuItems as item}
          <a
            href={item.href}
            class="block text-white hover:text-blue-400 px-6 py-2"
          >
            {item.text}
          </a>
        {/each}
        <button class="block w-full text-left text-white hover:text-blue-400 px-6 py-2 font-sans">
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
