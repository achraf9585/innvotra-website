<!-- Modal.svelte -->
<script>
  export let isOpen = false;
  export let onClose = () => {};

  function loadForm() {
    // Check if the script is already added to the DOM
    if (!document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
      // Create the script element
      const script = document.createElement("script");
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.src = "//js.hsforms.net/forms/embed/v2.js";

      // Append the script to the document
      document.body.appendChild(script);

      // Once the script is loaded, initialize the form
      script.onload = () => {
        //@ts-ignore
        if (window.hbspt) {
          //@ts-ignore
          window.hbspt.forms.create({
            portalId: "48736590",
            formId: "6ff042f7-8ed9-4fc8-b3e5-8fe7fe21b0d5",
            target: "#contact-form-container"
          });
        }
      };
    } else {
      // If the script is already loaded, reinitialize the form
      //@ts-ignore
      if (window.hbspt) {
        //@ts-ignore
        window.hbspt.forms.create({
          portalId: "48736590",
          formId: "6ff042f7-8ed9-4fc8-b3e5-8fe7fe21b0d5",
          target: "#contact-form-container"
        });
      }
    }
  }
</script>

<div
  class="modal-overlay "
  class:isOpen={isOpen}
  on:click="{onClose}"
  style="display: {isOpen ? 'block' : 'none'}"
>
  <div class="modal-content p-16" on:click|stopPropagation>
    <slot />
    <button class="close-button" on:click="{onClose}">Close</button>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
   
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .close-button {
    margin-top: 1rem;
    background: #f44336;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
