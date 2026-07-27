const STORAGE_KEY = 'bkyshop_orders';
const WHATSAPP_NUMBER = '2250544950997';
const EMAIL_TO = 'fahikatbakary@gmail.com';

// ============================================================
// 🏪 BASE DE DONNÉES PRODUITS
// ============================================================
const PRODUCTS = {
  // ---- VALISES ----
  'complet-valise-gomme': {
    id: 'complet-valise-gomme',
    name: 'Complet de valise en gomme',
    price: '44 000 FCFA',
    description: 'Un ensemble complet de valises en gomme de haute qualité. Idéal pour les voyages prolongés avec un style élégant et professionnel.',
    mainImage: '../image/complet de valise.png',
    features: ['Lot de 3 valises', 'Disponibilité : En stock'],
    category: 'Valises'
  },
  'valise-cabine-noire-10kg': {
    id: 'valise-cabine-noire-10kg',
    name: 'Valise cabine noire 10kg',
    price: '15 000 FCFA',
    description: 'Valise cabine compacte et légère, parfaite pour les voyages courts. Format cabine accepté en avion, design noir élégant.',
    mainImage: '../image/VALISE.webp',
    features: ['Couleur disponible : Noir', 'Disponibilité : En stock'],
    category: 'Valises'
  },
  'valise-premium-30kg': {
    id: 'valise-premium-30kg',
    name: 'Valise premium rigide 30kg',
    price: '28 000 FCFA',
    description: 'Valise grand format avec coque rigide ultra-résistante. Capacité maximale pour les longs séjours et les voyages en famille.',
    mainImage: '../image/valise verte.png',
    features: ['Couleur disponible : Vert foncé', 'Disponibilité : Stock faible'],
    category: 'Valises'
  },

  'valise-beige-15kg': {
    id: 'valise-beige-15kg',
    name: 'Valise en coque Beige 15kg',
    price: '18 000 FCFA',
    description: 'Valise légère et rigide, parfaite pour vos déplacements professionnels ou personnels. Dimensions compactes, excellente résistance et finition premium.',
    mainImage: '../image/valise beige.jpeg',
    gallery: ['../image/valise beige.jpeg', '../image/VALISE.webp', '../image/valise rose.jpeg', '../image/valise verte.png'],
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Valises'
  },
  'valise-rose-15kg': {
    id: 'valise-rose-15kg',
    name: 'Valise en coque rose 15kg',
    price: '18 000 FCFA',
    description: 'Modèle compact, confortable et élégant pour les courts séjours. Finition soignée et légèreté optimale.',
    mainImage: '../image/valise rose.jpeg',
    gallery: ['../image/valise rose.jpeg', '../image/VALISE.webp', '../image/valise beige.jpeg', '../image/valise verte.png'],
    features: ['Couleur disponible : Rose', 'Disponibilité : En stock'],
    category: 'Valises'
  },
  'valise-verte-23kg': {
    id: 'valise-verte-23kg',
    name: 'Valise en coque verte 23kg',
    price: '21 000 FCFA',
    description: 'Une finition premium avec une grande capacité de rangement. Idéale pour les longs séjours et les voyages en famille.',
    mainImage: '../image/valise verte.png',
    gallery: ['../image/valise verte.png', '../image/VALISE.webp', '../image/valise beige.jpeg', '../image/valise rose.jpeg'],
    features: ['Couleur disponible : Verte', 'Disponibilité : Stock faible'],
    category: 'Valises'
  },

  // ---- SACS DE VOYAGE ----
  'sac-sport-beige': {
    id: 'sac-sport-beige',
    name: 'Sac de sport beige',
    price: '8 000 FCFA',
    description: 'Sac de sport pratique et léger, idéal pour le sport ou les escapades du week-end. Compartiment principal spacieux.',
    mainImage: '../image/sasc moyen .jpeg',
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Sacs de voyage'
  },
  'sac-dos-voyage-noir': {
    id: 'sac-dos-voyage-noir',
    name: 'Sac à dos de voyage noir',
    price: '14 000 FCFA',
    description: 'Sac à dos grand format conçu pour les voyages. Multiple compartiments, finitions solides et design moderne en tissu noir.',
    mainImage: '../image/gros sacs.jpeg',
    features: ['Couleur disponible : Noir', 'Disponibilité : En stock'],
    category: 'Sacs de voyage'
  },
  'sac-week-end-bleu': {
    id: 'sac-week-end-bleu',
    name: 'Sac week-end bleu',
    price: '11 000 FCFA',
    description: 'Sac week-end élégant en tissu bleu, parfait pour les courts séjours. Léger, pratique et très résistant.',
    mainImage: '../image/sac bleu.jpeg',
    features: ['Couleur disponible : Bleu', 'Disponibilité : Stock faible'],
    category: 'Sacs de voyage'
  },

  'sac-moyen-format': {
    id: 'sac-moyen-format',
    name: 'Sac Voyage moyen format',
    price: '9 000 FCFA',
    description: 'Sac résistant avec plusieurs compartiments pour un rangement impeccable de vos affaires personnelles.',
    mainImage: '../image/sacs moyen.jpeg',
    gallery: ['../image/sacs moyen.jpeg', '../image/gros sacs.jpeg', '../image/sac bleu.jpeg', '../image/SACS DE VOYAGE.webp'],
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Sacs de voyage'
  },
  'sac-noir-tissu': {
    id: 'sac-noir-tissu',
    name: 'Grand Sac Voyage Noir en tissu',
    price: '12 000 FCFA',
    description: 'Conçu pour voyager léger avec un look premium et des finitions soignées. Très grand format pour maximiser le rangement.',
    mainImage: '../image/gros sacs.jpeg',
    gallery: ['../image/gros sacs.jpeg', '../image/sacs moyen.jpeg', '../image/sac bleu.jpeg', '../image/SACS DE VOYAGE.webp'],
    features: ['Couleur disponible : Noir', 'Disponibilité : En stock'],
    category: 'Sacs de voyage'
  },
  'sac-bleu-tissu': {
    id: 'sac-bleu-tissu',
    name: 'Sac Voyage Bleu format moyen en tissu',
    price: '10 000 FCFA',
    description: 'Un sac résistant et élégant pour des escapades dynamiques et stylées. Format moyen idéal pour le quotidien.',
    mainImage: '../image/sac bleu.jpeg',
    gallery: ['../image/sac bleu.jpeg', '../image/sacs moyen.jpeg', '../image/gros sacs.jpeg', '../image/SACS DE VOYAGE.webp'],
    features: ['Couleur disponible : Bleu', 'Disponibilité : Stock faible'],
    category: 'Sacs de voyage'
  },

  // ---- SÉCHOIRS ----
  'sechoir-inox': {
    id: 'sechoir-inox',
    name: 'Séchoir en inox',
    price: '22 000 FCFA',
    description: 'Séchoir haut de gamme en inox brossé. Résistant à la rouille, design moderne et grande capacité de séchage.',
    mainImage: '../image/sechoir .webp',
    features: ['Couleur disponible : Argenté', 'Disponibilité : En stock'],
    category: 'Séchoirs'
  },
  'sechoir-pliant-compact': {
    id: 'sechoir-pliant-compact',
    name: 'Séchoir pliant compact',
    price: '14 500 FCFA',
    description: 'Séchoir pliant facile à ranger et à transporter. Idéal pour les petits espaces et les voyages.',
    mainImage: '../image/SECHOIR.webp',
    features: ['Couleur disponible : Blanc', 'Disponibilité : En stock'],
    category: 'Séchoirs'
  },
  'sechoir-mural': {
    id: 'sechoir-mural',
    name: 'Séchoir mural',
    price: '25 000 FCFA',
    description: 'Séchoir mural fixe, gain de place et très pratique pour les salles de bain. Design moderne et résistant.',
    mainImage: '../image/sechoirs.webp',
    features: ['Couleur disponible : Gris', 'Disponibilité : Stock faible'],
    category: 'Séchoirs'
  },

  'sechoir-fer': {
    id: 'sechoir-fer',
    name: 'Séchoir en fer',
    price: '12 500 FCFA',
    description: 'Séchoir robuste, facile à installer et à utiliser. Parfait pour un séchage rapide et sécurisé de vos vêtements.',
    mainImage: '../image/sechoir .webp',
    gallery: ['../image/sechoir .webp', '../image/sechoir plastique.webp', '../image/sechoirs.webp', '../image/SECHOIR.webp'],
    features: ['Couleur disponible : Noir', 'Disponibilité : En stock'],
    category: 'Séchoirs'
  },
  'sechoir-plastique': {
    id: 'sechoir-plastique',
    name: 'Séchoir en plastique',
    price: '19 000 FCFA',
    description: 'Une finition élégante et une performance de séchage fiable. Design moderne pour une meilleure optimisation de l’espace.',
    mainImage: '../image/sechoir plastique.webp',
    gallery: ['../image/sechoir plastique.webp', '../image/sechoir .webp', '../image/sechoirs.webp', '../image/SECHOIR.webp'],
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Séchoirs'
  },
  'sechoir-arretable': {
    id: 'sechoir-arretable',
    name: 'Séchoir arrêtable',
    price: '18 000 FCFA',
    description: 'Un design moderne pour une meilleure optimisation de l’espace. Facile à ranger et pratique au quotidien.',
    mainImage: '../image/sechoirs.webp',
    gallery: ['../image/sechoirs.webp', '../image/sechoir .webp', '../image/sechoir plastique.webp', '../image/SECHOIR.webp'],
    features: ['Couleur disponible : Rouge', 'Disponibilité : Stock faible'],
    category: 'Séchoirs'
  },

  // ---- VENTILATEURS ----
  'ventilateur-crown-blanc': {
    id: 'ventilateur-crown-blanc',
    name: 'Ventilateur CROWN Blanc',
    price: '12 000 FCFA',
    description: 'Ventilateur de table CROWN blanc, silencieux et élégant. Parfait pour un usage quotidien au bureau ou à la maison.',
    mainImage: '../image/ventilateur.webp',
    features: ['Couleur disponible : Blanc', 'Disponibilité : En stock'],
    category: 'Ventilateurs CROWN'
  },
  'ventilateur-crown-table': {
    id: 'ventilateur-crown-table',
    name: 'Ventilateur CROWN Sur Table',
    price: '7 500 FCFA',
    description: 'Petit ventilateur de table compact et économique. Idéal pour rafraîchir votre espace de travail sans faire de bruit.',
    mainImage: '../image/ventilo.jpg',
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Ventilateurs CROWN'
  },
  'ventilateur-plafonnier-luxe': {
    id: 'ventilateur-plafonnier-luxe',
    name: 'Ventilateur Plafonnier Luxe',
    price: '22 000 FCFA',
    description: 'Ventilateur plafonnier haut de gamme avec design luxueux. Silencieux, puissant et idéal pour les grands espaces.',
    mainImage: '../image/ventio pla.webp',
    features: ['Couleur disponible : Rouge', 'Disponibilité : Stock faible'],
    category: 'Ventilateurs CROWN'
  },

  'ventilateur-crown-noir': {
    id: 'ventilateur-crown-noir',
    name: 'Ventilateur CROWN Noir',
    price: '16 000 FCFA',
    description: 'Silencieux, puissant et idéal pour rafraîchir une pièce rapidement. Design élégant pour tout type d’intérieur.',
    mainImage: '../image/ventilateur.webp',
    gallery: ['../image/ventilateur.webp', '../image/ventilo.jpg', '../image/ventio pla.webp', '../image/ventilateur.webp'],
    features: ['Couleur disponible : Noir', 'Disponibilité : En stock'],
    category: 'Ventilateurs CROWN'
  },
  'ventilateur-kirikou': {
    id: 'ventilateur-kirikou',
    name: 'Ventilateur CROWN Kirikou',
    price: '8 500 FCFA',
    description: 'Un design moderne pour un confort visuel et thermique optimal. Léger et efficace pour une utilisation quotidienne.',
    mainImage: '../image/ventilo.jpg',
    gallery: ['../image/ventilo.jpg', '../image/ventilateur.webp', '../image/ventio pla.webp', '../image/ventilo.jpg'],
    features: ['Couleur disponible : Beige', 'Disponibilité : En stock'],
    category: 'Ventilateurs CROWN'
  },
  'ventilateur-plafonnier-metro': {
    id: 'ventilateur-plafonnier-metro',
    name: 'Ventilateur Plafonnier Metro',
    price: '17 000 FCFA',
    description: 'Puissance et performance, avec un rendu visuel distinctif. Design plafonnier pour un confort durable.',
    mainImage: '../image/ventio pla.webp',
    gallery: ['../image/ventio pla.webp', '../image/ventilateur.webp', '../image/ventilo.jpg', '../image/ventio pla.webp'],
    features: ['Couleur disponible : Rouge', 'Disponibilité : Stock faible'],
    category: 'Ventilateurs CROWN'
  }
};

