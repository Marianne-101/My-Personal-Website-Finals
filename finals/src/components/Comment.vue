<template>
  <div>
      <h3>Comments:</h3>
      <ul v-if="comments.length > 0">
          <li v-for="comment in comments" :key="comment.id">
              <strong>{{ comment.name }}</strong>: {{ comment.comment }}
          </li>
      </ul>
      <p v-else>No comments yet.</p>
      
      <!-- Comment Form Component -->
      <CommentForm @comment-added="getComments" />
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import CommentForm from './CommentForm.vue';

const comments = ref([]);
const supabase = inject('$supabase');

async function getComments() {
  try {
      const { data, error } = await supabase.from('comments').select().order('id', { ascending: false }); // Fetch latest first
      if (error) {
          console.error('Error fetching comments:', error);
          return;
      }
      comments.value = data || [];
  } catch (error) {
      console.error('An unexpected error occurred:', error);
  }
}

onMounted(getComments);
</script>
