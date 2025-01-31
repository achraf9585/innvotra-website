<script>
  export let title = "Default Title"; // Ensure title is passed as a prop
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="modal-overlay" on:click={() => dispatch('close')}>
  <div class="modal" on:click|stopPropagation>
    <h2>{title}</h2> <!-- Ensure title is rendered -->
    <slot /> <!-- Modal content will go here -->
    <button on:click={() => dispatch('close')}>Close</button>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
  }
  
  .join-button {
    padding: 10px 15px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