// ============================================================
// 🔄 CHARGEMENT DYNAMIQUE DE LA FICHE PRODUIT
// ============================================================
function initProductPage() {
  const productContainer = document.querySelector('[data-product-container]');
  if (!productContainer) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = PRODUCTS[productId];

  if (!product) {
    productContainer.innerHTML = `
      <div class="text-center py-5">
        <h3>Produit non trouvé</h3>
        <p>Le produit que vous recherchez n\'existe pas ou a été retiré.</p>
        <a href="valises.html" class="btn btn-primary-custom">Voir nos produits</a>
      </div>
    `;
    return;
  }

  // Mise à jour du titre de la page
  document.title = `${product.name} - BKYSHOP`;

  // Image principale
  const galleryMain = productContainer.querySelector('[data-gallery-main]');
  if (galleryMain) {
    galleryMain.src = product.mainImage;
    galleryMain.alt = product.name;
  }

  // Nom du produit
  const nameEl = productContainer.querySelector('[data-product-name]');
  if (nameEl) nameEl.textContent = product.name;

  // Prix
  const priceEl = productContainer.querySelector('[data-product-price]');
  if (priceEl) priceEl.textContent = product.price;

  // Description
  const descEl = productContainer.querySelector('[data-product-desc]');
  if (descEl) descEl.textContent = product.description;

  // Caractéristiques
  const featuresEl = productContainer.querySelector('[data-product-features]');
  if (featuresEl) {
    featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
  }

  // Nom du produit dans le formulaire de commande (readonly)
  // Le modal est en dehors du data-product-container, on cherche dans tout le document
  const orderProductInput = document.querySelector('[data-order-product]');
  if (orderProductInput) orderProductInput.value = product.name;

}


