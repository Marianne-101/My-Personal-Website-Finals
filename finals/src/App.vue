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
</script>