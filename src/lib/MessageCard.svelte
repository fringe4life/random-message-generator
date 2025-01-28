<script lang="ts">
  type Props = {
    message: string;
  };
  // will get prop which is string from parent prop
  const { message }: Props = $props();
</script>

<style>
  /* styles go here */
 .message-card {

  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
}
</style>


<div class="message-card">
  <p>{message}</p>
</div>