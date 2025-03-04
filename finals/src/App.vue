import { ref, onMounted } from 'vue'
import { supabase } from ',/lib/supabaseClient'

count comments = ref([])

async function getComments() {
    const { data } = await supabase.from('comments').select()
    comments.value = data
}

onMounted(() => {
    getComments()
})

<template>
    <ul>
      <li v-for="comments in comment" :key="comment.id">{{ comment.name }}</li>
    </ul>

    <comment-form/>
    <comment/>
     
  
  </template>
  

  <script></script>