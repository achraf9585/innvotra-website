<script>
  import Clients from './lib/components/clients.svelte';
import OurConsulting from './lib/components/consulting/OurConsulting.svelte';
  import Differentiators from './lib/components/differentiators/Differentiators.svelte';
  import Footer from './lib/components/Footer.svelte';
import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Innovate from './lib/components/innovate.svelte';
  import JoinTeam from './lib/components/JoinTeam.svelte';
  import Newsletter from './lib/components/Newsletter.svelte';
  import Partners from './lib/components/partners.svelte';
  import OurProducts from './lib/components/products/OurProducts.svelte';
  import WhoWeAre from './lib/components/WhoWeAre.svelte';
</script>

<main>
  <Header />
  <Hero />
  <WhoWeAre />
  <OurProducts />
  <OurConsulting />
  <Differentiators  />
  <JoinTeam />
  <Innovate />
  <Partners />
  <Clients />
  <Newsletter />
  <Footer />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>