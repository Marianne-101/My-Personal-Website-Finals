import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jezhjxodrkujwzixokmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplemhqeG9kcmt1and6aXhva216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDczODksImV4cCI6MjA1NjU4MzM4OX0.5EgaMoO3XsfWWj3v-018sy0ZY4qaEVI-oDhIFMfG0Pc'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;