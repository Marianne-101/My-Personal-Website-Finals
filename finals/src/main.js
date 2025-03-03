import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'


createApp(App).mount('#app')

app.component('comment-form', CommentForm)
app.component('comment', Comment)

app.mount('#app')