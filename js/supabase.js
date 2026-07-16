// Préparation de l'intégration Supabase pour BKYSHOP.
// Remplacez les valeurs ci-dessous par celles de votre projet Supabase.
const SUPABASE_CONFIG = {
  url: 'https://votre-url.supabase.co',
  key: 'votre-cle-anonyme',
};

const SUPABASE = window.supabase ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key) : null;

async function fetchProducts() {
  if (!SUPABASE) {
    console.warn('Supabase non initialisé. Vérifiez la configuration.');
    return [];
  }

  const { data, error } = await SUPABASE.from('products').select('*');
  if (error) throw error;
  return data;
}

async function saveOrder(orderPayload) {
  if (!SUPABASE) throw new Error('Supabase non configuré.');
  const { error } = await SUPABASE.from('orders').insert([orderPayload]);
  if (error) throw error;
  return true;
}

async function saveMessage(messagePayload) {
  if (!SUPABASE) throw new Error('Supabase non configuré.');
  const { error } = await SUPABASE.from('messages').insert([messagePayload]);
  if (error) throw error;
  return true;
}

async function saveCustomer(customerPayload) {
  if (!SUPABASE) throw new Error('Supabase non configuré.');
  const { error } = await SUPABASE.from('customers').insert([customerPayload]);
  if (error) throw error;
  return true;
}

window.BKYSHOP_SUPABASE = {
  fetchProducts,
  saveOrder,
  saveMessage,
  saveCustomer,
};
