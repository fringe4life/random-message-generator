<script lang="ts">
  import JavascriptIcon from "./JavascriptIcon.svelte";
  type Props = {
    message: string;
  };
  // will get prop which is string from parent prop
  const { message }: Props = $props();
</script>

<style>
 .message-card {
  /* layout */
  padding: 1rem;
  margin: 1rem;
  grid-column: span 1;

  /* positioning */
  position: relative;

  /* styling */
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  /* typography */
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
}
</style>


<div class="message-card">
  <JavascriptIcon />
  <p>{message}</p>
</div>