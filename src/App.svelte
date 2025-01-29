<script lang="ts">
  import {startOfMessage, endOfMessage} from "./data";
  import type { Message } from "./data";
  import MessageCard from "./lib/MessageCard.svelte";

  // need to use state to handle random coding messages
  const randomCodingMessages = $state.raw(getRandomCodingMessages());

  $inspect(randomCodingMessages);

  // need to pass each specific coding message to the card component
  function getRandomIndexes(firstArray: Message[], secondArray: Message[]): number[] {
    const randomIndex1 = Math.floor(Math.random() * firstArray.length);
    const randomIndex2 = Math.floor(Math.random() * secondArray.length);
    return [randomIndex1, randomIndex2];
  }

  function createNewMessage(...indexes: number[]): Message {
    return {
					message: `${startOfMessage[indexes[0]].message} ${endOfMessage[indexes[1]].message}`,
					id:	startOfMessage[indexes[0]].id
				} satisfies Message;
  }

  function addIndexesUsed(indexes: number[], indexesAlreadyIncluded: Set<number>): void {
    for (const i of indexes) {
      indexesAlreadyIncluded.add(i);
    }
  }

  /**
   * @abstract Get random coding messages
   * @returns {string[]} Random coding messages
   */
  function getRandomCodingMessages(): Message[] {
    const length = Math.trunc((startOfMessage.length  ) / 2);
    const randomMessages = [];
    const indexesAlreadyIncluded = new Set<number>();
    for (let i = 0; i < length; i++) {
      const randomIndexes = getRandomIndexes(startOfMessage, endOfMessage);
      if(indexesAlreadyIncluded.has(randomIndexes[0]) || indexesAlreadyIncluded.has(randomIndexes[1])) {
        i--;
        continue;
      }
      
      randomMessages.push(createNewMessage(...randomIndexes));
      addIndexesUsed(randomIndexes, indexesAlreadyIncluded);
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

