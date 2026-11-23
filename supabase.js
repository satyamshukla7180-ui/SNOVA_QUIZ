// Supabase authentication is optional for local preview.
// Guest quiz mode works without configuring Supabase.
window.snovaAuth = {
  client: null,
  user: null,
  ready: false,
  async init() {
    const cfg = window.SNOVA_CONFIG || {};
    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey || !window.supabase) return;
    try {
      this.client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
      const { data } = await this.client.auth.getSession();
      this.user = data.session?.user || null;
      this.ready = true;
      this.client.auth.onAuthStateChange((_event, session) => {
        this.user = session?.user || null;
        window.dispatchEvent(new CustomEvent("snova-auth-change"));
      });
    } catch (error) {
      console.error("Supabase initialization failed:", error);
    }
  },
  async signUp(email, password, username) {
    if (!this.client) throw new Error("Supabase setup is missing. Guest mode is available.");
    const { data, error } = await this.client.auth.signUp({ email, password, options: { data: { username: username || email.split("@")[0] } } });
    if (error) throw error;
    this.user = data.user;
    return data;
  },
  async signIn(email, password) {
    if (!this.client) throw new Error("Supabase setup is missing. Guest mode is available.");
    const { data, error } = await this.client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.user = data.user;
    return data;
  },
  async signOut() {
    if (!this.client) { this.user = null; return; }
    const { error } = await this.client.auth.signOut();
    if (error) throw error;
    this.user = null;
  }
};
window.addEventListener("DOMContentLoaded", () => window.snovaAuth.init());
