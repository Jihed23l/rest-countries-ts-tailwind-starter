import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://erfmbipfxbmihhpyylip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZm1iaXBmeGJtaWhocHl5bGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjYxMDEsImV4cCI6MjAyNTY0MjEwMX0.hbA5B52uPhqUdCd02b4mRxWORiRp9CNuBuN8wy5Ggjo')

export default supabase

