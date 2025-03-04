<template>
  <section>
    <div id="appContainer" class="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
      <button @click="toggleContent">Get to know me</button>
      <div v-if="showForm" id="app">

        <comment />
        <comment-form />

      </div>
    </div>
  </section>
</template>

<script setup>
import Footer from './components/Comment.vue'; 
import Footer from './components/CommentForm.vue'; 
import { ref, onMounted } from 'vue';
import { supabaseClient } from 'lib/supabaseClient';
const name = ref('');
const comment = ref('');
const comments = ref([]);

// Fetch existing comments when the component loads
onMounted(async () => {
  const { data, error } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
  if (error) console.error('Error fetching comments:', error);
  else comments.value = data;
});

// Handle form submission
const submitComment = async () => {
  if (!name.value || !comment.value) return;

  const { data, error } = await supabase
    .from('comments')
    .insert([{ name: name.value, comment: comment.value }]);

  if (error) {
    console.error('Error saving comment:', error);
  } else {
    console.log('Comment saved:', data);
    comments.value.unshift(data[0]); // Update the UI immediately
    name.value = '';
    comment.value = '';
  }
};
</script>