import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://denvfgjdhjvynbmtpgmg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbnZmZ2pkaGp2eW5ibXRwZ21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMzUxMjIsImV4cCI6MjA3MDkxMTEyMn0.h_-ZcLYbRFRafmSaQMX_gsRAttBYvTy6Lxp6uVwIWYA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
