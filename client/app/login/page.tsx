"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>
        Continue with Google
      </button>
    </div>
  );
}