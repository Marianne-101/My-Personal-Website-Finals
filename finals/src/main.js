import { createApp } from 'vue'
import App from './App.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import { createClient } from '@supabase/supabase-js';

const app = createApp(App)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')