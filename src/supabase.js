
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zzxpdcjgywujblzfvepx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eHBkY2pneXd1amJsemZ2ZXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0Mjk1MDYsImV4cCI6MTk5MDAwNTUwNn0.U--yMAAkYK6ybu5U_ZXBHb6aU1r2BOBtRgSBmW5ZgTU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;