// ============================================================
// 🛒 BOUTONS COMMANDER SUR LES PAGES CATÉGORIES
// ============================================================
function initCategoryOrderButtons() {
  // Ne pas exécuter sur la page produit (le modal existe déjà)
  if (document.querySelector('[data-product-container]')) return;

  const btns = document.querySelectorAll('[data-product-id]');
  if (!btns.length) return;

  // Injecter le modal une seule fois
  let modal = document.getElementById('orderModal');
  if (!modal) {
    const modalHTML = `
      <div class="modal fade" id="orderModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Formulaire de commande</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form data-validate-form>
                <div class="row g-3">
                  <div class="col-md-6"><input class="form-control" type="text" name="nom" placeholder="Nom" required /></div>
                  <div class="col-md-6"><input class="form-control" type="tel" name="telephone" placeholder="Téléphone" required /></div>
                  <div class="col-md-6"><input class="form-control" type="text" name="ville" placeholder="Ville" required /></div>
                  <div class="col-md-6"><input class="form-control" type="text" name="commune" placeholder="Commune" required /></div>
                  <div class="col-12"><input class="form-control" type="text" name="adresse" placeholder="Adresse" required /></div>
                  <div class="col-md-6"><input class="form-control" type="text" name="produit" data-order-product value="" readonly /></div>
                  <div class="col-md-6"><input class="form-control" type="number" name="quantite" value="1" min="1" required /></div>
                  <div class="col-12"><textarea class="form-control" name="commentaire" rows="4" placeholder="Commentaire"></textarea></div>
                  <div class="col-12"><button class="btn btn-primary-custom" type="submit">Valider la commande</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modal = document.getElementById('orderModal');
  }

  // Créer une instance Bootstrap Modal
  let bsModal = null;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      const product = PRODUCTS[productId];

      if (!product) {
        window.dispatchEvent(new CustomEvent('bkyshop:toast', {
          detail: { message: 'Produit introuvable.', type: 'warning' }
        }));
        return;
      }

      // Mettre à jour le nom du produit dans le formulaire
      const orderInput = modal.querySelector('[data-order-product]');
      if (orderInput) orderInput.value = product.name;

      // Ouvrir le modal
      if (!bsModal) {
        bsModal = new bootstrap.Modal(modal);
      }
      bsModal.show();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const inits = [
    initScrollEffects,
    initCounters,
    initSearch,
    initFilters,
    initCategoryOrderButtons,
    initQuantityButtons,
    initForms,
    initBackToTop,
    initActiveNav,
    initProductPage,
  ];

  inits.forEach((fn) => {
    try {
      fn();
    } catch (error) {
      console.warn(`Erreur dans ${fn.name}:`, error);
    }
  });
});

window.BKYSHOP_STORAGE = {
  get STORAGE_KEY() { return STORAGE_KEY; },
  getSavedOrders,
};

function getSavedOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const orders = raw ? JSON.parse(raw) : [];
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    console.error('Impossible de lire les commandes stockées.', error);
    return [];
  }
}

function saveOrderLocally(orderPayload) {
  const orders = getSavedOrders();
  orders.unshift(orderPayload);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function getOrderPayload(form) {
  const fields = form.querySelectorAll('input, textarea');
  const orderPayload = {
    id: `CMD-${Date.now()}`,
    date: new Date().toLocaleString('fr-FR'),
    produit: form.querySelector('input[readonly]')?.value || 'Produit non renseigné',
    quantite: Number(form.querySelector('input[type="number"][min="1"]')?.value || 1),
    commentaire: form.querySelector('textarea')?.value?.trim() || '',
  };

  fields.forEach((field) => {
    const name = field.name || field.getAttribute('placeholder') || field.type || 'field';
    const value = field.value?.trim() || '';
    if (name && value && !orderPayload[name]) {
      orderPayload[name] = value;
    }
  });

  return orderPayload;
}

function sendToWhatsApp(payload) {
  const isContact = !payload.produit || payload.produit === 'Produit non renseigné';
  let message;

  if (isContact) {
    message = [
      '📬 *Nouveau message de contact BKYSHOP*',
      '━━━━━━━━━━━━━━━━━━',
      `👤 *Nom :* ${payload.nom || payload.Nom || '—'}`,
      `📧 *Email :* ${payload.email || payload.Email || '—'}`,
      `📞 *Téléphone :* ${payload.telephone || payload.Téléphone || '—'}`,
      `📋 *Objet :* ${payload.objet || payload.Objet || '—'}`,
      '',
      '💬 *Message :*',
      `${payload.message || payload.Message || '—'}`,
      '',
      `🕐 ${new Date().toLocaleString('fr-FR')}`
    ].join('\n');
  } else {
    message = [
      '🛍️ *Nouvelle commande BKYSHOP*',
      '━━━━━━━━━━━━━━━━━━',
      `👤 *Client :* ${payload.nom || payload.Nom || '—'}`,
      `📞 *Téléphone :* ${payload.telephone || payload.Téléphone || '—'}`,
      `📍 *Ville :* ${payload.ville || payload.Ville || '—'}`,
      `🏘️ *Commune :* ${payload.commune || payload.Commune || '—'}`,
      `📮 *Adresse :* ${payload.adresse || payload.Adresse || '—'}`,
      '',
      `📦 *Produit :* ${payload.produit || '—'}`,
      `🔢 *Quantité :* ${payload.quantite || 1}`,
      `💬 *Commentaire :* ${payload.commentaire || '—'}`,
      '',
      `🆔 ${payload.id || ''}`,
      `🕐 ${payload.date || new Date().toLocaleString('fr-FR')}`
    ].join('\n');
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.click();
}

async function sendEmail(payload) {
  const isContact = !payload.produit || payload.produit === 'Produit non renseigné';

  const formData = new FormData();
  formData.append('_subject', isContact ? '📬 Nouveau message de contact - BKYSHOP' : '🛍️ Nouvelle commande - BKYSHOP');
  formData.append('_captcha', 'false');

  if (isContact) {
    formData.append('Nom', payload.nom || payload.Nom || '—');
    formData.append('Email', payload.email || payload.Email || '—');
    formData.append('Téléphone', payload.telephone || payload.Téléphone || '—');
    formData.append('Objet', payload.objet || payload.Objet || '—');
    formData.append('Message', payload.message || payload.Message || '—');
  } else {
    formData.append('ID', payload.id || '');
    formData.append('Date', payload.date || '');
    formData.append('Client', payload.nom || payload.Nom || '—');
    formData.append('Téléphone', payload.telephone || payload.Téléphone || '—');
    formData.append('Ville', payload.ville || payload.Ville || '—');
    formData.append('Commune', payload.commune || payload.Commune || '—');
    formData.append('Adresse', payload.adresse || payload.Adresse || '—');
    formData.append('Produit', payload.produit || '—');
    formData.append('Quantité', String(payload.quantite || 1));
    formData.append('Commentaire', payload.commentaire || '—');
  }

  try {
    await fetch(`https://formsubmit.co/${EMAIL_TO}`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.warn('Erreur envoi email:', error);
  }
}

