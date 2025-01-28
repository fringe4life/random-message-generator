<script lang="ts">
  import codingMessages from "./data";
  import type { Message } from "./data";
  import MessageCard from "./lib/MessageCard.svelte";

  // need to use state to handle random coding messages
  const randomCodingMessages = $state.raw(getRandomCodingMessages());

  $inspect(randomCodingMessages);

  
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

<main>
  {#each randomCodingMessages as {message, id} (id)} 
    <MessageCard message={message} />
    
  {/each}
</main>

