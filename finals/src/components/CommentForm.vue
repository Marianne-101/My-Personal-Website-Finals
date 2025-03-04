<template>
  <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
          <div>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="name" required />
          </div>
          <div>
              <label for="comment">Comment:</label>
              <textarea id="comment" v-model="comment" required></textarea>
          </div>
          <button type="submit">Submit</button>
          <div v-if="submissionStatus">
              {{ submissionStatus }}
          </div>
      </form>
  </div>
</template>

<script setup>
import { ref, inject, defineEmits } from 'vue';

const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const supabase = inject('$supabase');
const emit = defineEmits(['comment-added']); // Define emit

async function submitComment() {
  submissionStatus.value = 'Submitting...';
  try {
      const { error } = await supabase.from('comments').insert([{ name: name.value, comment: comment.value }]);
      if (error) {
          console.error('Error inserting comment:', error);
          submissionStatus.value = 'Error submitting comment. Please try again.';
      } else {
          submissionStatus.value = 'Comment submitted successfully!';
          name.value = '';
          comment.value = '';
          emit('comment-added'); // Emit event to refresh comments
      }
  } catch (err) {
      console.error('An unexpected error occurred:', err);
      submissionStatus.value = 'An unexpected error occurred. Please try again later.';
  }
}
</script>