function registerOrder(orderPayload) {
  saveOrderLocally(orderPayload);
  sendToWhatsApp(orderPayload);
  sendEmail(orderPayload);
}

function initScrollEffects() {
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const prefix = element.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else element.textContent = `${prefix}${target}${suffix}`;
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function initSearch() {
  const searchInput = document.querySelector('[data-search-input]');
  const searchItems = document.querySelectorAll('[data-search-item]');

  if (!searchInput || !searchItems.length) return;

  searchInput.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase().trim();

    searchItems.forEach((item) => {
      const content = item.textContent.toLowerCase();
      const visible = content.includes(term);
      item.style.display = visible ? '' : 'none';
    });
  });
}

function initFilters() {
  const filterSelect = document.querySelector('[data-filter-category]');
  const priceSelect = document.querySelector('[data-filter-price]');
  const stockSelect = document.querySelector('[data-filter-stock]');
  const colorSelect = document.querySelector('[data-filter-color]');
  const productCards = document.querySelectorAll('[data-product-card]');

  if (!productCards.length) return;

  const applyFilters = () => {
    const category = filterSelect?.value || 'all';
    const price = priceSelect?.value || 'all';
    const stock = stockSelect?.value || 'all';
    const color = colorSelect?.value || 'all';

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category || '';
      const cardPrice = Number(card.dataset.price || 0);
      const cardStock = card.dataset.stock || 'in-stock';
      const cardColor = card.dataset.color || 'default';

      const byCategory = category === 'all' || cardCategory === category;
      const byPrice = price === 'all'
        || (price === 'under-45000' && cardPrice < 45000)
        || (price === '45000-70000' && cardPrice >= 45000 && cardPrice <= 70000)
        || (price === 'over-70000' && cardPrice > 70000);
      const byStock = stock === 'all' || cardStock === stock;
      const byColor = color === 'all' || cardColor === color;

      card.style.display = byCategory && byPrice && byStock && byColor ? '' : 'none';
    });
  };

  [filterSelect, priceSelect, stockSelect, colorSelect].forEach((control) => {
    control?.addEventListener('change', applyFilters);
  });
}

