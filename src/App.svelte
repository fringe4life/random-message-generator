<script lang="ts">
  import codingMessages from "./data";
  import type { Message } from "./data";
  import MessageCard from "./lib/MessageCard.svelte";

  // need to use state to handle random coding messages
  const randomCodingMessages = $state.raw(getRandomCodingMessages());


  
  // need to pass each specific coding message to the card component

  /**
   * @abstract Get random coding messages
   * @returns {string[]} Random coding messages
   */
  function getRandomCodingMessages(): Message[] {
    const length = Math.trunc(codingMessages.length / 2);
    const randomMessages = [];
    const indexesAlreadyIncluded = new Set();
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * codingMessages.length);
      if(indexesAlreadyIncluded.has(randomIndex)) {
        i--;
        continue;
      }
      randomMessages.push(codingMessages[randomIndex]);
      indexesAlreadyIncluded.add(randomIndex);
    }
    return randomMessages;
  }
</script>

<style>
  /* a grid that automatically generates new columns when possible */
  .autofit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 1rem;
  }
</style>

<main class="autofit-grid">
  {#each randomCodingMessages as {message, id} (id)} 
    <MessageCard message={message} />
    
  {/each}
</main>

