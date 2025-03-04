import './assets/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createClient } from '@supabase/supabase-js'

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or ANON KEY is missing. Check your environment variables.');
}

const supabaseUrl = 'https://jezhjxodrkujwzixokmz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplemhqeG9kcmt1and6aXhva216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDczODksImV4cCI6MjA1NjU4MzM4OX0.5EgaMoO3XsfWWj3v-018sy0ZY4qaEVI-oDhIFMfG0Pc';

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase credentials are missing! Check your .env file.");
  }

const supabase = createClient(supabaseUrl, supabaseKey);

const app = createApp(App);

app.provide('$supabase', supabase); // Inject Supabase globally
app.mount('#app');