function initQuantityButtons() {
  const minusBtns = document.querySelectorAll('[data-qty-minus]');
  const plusBtns = document.querySelectorAll('[data-qty-plus]');
  const qtyValues = document.querySelectorAll('[data-qty-value]');
  const qtyInputs = document.querySelectorAll('input[type="number"][min="1"]');

  minusBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const valueEl = qtyValues[index];
      const inputEl = qtyInputs[index] || btn.closest('.qty-box')?.querySelector('input[type="number"]');
      let current = parseInt(valueEl?.textContent || (inputEl?.value || 1));
      if (current > 1) {
        current -= 1;
        if (valueEl) valueEl.textContent = current;
        if (inputEl) inputEl.value = current;
      }
    });
  });

  plusBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const valueEl = qtyValues[index];
      const inputEl = qtyInputs[index] || btn.closest('.qty-box')?.querySelector('input[type="number"]');
      let current = parseInt(valueEl?.textContent || (inputEl?.value || 1));
      current += 1;
      if (valueEl) valueEl.textContent = current;
      if (inputEl) inputEl.value = current;
    });
  });
}

function initForms() {
  const forms = document.querySelectorAll('[data-validate-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let valid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (!valid) {
        window.dispatchEvent(new CustomEvent('bkyshop:toast', { detail: { message: 'Veuillez remplir tous les champs.', type: 'warning' } }));
        return;
      }

      const orderPayload = getOrderPayload(form);
      await registerOrder(orderPayload);

      window.dispatchEvent(new CustomEvent('bkyshop:toast', { detail: { message: 'Votre demande a bien été enregistrée.', type: 'success' } }));
      form.reset();
    });
  });
}

function initBackToTop() {
  const btn = document.querySelector('[data-back-to-top]');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('d-none', window.scrollY < 300);
  });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initActiveNav() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const setActive = () => {
    let current = 'accueil';
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 140) current = section.id;
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isActive = href === `#${current}`;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', setActive);
  setActive();
}

window.addEventListener('bkyshop:toast', (event) => {
  const { message, type = 'success' } = event.detail || {};
  const wrapper = document.querySelector('#toast-wrapper');
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-bg-${type} border-0 show`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `<div class="d-flex"><div class="toast-body">${message}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;

  wrapper?.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
});
