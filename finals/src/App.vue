<script setup>
import { ref } from 'vue';
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'
import { supabase } from './lib/supabaseClient'


const showForm = ref();

function toggleContent() {
  showForm.value = !showForm.value;
}
</script>

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