<template>
      <div v-if="showForm">
          <comment-form />
          <comment />
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Comment from './components/Comment.vue';
  import CommentForm from './components/CommentForm.vue';
  
  const showForm = ref(false);
  
  function toggleContent() {
      showForm.value = !showForm.value;
  }
  
  defineExpose({
      toggleContent
  });
  </script>