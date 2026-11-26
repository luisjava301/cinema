// CONFIGURAÇÃO DO TAILWIND CSS (FONTES, PALETA E SOMBRAS)
if (window.tailwind) {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Bebas Neue', 'sans-serif'],
        },
        colors: {
          cinema: {
            black: '#0b0b0f',
            dark: '#121218',
            card: '#18181f',
            border: '#272732',
            red: '#e50914',
            redHover: '#f6121d',
            gold: '#f5c518',
            amber: '#d97706'
          }
        },
        boxShadow: {
          'glow-red': '0 0 25px rgba(229, 9, 20, 0.45)',
          'glow-gold': '0 0 20px rgba(245, 197, 24, 0.35)',
        }
      }
    }
  };
}

// CHAVES DE PERSISTÊNCIA NO LOCALSTORAGE
const STORAGE_KEYS = {
  USERS: 'cineprime_users_v2',
  SESSION: 'cineprime_session_v2',
  MOVIES: 'cineprime_movies_v4',
  COMBOS: 'cineprime_combos_v3',
  CART: 'cineprime_cart_v2',
  ORDERS: 'cineprime_orders_v2',
  OCCUPIED_SEATS: 'cineprime_occupied_seats_v1'
};

// ASSENTOS BASE OCUPADOS POR PADRÃO EM CADA SESSÃO INDIVIDUAL
const DEFAULT_OCCUPIED_SEATS = ['B4', 'B5', 'C7', 'C8', 'D3', 'D4', 'E6', 'E7'];

// VALORES PADRÃO FIXOS PARA O SUBMASTER (NÃO PODE ALTERAR PREÇOS)
const SUBMASTER_FIXED_PRICES = {
  MOVIE_TICKET: 36.00,
  COMBO: 45.00
};

// CONTAS PADRÃO DO SISTEMA (ADMIN, SUBMASTER E CLIENTE EXEMPLO)
const DEFAULT_USERS = [
  { username: 'admin', password: 'admin', name: 'Administrador Geral', role: 'admin' },
  { username: 'submaster', password: 'submaster', name: 'Gestor Submaster', role: 'submaster' },
  { username: 'cliente', password: 'cliente', name: 'Cliente VIP', role: 'cliente' }
];

// DADOS INICIAIS PADRÃO DE FILMES (PÔSTERES EM .JPG E BANNERS EM .WEBP)
const DEFAULT_MOVIES = [
  {
    id: 1,
    title: "VERITY",
    genre: "Suspense / Thriller",
    duration: "1h 54min",
    rating: "16",
    status: "em-cartaz",
    featured: true,
    tagline: "NEM TODA HISTÓRIA FOI FEITA PARA SER TERMINADA",
    synopsis: "Lowen Ashleigh, uma escritora em dificuldade financeira, aceita a oferta para concluir os livros da renomada autora Verity Crawford — mas encontra na mansão da família uma autobiografia secreta e perturbadora que nunca deveria ser lida.",
    formats: ["XD", "2D", "Dublado", "Legendado"],
    basePrice: 36.00,
    poster: "img/filmes/verity-poster.jpg",
    banner: "img/banners/verity-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=JjIVd97hoFE",
    palette: ["#1c0a0d", "#3f0d16", "#e50914", "#f5c518"],
    icon: "fa-book-skull",
    showtimes: [
      { time: "14:30", room: "Sala 03", format: "2D", lang: "Dublado" },
      { time: "17:45", room: "Sala 01 XD", format: "XD", lang: "Legendado" },
      { time: "20:50", room: "Sala 03", format: "2D", lang: "Dublado" },
      { time: "22:30", room: "Sala 01 XD", format: "XD", lang: "Legendado" }
    ]
  },
  {
    id: 2,
    title: "O HOBBIT: UMA JORNADA INESPERADA",
    genre: "Aventura / Fantasia",
    duration: "2h 49min",
    rating: "12",
    status: "em-cartaz",
    featured: true,
    tagline: "DO CONDADO À MONTANHA SOLITÁRIA",
    synopsis: "O pacato hobbit Bilbo Bolseiro é convocado pelo mago Gandalf e por treze anões liderados por Thorin Escudo de Carvalho para uma jornada épica pela Terra-média com o objetivo de recuperar o reino perdido de Erebor das garras do dragão Smaug.",
    formats: ["XD", "3D", "2D", "Dublado", "Legendado"],
    basePrice: 38.00,
    poster: "img/filmes/hobbit-jornada-poster.jpg",
    banner: "img/banners/hobbit-jornada-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=8cOtTG1vIp8",
    palette: ["#0c1f14", "#1b4328", "#f5c518", "#34d399"],
    icon: "fa-ring",
    showtimes: [
      { time: "15:15", room: "Sala 01 XD", format: "XD", lang: "Dublado" },
      { time: "18:20", room: "Sala 02", format: "3D", lang: "Legendado" },
      { time: "21:15", room: "Sala 01 XD", format: "XD", lang: "Legendado" }
    ]
  },
  {
    id: 3,
    title: "HOMEM-ARANHA: UM NOVO DIA",
    genre: "Ação / Aventura",
    duration: "2h 18min",
    rating: "12",
    status: "em-cartaz",
    featured: true,
    tagline: "UM RECOMEÇO NAS SOMBRAS DE NOVA YORK",
    synopsis: "Após o feitiço que apagou sua identidade da memória de todos, Peter Parker tenta reconstruir sua vida do zero enquanto enfrenta novas ameaças nas ruas de Nova York e descobre o verdadeiro peso de ser o Homem-Aranha sozinho.",
    formats: ["XD", "D-BOX", "3D", "2D", "Dublado", "Legendado"],
    basePrice: 38.00,
    poster: "img/filmes/aranha-novo-dia-poster.jpg",
    banner: "img/banners/aranha-novo-dia-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=bwt2-nyEP0A",
    palette: ["#16080c", "#450a14", "#e50914", "#38bdf8"],
    icon: "fa-spider",
    showtimes: [
      { time: "13:40", room: "Sala 04", format: "2D", lang: "Dublado" },
      { time: "16:00", room: "Sala 02 D-BOX", format: "D-BOX", lang: "Dublado" },
      { time: "18:30", room: "Sala 01 XD", format: "XD", lang: "Legendado" }
    ]
  },
  {
    id: 4,
    title: "DEADPOOL & WOLVERINE",
    genre: "Ação / Comédia",
    duration: "2h 08min",
    rating: "18",
    status: "em-cartaz",
    featured: false,
    tagline: "O MULTIVERSO NUNCA MAIS SERÁ O MESMO",
    synopsis: "Arrancado de sua vida tranquila pela Autoridade de Variância Temporal, Wade Wilson precisa convencer um Wolverine relutante e assombrado pelo passado a lutar ao seu lado para salvar seu universo da extinção.",
    formats: ["XD", "D-BOX", "2D", "Dublado", "Legendado"],
    basePrice: 36.00,
    poster: "img/filmes/deadpool-wolverine-poster.jpg",
    banner: "img/banners/deadpool-wolverine-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=dEbe0rS4Z2A",
    palette: ["#1f0909", "#4a1510", "#e50914", "#f5c518"],
    icon: "fa-explosion",
    showtimes: [
      { time: "16:10", room: "Sala 02 D-BOX", format: "D-BOX", lang: "Legendado" },
      { time: "19:20", room: "Sala 01 XD", format: "XD", lang: "Dublado" },
      { time: "21:50", room: "Sala 05", format: "2D", lang: "Legendado" }
    ]
  },
  {
    id: 5,
    title: "O SENHOR DOS ANÉIS: AS DUAS TORRES",
    genre: "Aventura / Fantasia",
    duration: "2h 59min",
    rating: "12",
    status: "em-cartaz",
    featured: false,
    tagline: "A SOCIEDADE SE DIVIDIU. A GUERRA COMEÇOU.",
    synopsis: "Com a Sociedade do Anel dispersa, Frodo e Sam seguem rumo a Mordor guiados pelo traiçoeiro Gollum, enquanto Aragorn, Legolas e Gimli defendem o reino de Rohan contra o exército de Saruman no Abismo de Helm.",
    formats: ["XD", "2D", "Dublado", "Legendado"],
    basePrice: 36.00,
    poster: "img/filmes/senhor-aneis-duas-torres-poster.jpg",
    banner: "img/banners/senhor-aneis-duas-torres-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=Al5iC4CnhYc",
    palette: ["#14110f", "#2e241b", "#d97706", "#f5c518"],
    icon: "fa-chess-rook",
    showtimes: [
      { time: "18:00", room: "Sala 01 XD", format: "XD", lang: "Legendado" },
      { time: "21:15", room: "Sala 05", format: "2D", lang: "Dublado" }
    ]
  },
  {
    id: 6,
    title: "VINGADORES: DOOMSDAY",
    genre: "Ação / Ficção Científica",
    duration: "2h 35min",
    rating: "14",
    status: "em-breve",
    releaseDate: "Estreia: Em Breve",
    featured: false,
    tagline: "O DESTINO DE TODAS AS REALIDADES",
    synopsis: "Em Vingadores: Doutor Destino, heróis queridos de três universos distintos entrarão em rota de colisão e enfrentarão uma ameaça existencial sem precedentes.",
    formats: ["XD", "3D", "D-BOX", "2D", "Dublado", "Legendado"],
    basePrice: 40.00,
    poster: "img/filmes/vingadores-doomsday-poster.jpg",
    banner: "img/banners/vingadores-doomsday-banner.webp",
    trailerUrl: "https://www.youtube.com/watch?v=OCvR-nay2K0",
    palette: ["#09131c", "#0f293a", "#10b981", "#f5c518"],
    icon: "fa-shield-halved",
    showtimes: []
  }
];

// DADOS INICIAIS PADRÃO DE COMBOS DA BOMBONIÈRE (COM CAMINHO PARA FOTO REAL)
const DEFAULT_COMBOS = [
  {
    id: "combo-xd",
    name: "Combo Mega XD Casal",
    desc: "1 Balde de Pipoca Gigante (amanteigada ou doce) + 2 Refrigerantes 700ml + 1 Chocolate.",
    price: 54.90,
    badge: "MAIS VENDIDO",
    imagem: "img/combos/combo-casal.jpg",
    accent: "from-[#e50914] to-red-900",
    icon: "fa-bucket"
  },
  {
    id: "combo-balde",
    name: "Combo Colecionável",
    desc: "Balde metálico edição limitada + Pipoca Grande + 1 Refrigerante 1L.",
    price: 69.90,
    badge: "EDIÇÃO LIMITADA",
    imagem: "img/combos/combo-colecionavel.jpg",
    accent: "from-[#f5c518] to-amber-700",
    icon: "fa-rocket"
  },
  {
    id: "combo-solo",
    name: "Combo Prime Individual",
    desc: "1 Pipoca Média salgada na hora + 1 Refrigerante 500ml ou Suco Natural.",
    price: 34.90,
    badge: "CLÁSSICO",
    imagem: "img/combos/combo-individual.jpg",
    accent: "from-zinc-700 to-zinc-900",
    icon: "fa-cup-straw"
  },
  {
    id: "combo-nachos",
    name: "Combo Nachos Supreme Cheddar",
    desc: "Porção generosa de Nachos crocantes com molho Cheddar cremoso + 1 Refrigerante 700ml.",
    price: 42.90,
    badge: "NOVIDADE",
    imagem: "img/combos/combo-nachos.jpg",
    accent: "from-orange-600 to-red-900",
    icon: "fa-burger"
  }
];

// ESTADO GLOBAL DA APLICAÇÃO
let appData = {
  users: [],
  currentUser: null,
  movies: [],
  combos: [],
  cart: [],
  orders: [],
  occupiedBySession: {},
  couponApplied: false
};

let uiState = {
  currentView: 'catalogo',
  currentSlide: 0,
  slideInterval: null,
  activeTab: 'em-cartaz',
  selectedDateIndex: 0,
  activeFilter: 'ALL',
  searchQuery: '',
  selectedUnit: 'Itabuna - Shopping Jequitibá',
  booking: {
    movie: null,
    dateIndex: 0,
    showtimeIndex: 0,
    selectedSeats: []
  }
};

const DATES = Array.from({ length: 6 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  return {
    label: i === 0 ? 'HOJE' : i === 1 ? 'AMANHÃ' : weekDays[d.getDay()],
    day: String(d.getDate()).padStart(2, '0'),
    month: months[d.getMonth()]
  };
});

// ==================== HELPERS DE ASSENTOS POR SESSÃO ====================
function getSessionSeatKey(unitLocation, movieId, dateKey, time) {
  return `${unitLocation}|${movieId}|${dateKey}|${time}`;
}

function getCurrentBookingSessionKey() {
  const { movie, dateIndex, showtimeIndex } = uiState.booking;
  if (!movie) return '';
  const dateObj = DATES[dateIndex] || DATES[0];
  const showtimes = movie.showtimes && movie.showtimes.length > 0
    ? movie.showtimes
    : [{ time: "19:30", room: "Sala 01", format: "2D", lang: "Dublado" }];
  const stObj = showtimes[showtimeIndex] || showtimes[0];
  return getSessionSeatKey(uiState.selectedUnit, movie.id, `${dateObj.day}/${dateObj.month}`, stObj.time);
}

function getOccupiedSeatsForSession(sessionKey) {
  if (!appData.occupiedBySession[sessionKey]) {
    appData.occupiedBySession[sessionKey] = [...DEFAULT_OCCUPIED_SEATS];
  }
  const occupiedSet = new Set(appData.occupiedBySession[sessionKey]);

  // Bloqueia também assentos desta mesma sessão já adicionados ao carrinho atual
  appData.cart.forEach(item => {
    if (item.kind === 'ticket') {
      const itemDateKey = item.dateKey || (item.dateLabel?.match(/\(([^)]+)\)/)?.[1] || '');
      const itemKey = item.sessionKey || getSessionSeatKey(item.unitLocation, item.movieId, itemDateKey, item.time);
      if (itemKey === sessionKey) {
        (item.seats || []).forEach(s => occupiedSet.add(s.id));
      }
    }
  });

  return occupiedSet;
}

// ==================== PERSISTÊNCIA LOCALSTORAGE ====================
function loadPersistedData() {
  const storedUsers = localStorage.getItem(STORAGE_KEYS.USERS);
  appData.users = storedUsers ? JSON.parse(storedUsers) : [...DEFAULT_USERS];
  if (!storedUsers) localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(appData.users));

  const storedMovies = localStorage.getItem(STORAGE_KEYS.MOVIES);
  if (storedMovies) {
    appData.movies = JSON.parse(storedMovies).map(m => {
      if (!m.trailerUrl) {
        const def = DEFAULT_MOVIES.find(d => d.id === m.id);
        if (def && def.trailerUrl) m.trailerUrl = def.trailerUrl;
      }
      return m;
    });
    localStorage.setItem(STORAGE_KEYS.MOVIES, JSON.stringify(appData.movies));
  } else {
    appData.movies = JSON.parse(JSON.stringify(DEFAULT_MOVIES));
    localStorage.setItem(STORAGE_KEYS.MOVIES, JSON.stringify(appData.movies));
  }

  const storedCombos = localStorage.getItem(STORAGE_KEYS.COMBOS);
  appData.combos = storedCombos ? JSON.parse(storedCombos) : JSON.parse(JSON.stringify(DEFAULT_COMBOS));
  if (!storedCombos) localStorage.setItem(STORAGE_KEYS.COMBOS, JSON.stringify(appData.combos));

  const storedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  appData.orders = storedOrders ? JSON.parse(storedOrders) : [];

  const storedOccupied = localStorage.getItem(STORAGE_KEYS.OCCUPIED_SEATS);
  appData.occupiedBySession = storedOccupied ? JSON.parse(storedOccupied) : {};

  const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
  appData.cart = storedCart ? JSON.parse(storedCart) : [];

  const storedSession = localStorage.getItem(STORAGE_KEYS.SESSION);
  if (storedSession) {
    const parsedSession = JSON.parse(storedSession);
    const validUser = appData.users.find(u => u.username === parsedSession.username);
    if (validUser) appData.currentUser = validUser;
  }
}

function saveMoviesToStorage() {
  localStorage.setItem(STORAGE_KEYS.MOVIES, JSON.stringify(appData.movies));
}

function saveCombosToStorage() {
  localStorage.setItem(STORAGE_KEYS.COMBOS, JSON.stringify(appData.combos));
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(appData.cart));
  updateCartBadges();
}

function saveOrdersToStorage() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(appData.orders));
}

function saveOccupiedSeatsToStorage() {
  localStorage.setItem(STORAGE_KEYS.OCCUPIED_SEATS, JSON.stringify(appData.occupiedBySession));
}

function restoreFactoryDefaults() {
  if (appData.currentUser?.role === 'submaster') {
    showToast('Atenção: Submaster não pode restaurar preços de fábrica.', 'info');
    return;
  }
  appData.movies = JSON.parse(JSON.stringify(DEFAULT_MOVIES));
  appData.combos = JSON.parse(JSON.stringify(DEFAULT_COMBOS));
  saveMoviesToStorage();
  saveCombosToStorage();
  initHeroCarousel();
  renderMoviesGrid();
  renderCombosPage();
  renderAdminPanel();
  showToast('Catálogo e preços restaurados para o padrão de fábrica!', 'gold');
}

// ==================== AUTENTICAÇÃO E CONTROLE DE ACESSO ====================
function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabLogin = document.getElementById('authTabLogin');
  const tabRegister = document.getElementById('authTabRegister');

  document.getElementById('loginErrorMsg').classList.add('hidden');
  document.getElementById('registerErrorMsg').classList.add('hidden');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    tabLogin.className = 'py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e50914] text-white shadow-glow-red transition-all';
    tabRegister.className = 'py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-all';
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    tabRegister.className = 'py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e50914] text-white shadow-glow-red transition-all';
    tabLogin.className = 'py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-all';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginErrorMsg');

  const foundUser = appData.users.find(u => u.username.toLowerCase() === username && u.password === password);
  if (!foundUser) {
    errEl.textContent = 'Usuário ou senha inválidos. Verifique os dados ou crie uma conta.';
    errEl.classList.remove('hidden');
    return;
  }

  errEl.classList.add('hidden');
  appData.currentUser = foundUser;
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(foundUser));
  enterAuthenticatedApp();
  showToast(`Bem-vindo(a), ${foundUser.name}!`, 'gold');
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const username = document.getElementById('regUsername').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const errEl = document.getElementById('registerErrorMsg');

  if (appData.users.some(u => u.username.toLowerCase() === username)) {
    errEl.textContent = 'Este nome de usuário já está em uso. Escolha outro.';
    errEl.classList.remove('hidden');
    return;
  }

  const newUser = { username, password, name, role: 'cliente' };
  appData.users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(appData.users));

  appData.currentUser = newUser;
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(newUser));
  enterAuthenticatedApp();
  showToast(`Conta criada com sucesso! Bem-vindo(a), ${name}!`, 'gold');
}

function logoutUser() {
  appData.currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.SESSION);
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('authGatekeeper').classList.remove('hidden');
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  clearInterval(uiState.slideInterval);
}

function enterAuthenticatedApp() {
  const user = appData.currentUser;
  if (!user) return;

  document.getElementById('authGatekeeper').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');

  document.getElementById('headerUserName').textContent = user.name;
  document.getElementById('mobileUserName').textContent = user.name;

  const roleColors = {
    admin: 'bg-[#e50914] text-white',
    submaster: 'bg-[#f5c518] text-zinc-950',
    cliente: 'bg-emerald-600 text-white'
  };
  const roleLabels = { admin: 'ADMIN', submaster: 'SUBMASTER', cliente: 'CLIENTE' };

  const badgeDesktop = document.getElementById('headerUserRoleBadge');
  const badgeMobile = document.getElementById('mobileUserRoleBadge');
  badgeDesktop.className = `inline-block text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded ${roleColors[user.role]}`;
  badgeDesktop.textContent = roleLabels[user.role];
  badgeMobile.className = `text-[9px] font-extrabold uppercase px-2 py-0.5 rounded ${roleColors[user.role]}`;
  badgeMobile.textContent = roleLabels[user.role];

  const isManager = user.role === 'admin' || user.role === 'submaster';
  document.getElementById('navAdminBtn').classList.toggle('hidden', !isManager);
  document.getElementById('mobileNavAdminBtn').classList.toggle('hidden', !isManager);
  document.getElementById('ordersScopeFilterWrapper').classList.toggle('hidden', !isManager);

  applyRolePermissionsToAdminForms();

  initHeroCarousel();
  renderDateSelector();
  renderMoviesGrid();
  renderCombosPage();
  updateCartBadges();
  navigateTo('catalogo');
}

// ==================== NAVEGAÇÃO SPA ENTRE PÁGINAS ====================
function navigateTo(viewName) {
  if (viewName === 'admin' && appData.currentUser?.role === 'cliente') {
    showToast('Acesso negado: Apenas Admin ou Submaster podem acessar o Painel.', 'info');
    return;
  }

  uiState.currentView = viewName;
  document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.remove('hidden');

  document.querySelectorAll('.nav-link').forEach(btn => {
    if (btn.dataset.nav === viewName) {
      btn.classList.add('text-white', 'underline', 'decoration-[#e50914]', 'decoration-2', 'underline-offset-8');
    } else {
      btn.classList.remove('text-white', 'underline', 'decoration-[#e50914]', 'decoration-2', 'underline-offset-8');
    }
  });

  if (viewName === 'carrinho') renderCartPage();
  if (viewName === 'ingressos') renderMyTicketsPage();
  if (viewName === 'admin') renderAdminPanel();
  if (viewName === 'bomboniere') renderCombosPage();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== HELPERS VISUAIS ====================
function getRatingStyle(rating) {
  const map = {
    'L':  { bg: 'bg-emerald-600 text-white', text: 'Livre' },
    '10': { bg: 'bg-sky-500 text-white', text: '10 anos' },
    '12': { bg: 'bg-amber-400 text-zinc-950', text: '12 anos' },
    '14': { bg: 'bg-orange-500 text-white', text: '14 anos' },
    '16': { bg: 'bg-red-600 text-white', text: '16 anos' },
    '18': { bg: 'bg-zinc-950 border border-zinc-600 text-white', text: '18 anos' }
  };
  return map[rating] || map['14'];
}

function renderPosterArtwork(movie, isHero = false) {
  const [c1, c2, c3, c4] = movie.palette || ["#0f172a", "#1e1b4b", "#e50914", "#f5c518"];
  const imagePath = isHero
    ? (movie.banner || movie.poster || movie.posterUrl || '').trim()
    : (movie.poster || movie.banner || movie.posterUrl || '').trim();

  const fallbackArtworkHtml = `
    <div class="w-full h-full relative overflow-hidden" style="background: radial-gradient(circle at 75% 25%, ${c3}55 0%, transparent 55%), linear-gradient(135deg, ${c1} 0%, ${c2} 55%, #0b0b0f 100%);">
      <svg class="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${isHero ? '75%' : '50%'}" cy="${isHero ? '45%' : '42%'}" r="${isHero ? '190' : '95'}" fill="none" stroke="${c4}" stroke-width="1.2" stroke-dasharray="6 6"/>
        <circle cx="${isHero ? '75%' : '50%'}" cy="${isHero ? '45%' : '42%'}" r="${isHero ? '130' : '62'}" fill="${c3}" fill-opacity="0.18"/>
      </svg>
      <div class="absolute ${isHero ? 'right-[12%] top-1/2 -translate-y-1/2 hidden md:flex' : 'inset-0 flex flex-col'} items-center justify-center pointer-events-none px-4 text-center">
        <div class="${isHero ? 'w-56 h-56 text-7xl' : 'w-20 h-20 text-3xl mb-3'} rounded-full flex items-center justify-center backdrop-blur-sm border border-white/15 shadow-2xl" style="background: radial-gradient(circle, ${c3}44, transparent 75%); color: ${c4};">
          <i class="fa-solid ${movie.icon || 'fa-film'}"></i>
        </div>
        ${!isHero ? `<span class="font-display text-lg tracking-wider text-white/90 line-clamp-2 drop-shadow">${movie.title}</span>` : ''}
        ${imagePath ? `<span class="mt-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 font-mono text-[9px] text-zinc-400 max-w-[90%] truncate">${imagePath}</span>` : ''}
      </div>
    </div>
  `;

  if (imagePath) {
    return `
      <div class="w-full h-full relative overflow-hidden bg-zinc-950">
        <img
          src="${imagePath}"
          alt="${movie.title}"
          onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
          class="w-full h-full object-cover ${isHero ? 'object-center opacity-85' : 'object-top group-hover:scale-105 transition-transform duration-500'}"
        >
        <div class="hidden w-full h-full">
          ${fallbackArtworkHtml}
        </div>
      </div>
    `;
  }

  return fallbackArtworkHtml;
}

// ==================== CARROSSEL PRINCIPAL ====================
function initHeroCarousel() {
  const featuredMovies = appData.movies.filter(m => m.featured && m.status === 'em-cartaz');
  const list = featuredMovies.length > 0 ? featuredMovies : appData.movies.slice(0, 3);
  const slidesContainer = document.getElementById('heroSlides');
  const dotsContainer = document.getElementById('heroDots');

  slidesContainer.innerHTML = list.map((movie, idx) => {
    const ratingInfo = getRatingStyle(movie.rating);
    return `
      <div class="hero-slide absolute inset-0 transition-all duration-700 ease-out ${idx === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'}" data-index="${idx}">
        ${renderPosterArtwork(movie, true)}
        <div class="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div class="max-w-2xl space-y-4 sm:space-y-5 pt-4">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="px-3 py-1 rounded-lg bg-[#e50914] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-glow-red">
                ${movie.tagline || 'EM CARTAZ NO CINEPRIME'}
              </span>
              <span class="w-7 h-7 rounded-md ${ratingInfo.bg} flex items-center justify-center text-xs font-extrabold">
                ${movie.rating}
              </span>
              <span class="text-xs font-medium text-zinc-300 bg-black/50 px-2.5 py-1 rounded-lg border border-white/10">
                ${movie.duration} • ${movie.genre}
              </span>
            </div>

            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white leading-[0.95] drop-shadow-lg">
              ${movie.title}
            </h1>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed line-clamp-3 max-w-xl">
              ${movie.synopsis}
            </p>

            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${(movie.formats || []).map(f => `<span class="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-semibold text-[#f5c518]">${f}</span>`).join('')}
            </div>

            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <button type="button" onclick="openBookingModal(${movie.id})" class="px-6 sm:px-7 py-3.5 rounded-xl bg-[#e50914] hover:bg-[#f6121d] text-white font-bold text-sm flex items-center gap-2.5 shadow-glow-red hover:scale-[1.02] transition-all">
                <i class="fa-solid fa-ticket"></i>
                <span>Comprar Ingresso</span>
              </button>
              <button type="button" onclick="openTrailerModal(${movie.id})" class="px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm flex items-center gap-2.5 backdrop-blur-md transition-all">
                <i class="fa-solid fa-play text-[#f5c518]"></i>
                <span>Ver Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  dotsContainer.innerHTML = list.map((_, idx) => `
    <button type="button" onclick="goToSlide(${idx})" aria-label="Slide ${idx + 1}" class="hero-dot h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-9 bg-[#e50914]' : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'}"></button>
  `).join('');

  uiState.currentSlide = 0;
  startCarouselAutoplay();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  uiState.currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    const active = i === uiState.currentSlide;
    slide.classList.toggle('opacity-100', active);
    slide.classList.toggle('scale-100', active);
    slide.classList.toggle('z-10', active);
    slide.classList.toggle('opacity-0', !active);
    slide.classList.toggle('scale-105', !active);
    slide.classList.toggle('z-0', !active);
    slide.classList.toggle('pointer-events-none', !active);
  });

  dots.forEach((dot, i) => {
    const active = i === uiState.currentSlide;
    dot.classList.toggle('w-9', active);
    dot.classList.toggle('bg-[#e50914]', active);
    dot.classList.toggle('w-2.5', !active);
    dot.classList.toggle('bg-zinc-600', !active);
  });
}

function startCarouselAutoplay() {
  clearInterval(uiState.slideInterval);
  uiState.slideInterval = setInterval(() => goToSlide(uiState.currentSlide + 1), 6000);
}

// ==================== CATÁLOGO & FILTROS ====================
function renderDateSelector() {
  const container = document.getElementById('dateSelector');
  container.innerHTML = DATES.map((d, idx) => {
    const isActive = idx === uiState.selectedDateIndex;
    return `
      <button type="button" onclick="selectDate(${idx})" class="shrink-0 px-4 py-2.5 rounded-2xl border transition-all flex flex-col items-center min-w-[84px] ${
        isActive ? 'bg-[#e50914] border-[#e50914] text-white shadow-glow-red' : 'bg-[#121218] border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
      }">
        <span class="text-[10px] font-bold tracking-wider uppercase">${d.label}</span>
        <span class="font-display text-2xl leading-tight">${d.day} ${d.month}</span>
      </button>
    `;
  }).join('');
}

function selectDate(idx) {
  uiState.selectedDateIndex = idx;
  renderDateSelector();
  renderMoviesGrid();
}

function switchTab(tab) {
  uiState.activeTab = tab;
  const btnCartaz = document.getElementById('tabEmCartaz');
  const btnBreve = document.getElementById('tabEmBreve');
  const filtersWrapper = document.getElementById('filtersWrapper');

  if (tab === 'em-cartaz') {
    btnCartaz.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[#e50914] text-white shadow-glow-red';
    btnBreve.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all text-zinc-400 hover:text-white';
    filtersWrapper.classList.remove('hidden');
  } else {
    btnBreve.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[#e50914] text-white shadow-glow-red';
    btnCartaz.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all text-zinc-400 hover:text-white';
    filtersWrapper.classList.add('hidden');
  }
  renderMoviesGrid();
}

function renderMoviesGrid() {
  const grid = document.getElementById('moviesGrid');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetFiltersBtn');

  const hasFilter = uiState.activeFilter !== 'ALL' || uiState.searchQuery.trim() !== '';
  resetBtn.classList.toggle('hidden', !hasFilter);

  const filtered = appData.movies.filter(movie => {
    if (movie.status !== uiState.activeTab) return false;
    if (uiState.activeTab === 'em-cartaz' && uiState.activeFilter !== 'ALL') {
      if (!(movie.formats || []).includes(uiState.activeFilter)) return false;
    }
    if (uiState.searchQuery.trim() !== '') {
      const q = uiState.searchQuery.toLowerCase();
      if (!movie.title.toLowerCase().includes(q) && !movie.genre.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(movie => {
    const ratingInfo = getRatingStyle(movie.rating);
    const isComingSoon = movie.status === 'em-breve';

    return `
      <article class="group bg-[#18181f] border border-zinc-800/90 hover:border-[#e50914]/70 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
        <div class="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950">
          ${renderPosterArtwork(movie, false)}
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#18181f] via-transparent to-black/35"></div>

          <span title="Classificação: ${ratingInfo.text}" class="absolute top-3.5 left-3.5 w-8 h-8 rounded-xl ${ratingInfo.bg} flex items-center justify-center text-xs font-extrabold shadow-lg">
            ${movie.rating}
          </span>

          <button type="button" onclick="openTrailerModal(${movie.id})" aria-label="Ver trailer" class="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-black/60 hover:bg-[#e50914] border border-white/15 text-white flex items-center justify-center backdrop-blur-md transition-all">
            <i class="fa-solid fa-play text-xs"></i>
          </button>

          <div class="absolute bottom-3 left-3.5 right-3.5 flex flex-wrap justify-between items-center gap-1.5">
            <div class="flex flex-wrap gap-1">
              ${(movie.formats || []).slice(0, 3).map(fmt => `
                <span class="px-2 py-0.5 rounded-md bg-black/75 border border-white/10 text-[10px] font-bold text-[#f5c518] backdrop-blur-sm">${fmt}</span>
              `).join('')}
            </div>
            <span class="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-bold text-zinc-200">
              R$ ${Number(movie.basePrice).toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium mb-1.5">
              <span>${movie.genre}</span>
              <span><i class="fa-regular fa-clock mr-1 text-zinc-500"></i>${movie.duration}</span>
            </div>
            <h3 class="font-display text-2xl tracking-wide text-white group-hover:text-[#e50914] transition-colors leading-tight">
              ${movie.title}
            </h3>
            <p class="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">${movie.synopsis}</p>
          </div>

          ${isComingSoon ? `
            <div class="pt-2 flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-[#f5c518]">${movie.releaseDate || 'Em Breve'}</span>
              <button type="button" onclick="showToast('Lembrete ativado para ${movie.title}!', 'gold')" class="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold">
                <i class="fa-regular fa-bell mr-1 text-[#f5c518]"></i> Avise-me
              </button>
            </div>
          ` : `
            <button type="button" onclick="openBookingModal(${movie.id})" class="w-full py-3 rounded-xl bg-[#e50914] hover:bg-[#f6121d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md group-hover:shadow-glow-red transition-all">
              <i class="fa-solid fa-ticket"></i>
              <span>Comprar Ingresso</span>
            </button>
          `}
        </div>
      </article>
    `;
  }).join('');
}

function resetAllFilters() {
  uiState.activeFilter = 'ALL';
  uiState.searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.className = btn.dataset.filter === 'ALL'
      ? 'filter-chip active px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#e50914] text-white transition-all'
      : 'filter-chip px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-700/80 hover:border-zinc-500 transition-all';
  });
  renderMoviesGrid();
}

// ==================== PÁGINA BOMBONIÈRE & ADICIONAR COMBO AO CARRINHO ====================
function renderCombosPage() {
  const grid = document.getElementById('combosGrid');
  if (!grid) return;

  grid.innerHTML = appData.combos.map(combo => {
    const imgSrc = (combo.imagem || '').trim();
    const fallbackComboVisual = `
      <div class="w-full h-full bg-gradient-to-br ${combo.accent || 'from-[#e50914] to-red-900'} flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        <div class="w-16 h-16 rounded-2xl bg-black/25 border border-white/20 flex items-center justify-center text-white text-3xl shadow-xl mb-2">
          <i class="fa-solid ${combo.icon || 'fa-bucket'}"></i>
        </div>
        <span class="font-display text-lg tracking-wider text-white/95 line-clamp-1">${combo.name}</span>
        ${imgSrc ? `<span class="mt-1 px-2 py-0.5 rounded bg-black/50 font-mono text-[9px] text-white/75 max-w-[90%] truncate">${imgSrc}</span>` : ''}
      </div>
    `;

    return `
      <div class="group bg-[#18181f] border border-zinc-800 hover:border-[#f5c518]/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1">
        <div>
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
            ${imgSrc ? `
              <img
                src="${imgSrc}"
                alt="${combo.name}"
                onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
              <div class="hidden w-full h-full">${fallbackComboVisual}</div>
            ` : fallbackComboVisual}
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#18181f] via-transparent to-black/30"></div>
            <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 border border-[#f5c518]/40 text-[#f5c518] text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md">
              ${combo.badge || 'COMBO'}
            </span>
          </div>

          <div class="p-6 pb-3">
            <h3 class="text-lg font-bold text-white">${combo.name}</h3>
            <p class="text-xs text-zinc-400 mt-1.5 leading-relaxed">${combo.desc}</p>
          </div>
        </div>

        <div class="px-6 pb-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase text-zinc-500 block">Valor Unitário</span>
            <span class="font-display text-3xl text-white">R$ ${Number(combo.price).toFixed(2).replace('.', ',')}</span>
          </div>
          <button type="button" onclick="addComboToCart('${combo.id}')" class="px-4 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#f6121d] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-glow-red transition-all">
            <i class="fa-solid fa-cart-plus"></i> Adicionar
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function addComboToCart(comboId) {
  const combo = appData.combos.find(c => c.id === comboId);
  if (!combo) return;

  const existing = appData.cart.find(item => item.kind === 'combo' && item.comboId === comboId);
  if (existing) {
    existing.quantity += 1;
  } else {
    appData.cart.push({
      cartId: `combo-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: 'combo',
      comboId: combo.id,
      name: combo.name,
      desc: combo.desc,
      unitPrice: Number(combo.price),
      quantity: 1,
      unitLocation: uiState.selectedUnit
    });
  }

  saveCartToStorage();
  showToast(`${combo.name} adicionado ao carrinho!`, 'gold');
}

// ==================== MODAL DE ASSENTOS -> ADICIONA INGRESSOS AO CARRINHO ====================
function openBookingModal(movieId) {
  const movie = appData.movies.find(m => m.id === movieId);
  if (!movie) return;

  uiState.booking.movie = movie;
  uiState.booking.dateIndex = uiState.selectedDateIndex;
  uiState.booking.showtimeIndex = 0;
  uiState.booking.selectedSeats = [];

  const ratingInfo = getRatingStyle(movie.rating);
  const badge = document.getElementById('modalRatingBadge');
  badge.className = `w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs shadow ${ratingInfo.bg}`;
  badge.textContent = movie.rating;

  document.getElementById('modalMovieTitle').textContent = movie.title;
  document.getElementById('modalMovieMeta').textContent = `${movie.genre} • ${movie.duration}`;
  document.getElementById('modalCinemaName').innerHTML = `<i class="fa-solid fa-location-dot text-[#e50914] mr-1"></i> ${uiState.selectedUnit}`;

  renderModalDates();
  renderModalShowtimes();
  renderSeatsMap();
  updateBookingModalSummary();

  const modal = document.getElementById('bookingModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderModalDates() {
  const row = document.getElementById('modalDatesRow');
  row.innerHTML = DATES.slice(0, 5).map((d, idx) => {
    const active = idx === uiState.booking.dateIndex;
    return `
      <button type="button" onclick="selectModalDate(${idx})" class="px-3.5 py-2 rounded-xl border text-xs font-bold shrink-0 transition-all ${
        active ? 'bg-[#e50914] border-[#e50914] text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
      }">
        ${d.label} (${d.day}/${d.month})
      </button>
    `;
  }).join('');
}

function selectModalDate(idx) {
  uiState.booking.dateIndex = idx;
  uiState.booking.selectedSeats = [];
  renderModalDates();
  renderSeatsMap();
  updateBookingModalSummary();
}

function renderModalShowtimes() {
  const row = document.getElementById('modalShowtimesRow');
  const showtimes = uiState.booking.movie.showtimes && uiState.booking.movie.showtimes.length > 0
    ? uiState.booking.movie.showtimes
    : [{ time: "19:30", room: "Sala 01", format: "2D", lang: "Dublado" }];

  row.innerHTML = showtimes.map((st, idx) => {
    const active = idx === uiState.booking.showtimeIndex;
    return `
      <button type="button" onclick="selectModalShowtime(${idx})" class="p-2.5 rounded-xl border text-left transition-all ${
        active ? 'bg-[#e50914]/15 border-[#e50914] text-white' : 'bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:border-zinc-600'
      }">
        <div class="font-display text-xl leading-none ${active ? 'text-white' : 'text-zinc-200'}">${st.time}</div>
        <div class="text-[10px] font-semibold mt-1 ${active ? 'text-[#f5c518]' : 'text-zinc-500'}">${st.format} • ${st.lang}</div>
      </button>
    `;
  }).join('');

  const currentSt = showtimes[uiState.booking.showtimeIndex] || showtimes[0];
  document.getElementById('modalRoomInfo').textContent = `${currentSt.room} • ${currentSt.lang}`;
}

function selectModalShowtime(idx) {
  uiState.booking.showtimeIndex = idx;
  uiState.booking.selectedSeats = [];
  renderModalShowtimes();
  renderSeatsMap();
  updateBookingModalSummary();
}

function renderSeatsMap() {
  const container = document.getElementById('seatsMap');
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sessionKey = getCurrentBookingSessionKey();
  const sessionOccupiedSeats = getOccupiedSeatsForSession(sessionKey);

  container.innerHTML = rows.map(row => {
    const seatsHtml = cols.map(col => {
      const seatId = `${row}${col}`;
      const isOccupied = sessionOccupiedSeats.has(seatId);
      const isSelected = uiState.booking.selectedSeats.some(s => s.id === seatId);
      const isWheelchair = row === 'A' && (col === 2 || col === 9);
      const aisleGap = col === 5 ? 'mr-4' : '';

      let btnClass = 'bg-zinc-700 hover:bg-zinc-600 border-zinc-600 text-zinc-200';
      if (isOccupied) btnClass = 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed opacity-45';
      else if (isSelected) btnClass = 'bg-[#e50914] border-red-400 text-white shadow-glow-red scale-105';
      else if (isWheelchair) btnClass = 'bg-sky-600/80 hover:bg-sky-500 border-sky-400 text-white';

      return `
        <button type="button" ${isOccupied ? 'disabled' : ''} onclick="toggleSeat('${seatId}')" class="w-7 h-7 sm:w-8 sm:h-8 rounded-t-lg border text-[10px] font-bold flex items-center justify-center transition-all ${aisleGap} ${btnClass}">
          ${isWheelchair ? '<i class="fa-solid fa-wheelchair text-[10px]"></i>' : col}
        </button>
      `;
    }).join('');

    return `
      <div class="flex items-center justify-center gap-1.5">
        <span class="w-4 text-[11px] font-bold text-zinc-500 text-right mr-1">${row}</span>
        ${seatsHtml}
        <span class="w-4 text-[11px] font-bold text-zinc-500 text-left ml-1">${row}</span>
      </div>
    `;
  }).join('');
}

function toggleSeat(seatId) {
  const idx = uiState.booking.selectedSeats.findIndex(s => s.id === seatId);
  if (idx > -1) {
    uiState.booking.selectedSeats.splice(idx, 1);
  } else {
    if (uiState.booking.selectedSeats.length >= 8) {
      showToast('Máximo de 8 poltronas por seleção.', 'info');
      return;
    }
    uiState.booking.selectedSeats.push({ id: seatId, type: 'inteira' });
  }
  renderSeatsMap();
  updateBookingModalSummary();
}

function changeTicketType(seatId, type) {
  const seat = uiState.booking.selectedSeats.find(s => s.id === seatId);
  if (seat) {
    seat.type = type;
    updateBookingModalSummary();
  }
}

function updateBookingModalSummary() {
  const seats = uiState.booking.selectedSeats;
  const basePrice = Number(uiState.booking.movie?.basePrice || 36.00);
  const listContainer = document.getElementById('ticketTypesList');
  const seatsText = document.getElementById('selectedSeatsText');
  const addBtn = document.getElementById('addTicketsToCartBtn');

  if (seats.length === 0) {
    seatsText.textContent = 'Selecione ao menos 1 poltrona no mapa ao lado.';
    listContainer.innerHTML = '';
    addBtn.disabled = true;
  } else {
    seatsText.innerHTML = `Poltronas: <strong class="text-white">${seats.map(s => s.id).join(', ')}</strong>`;
    addBtn.disabled = false;

    listContainer.innerHTML = seats.map(seat => {
      const price = seat.type === 'inteira' ? basePrice : basePrice / 2;
      return `
        <div class="flex items-center justify-between bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl text-xs">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-[#e50914] text-white font-bold">${seat.id}</span>
            <select onchange="changeTicketType('${seat.id}', this.value)" class="bg-zinc-950 border border-zinc-700 rounded-lg px-2 py-1 text-zinc-200 focus:outline-none">
              <option value="inteira" ${seat.type === 'inteira' ? 'selected' : ''}>Inteira</option>
              <option value="meia" ${seat.type === 'meia' ? 'selected' : ''}>Meia-Entrada</option>
            </select>
          </div>
          <span class="font-bold text-white">R$ ${price.toFixed(2).replace('.', ',')}</span>
        </div>
      `;
    }).join('');
  }

  const ticketsSubtotal = seats.reduce((acc, s) => acc + (s.type === 'inteira' ? basePrice : basePrice / 2), 0);
  document.getElementById('summaryTicketCount').textContent = seats.length;
  document.getElementById('summaryTicketsSubtotal').textContent = `R$ ${ticketsSubtotal.toFixed(2).replace('.', ',')}`;
  document.getElementById('summaryTotal').textContent = `R$ ${ticketsSubtotal.toFixed(2).replace('.', ',')}`;
}

function addTicketsToCart() {
  const { movie, dateIndex, showtimeIndex, selectedSeats } = uiState.booking;
  if (!movie || selectedSeats.length === 0) return;

  const dateObj = DATES[dateIndex];
  const showtimes = movie.showtimes && movie.showtimes.length > 0
    ? movie.showtimes
    : [{ time: "19:30", room: "Sala 01", format: "2D", lang: "Dublado" }];
  const stObj = showtimes[showtimeIndex] || showtimes[0];
  const basePrice = Number(movie.basePrice);
  const dateKey = `${dateObj.day}/${dateObj.month}`;
  const sessionKey = getSessionSeatKey(uiState.selectedUnit, movie.id, dateKey, stObj.time);

  const subtotal = selectedSeats.reduce((acc, s) => acc + (s.type === 'inteira' ? basePrice : basePrice / 2), 0);

  appData.cart.push({
    cartId: `ticket-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: 'ticket',
    movieId: movie.id,
    movieTitle: movie.title,
    rating: movie.rating,
    unitLocation: uiState.selectedUnit,
    dateKey,
    sessionKey,
    dateLabel: `${dateObj.label} (${dateKey})`,
    time: stObj.time,
    room: stObj.room,
    format: stObj.format,
    lang: stObj.lang,
    seats: selectedSeats.map(s => ({
      id: s.id,
      type: s.type,
      price: s.type === 'inteira' ? basePrice : basePrice / 2
    })),
    subtotal
  });

  saveCartToStorage();
  closeBookingModal();
  showToast(`${selectedSeats.length} ingresso(s) para ${movie.title} adicionados ao carrinho!`, 'gold');
}

// ==================== PÁGINA DO CARRINHO UNIFICADO ====================
function updateCartBadges() {
  const totalItems = appData.cart.reduce((sum, item) => {
    return sum + (item.kind === 'combo' ? item.quantity : item.seats.length);
  }, 0);

  const badge = document.getElementById('cartBadge');
  badge.textContent = totalItems;
  badge.classList.toggle('hidden', totalItems === 0);

  document.getElementById('mobileCartCount').textContent = totalItems;
  document.querySelectorAll('.cartCountInline').forEach(el => el.textContent = totalItems);
}

function renderCartPage() {
  const listEl = document.getElementById('cartItemsList');
  const checkoutBtn = document.getElementById('checkoutCartBtn');

  if (appData.cart.length === 0) {
    listEl.innerHTML = `
      <div class="bg-[#121218] border border-zinc-800 rounded-3xl p-12 text-center space-y-4">
        <div class="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500 text-2xl">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <h3 class="text-xl font-bold text-white">Seu carrinho está vazio</h3>
        <p class="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">Escolha um filme em cartaz para reservar suas poltronas ou adicione combos deliciosos da nossa bombonière.</p>
        <div class="flex flex-wrap justify-center gap-3 pt-2">
          <button type="button" onclick="navigateTo('catalogo')" class="px-5 py-2.5 rounded-xl bg-[#e50914] text-white text-xs font-bold uppercase">Ver Filmes</button>
          <button type="button" onclick="navigateTo('bomboniere')" class="px-5 py-2.5 rounded-xl bg-zinc-800 text-[#f5c518] text-xs font-bold uppercase">Ver Combos</button>
        </div>
      </div>
    `;
    checkoutBtn.disabled = true;
    updateCartFinancials();
    return;
  }

  checkoutBtn.disabled = false;
  listEl.innerHTML = appData.cart.map(item => {
    if (item.kind === 'ticket') {
      return `
        <div class="bg-[#121218] border border-zinc-800 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-[#e50914] text-white text-[10px] font-extrabold uppercase">INGRESSO</span>
              <span class="text-xs text-zinc-400"><i class="fa-solid fa-location-dot text-[#e50914] mr-1"></i>${item.unitLocation}</span>
            </div>
            <h4 class="font-display text-2xl text-white tracking-wide">${item.movieTitle}</h4>
            <p class="text-xs text-zinc-300">
              <strong class="text-[#f5c518]">${item.dateLabel} às ${item.time}</strong> • ${item.room} (${item.format} / ${item.lang})
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${item.seats.map(s => `
                <span class="px-2.5 py-0.5 rounded-lg bg-zinc-900 border border-zinc-700 text-[11px] font-semibold text-zinc-200">
                  Poltrona ${s.id} (${s.type === 'inteira' ? 'Inteira' : 'Meia'})
                </span>
              `).join('')}
            </div>
          </div>

          <div class="flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
            <span class="font-display text-2xl text-white">R$ ${item.subtotal.toFixed(2).replace('.', ',')}</span>
            <button type="button" onclick="removeCartItem('${item.cartId}')" class="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-trash-can"></i> Remover
            </button>
          </div>
        </div>
      `;
    } else {
      const comboTotal = item.unitPrice * item.quantity;
      return `
        <div class="bg-[#121218] border border-zinc-800 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-[#f5c518] text-zinc-950 text-[10px] font-extrabold uppercase">BOMBONIÈRE</span>
              <span class="text-xs text-zinc-400">Retirada: ${item.unitLocation}</span>
            </div>
            <h4 class="text-base font-bold text-white">${item.name}</h4>
            <p class="text-xs text-zinc-400">${item.desc}</p>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-5 pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
            <div class="flex items-center gap-2 bg-zinc-950 px-2.5 py-1.5 rounded-xl border border-zinc-800">
              <button type="button" onclick="updateCartComboQty('${item.cartId}', -1)" class="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold">-</button>
              <span class="text-xs font-bold w-5 text-center">${item.quantity}</span>
              <button type="button" onclick="updateCartComboQty('${item.cartId}', 1)" class="w-6 h-6 rounded-lg bg-[#e50914] hover:bg-[#f6121d] text-white text-xs font-bold">+</button>
            </div>

            <div class="text-right">
              <span class="block font-display text-2xl text-white">R$ ${comboTotal.toFixed(2).replace('.', ',')}</span>
              <button type="button" onclick="removeCartItem('${item.cartId}')" class="text-xs text-red-400 hover:text-red-300 font-semibold">Remover</button>
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  updateCartFinancials();
}

function updateCartComboQty(cartId, delta) {
  const idx = appData.cart.findIndex(i => i.cartId === cartId);
  if (idx === -1) return;
  appData.cart[idx].quantity += delta;
  if (appData.cart[idx].quantity <= 0) {
    appData.cart.splice(idx, 1);
  }
  saveCartToStorage();
  renderCartPage();
}

function removeCartItem(cartId) {
  appData.cart = appData.cart.filter(i => i.cartId !== cartId);
  saveCartToStorage();
  renderCartPage();
  showToast('Item removido do carrinho.', 'info');
}

function applyCartCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const fb = document.getElementById('couponFeedback');
  if (code === 'PRIME20') {
    appData.couponApplied = true;
    fb.textContent = 'Cupom PRIME20 aplicado com sucesso! (20% OFF)';
    fb.className = 'text-[11px] mt-1.5 text-emerald-400 font-semibold';
    fb.classList.remove('hidden');
  } else {
    appData.couponApplied = false;
    fb.textContent = 'Cupom inválido. Tente PRIME20.';
    fb.className = 'text-[11px] mt-1.5 text-red-400';
    fb.classList.remove('hidden');
  }
  updateCartFinancials();
}

function updateCartFinancials() {
  const ticketsSum = appData.cart.filter(i => i.kind === 'ticket').reduce((acc, i) => acc + i.subtotal, 0);
  const combosSum = appData.cart.filter(i => i.kind === 'combo').reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
  const fee = ticketsSum * 0.10;
  const rawTotal = ticketsSum + combosSum + fee;
  const discount = appData.couponApplied ? rawTotal * 0.20 : 0;
  const grandTotal = Math.max(0, rawTotal - discount);

  document.getElementById('cartTicketsTotal').textContent = `R$ ${ticketsSum.toFixed(2).replace('.', ',')}`;
  document.getElementById('cartCombosTotal').textContent = `R$ ${combosSum.toFixed(2).replace('.', ',')}`;
  document.getElementById('cartFeeTotal').textContent = `R$ ${fee.toFixed(2).replace('.', ',')}`;

  const discRow = document.getElementById('cartDiscountRow');
  if (appData.couponApplied && rawTotal > 0) {
    discRow.classList.remove('hidden');
    document.getElementById('cartDiscountTotal').textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
  } else {
    discRow.classList.add('hidden');
  }

  document.getElementById('cartGrandTotal').textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
  return grandTotal;
}

function finalizeCartCheckout() {
  if (appData.cart.length === 0 || !appData.currentUser) return;

  const totalPaid = updateCartFinancials();
  const orderCode = `CP-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date();
  const purchaseDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} às ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Marca como ocupados apenas os assentos da sessão específica de cada ingresso
  appData.cart.forEach(item => {
    if (item.kind === 'ticket') {
      const itemDateKey = item.dateKey || (item.dateLabel?.match(/\(([^)]+)\)/)?.[1] || '');
      const sessionKey = item.sessionKey || getSessionSeatKey(item.unitLocation, item.movieId, itemDateKey, item.time);
      if (!appData.occupiedBySession[sessionKey]) {
        appData.occupiedBySession[sessionKey] = [...DEFAULT_OCCUPIED_SEATS];
      }
      const sessionSeatsSet = new Set(appData.occupiedBySession[sessionKey]);
      item.seats.forEach(s => sessionSeatsSet.add(s.id));
      appData.occupiedBySession[sessionKey] = Array.from(sessionSeatsSet);
    }
  });
  saveOccupiedSeatsToStorage();

  const newOrder = {
    orderCode,
    username: appData.currentUser.username,
    buyerName: appData.currentUser.name,
    purchaseDate,
    totalPaid,
    status: 'Confirmado',
    items: JSON.parse(JSON.stringify(appData.cart))
  };

  appData.orders.unshift(newOrder);
  saveOrdersToStorage();

  appData.cart = [];
  appData.couponApplied = false;
  document.getElementById('couponInput').value = '';
  document.getElementById('couponFeedback').classList.add('hidden');
  saveCartToStorage();

  showToast(`Pedido ${orderCode} confirmado com sucesso!`, 'gold');
  navigateTo('ingressos');
}

// ==================== PÁGINA MEUS INGRESSOS & VOUCHERS ====================
function renderMyTicketsPage() {
  const container = document.getElementById('myTicketsContainer');
  const user = appData.currentUser;
  if (!user) return;

  const isManager = user.role === 'admin' || user.role === 'submaster';
  const scope = isManager ? document.getElementById('ordersScopeSelect').value : 'mine';

  const visibleOrders = scope === 'all'
    ? appData.orders
    : appData.orders.filter(o => o.username === user.username);

  if (visibleOrders.length === 0) {
    container.innerHTML = `
      <div class="bg-[#121218] border border-zinc-800 rounded-3xl p-12 text-center space-y-4">
        <div class="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-[#f5c518] text-2xl">
          <i class="fa-solid fa-ticket"></i>
        </div>
        <h3 class="text-xl font-bold text-white">Nenhum ingresso encontrado</h3>
        <p class="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">Você ainda não possui ingressos ou combos comprados. Explore a programação e garanta seu lugar!</p>
        <button type="button" onclick="navigateTo('catalogo')" class="px-6 py-3 rounded-xl bg-[#e50914] text-white text-xs font-bold uppercase tracking-wider">
          Explorar Filmes em Cartaz
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = visibleOrders.map(order => `
    <div class="bg-[#121218] border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
      <div class="bg-[#18181f] px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-3">
          <span class="font-mono text-xs font-extrabold px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-[#f5c518]">#${order.orderCode}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
            <i class="fa-solid fa-circle-check mr-1"></i>${order.status}
          </span>
          <span class="text-xs text-zinc-400">Comprado em ${order.purchaseDate}</span>
          ${scope === 'all' ? `<span class="text-xs text-zinc-300 bg-zinc-800 px-2.5 py-0.5 rounded-md">Cliente: <strong>${order.buyerName}</strong> (${order.username})</span>` : ''}
        </div>
        <div class="text-right">
          <span class="text-[10px] uppercase text-zinc-500 block">Total Pago</span>
          <span class="font-display text-2xl text-white">R$ ${Number(order.totalPaid).toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        ${order.items.map((item, idx) => {
          const uniquePassCode = `${order.orderCode}-${idx + 1}`;
          if (item.kind === 'ticket') {
            return `
              <div class="bg-[#18181f] border border-dashed border-zinc-700 rounded-2xl p-4 flex items-center justify-between gap-4 relative">
                <div class="space-y-1.5">
                  <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#e50914]">INGRESSO DIGITAL • ${item.format}</span>
                  <h4 class="font-display text-2xl text-white leading-none">${item.movieTitle}</h4>
                  <p class="text-xs text-zinc-300 font-medium">${item.dateLabel} às <strong class="text-[#f5c518]">${item.time}</strong></p>
                  <p class="text-[11px] text-zinc-400">${item.unitLocation} • ${item.room}</p>
                  <div class="pt-1">
                    <span class="px-2.5 py-1 rounded-lg bg-[#e50914]/15 border border-[#e50914]/40 text-xs font-bold text-white">
                      Assentos: ${item.seats.map(s => `${s.id} (${s.type === 'inteira' ? 'Int' : 'Meia'})`).join(', ')}
                    </span>
                  </div>
                </div>
                <div class="shrink-0 text-center space-y-1">
                  <div class="bg-white p-2 rounded-xl inline-block">
                    ${generateQrSvg(uniquePassCode)}
                  </div>
                  <span class="block font-mono text-[9px] text-zinc-400">${uniquePassCode}</span>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="bg-[#18181f] border border-dashed border-[#f5c518]/40 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div class="space-y-1.5">
                  <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#f5c518]">VOUCHER BOMBONIÈRE</span>
                  <h4 class="text-base font-bold text-white">${item.quantity}x ${item.name}</h4>
                  <p class="text-xs text-zinc-400">${item.desc}</p>
                  <p class="text-[11px] text-zinc-400 pt-1"><i class="fa-solid fa-location-dot text-[#f5c518] mr-1"></i>Retirar em: ${item.unitLocation}</p>
                </div>
                <div class="shrink-0 text-center space-y-1">
                  <div class="bg-white p-2 rounded-xl inline-block">
                    ${generateQrSvg(uniquePassCode)}
                  </div>
                  <span class="block font-mono text-[9px] text-zinc-400">${uniquePassCode}</span>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>
    </div>
  `).join('');
}

function generateQrSvg(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);
  const v = Math.abs(hash);
  return `
    <svg class="w-16 h-16 text-zinc-950" viewBox="0 0 60 60" fill="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="7" y="7" width="10" height="10" fill="white"/><rect x="9" y="9" width="6" height="6"/>
      <rect x="40" y="4" width="16" height="16" rx="2"/><rect x="43" y="7" width="10" height="10" fill="white"/><rect x="45" y="9" width="6" height="6"/>
      <rect x="4" y="40" width="16" height="16" rx="2"/><rect x="7" y="43" width="10" height="10" fill="white"/><rect x="9" y="45" width="6" height="6"/>
      <rect x="25" y="6" width="5" height="10"/><rect x="33" y="12" width="4" height="8"/>
      <rect x="6" y="25" width="10" height="5"/><rect x="24" y="24" width="12" height="12" rx="1"/>
      <rect x="42" y="26" width="12" height="5"/><rect x="26" y="42" width="8" height="12"/>
      <rect x="40" y="40" width="${8 + (v % 8)}" height="6"/><rect x="44" y="49" width="10" height="6"/>
    </svg>
  `;
}

// ==================== PAINEL DE GESTÃO (ADMIN vs SUBMASTER) ====================
function handleAdminImageUpload(event, targetInputId, previewContainerId) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (ev) {
    const dataUrl = ev.target.result;
    const inputEl = document.getElementById(targetInputId);
    inputEl.value = dataUrl;
    updateAdminImagePreview(targetInputId, previewContainerId);
    showToast('Imagem carregada com sucesso! Clique em Salvar para aplicar.', 'gold');
  };
  reader.readAsDataURL(file);
}

function updateAdminImagePreview(targetInputId, previewContainerId) {
  const val = document.getElementById(targetInputId).value.trim();
  const previewBox = document.getElementById(previewContainerId);
  const imgEl = previewBox.querySelector('img');

  if (val) {
    imgEl.src = val;
    imgEl.onerror = () => previewBox.classList.add('hidden');
    imgEl.onload = () => previewBox.classList.remove('hidden');
  } else {
    previewBox.classList.add('hidden');
  }
}

function applyRolePermissionsToAdminForms() {
  const role = appData.currentUser?.role;
  const isSubmaster = role === 'submaster';

  document.getElementById('submasterNoticeBanner').classList.toggle('hidden', !isSubmaster);
  document.getElementById('adminPanelRoleTag').textContent = isSubmaster
    ? 'Perfil: SUBMASTER (Edição de Preços Bloqueada)'
    : 'Perfil: ADMINISTRADOR (Acesso Irrestrito)';

  const moviePriceInput = document.getElementById('movieFormPrice');
  const comboPriceInput = document.getElementById('comboFormPrice');
  const movieLockBadge = document.getElementById('moviePriceLockBadge');
  const comboLockBadge = document.getElementById('comboPriceLockBadge');

  moviePriceInput.disabled = isSubmaster;
  comboPriceInput.disabled = isSubmaster;
  movieLockBadge.classList.toggle('hidden', !isSubmaster);
  comboLockBadge.classList.toggle('hidden', !isSubmaster);

  if (isSubmaster) {
    moviePriceInput.value = SUBMASTER_FIXED_PRICES.MOVIE_TICKET.toFixed(2);
    comboPriceInput.value = SUBMASTER_FIXED_PRICES.COMBO.toFixed(2);
  }
}

function switchAdminSubTab(tab) {
  const mSec = document.getElementById('adminMoviesSection');
  const cSec = document.getElementById('adminCombosSection');
  const mBtn = document.getElementById('adminSubTabMovies');
  const cBtn = document.getElementById('adminSubTabCombos');

  if (tab === 'movies') {
    mSec.classList.remove('hidden');
    cSec.classList.add('hidden');
    mBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e50914] text-white shadow-glow-red transition-all';
    cBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-all';
  } else {
    cSec.classList.remove('hidden');
    mSec.classList.add('hidden');
    cBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e50914] text-white shadow-glow-red transition-all';
    mBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-all';
  }
}

function renderAdminPanel() {
  applyRolePermissionsToAdminForms();
  renderAdminMoviesList();
  renderAdminCombosList();
}

// CRUD DE FILMES
function renderAdminMoviesList() {
  const container = document.getElementById('adminMoviesList');
  container.innerHTML = appData.movies.map(movie => {
    const thumbSrc = movie.poster || movie.banner || movie.posterUrl || '';
    return `
      <div class="bg-[#121218] border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-16 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 flex items-center justify-center text-zinc-500">
            ${thumbSrc
              ? `<img src="${thumbSrc}" alt="${movie.title}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" class="w-full h-full object-cover"><i class="hidden fa-solid fa-film"></i>`
              : `<i class="fa-solid fa-film"></i>`
            }
          </div>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${movie.status === 'em-cartaz' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-[#f5c518]'}">
                ${movie.status === 'em-cartaz' ? 'Em Cartaz' : 'Em Breve'}
              </span>
              ${movie.featured ? '<span class="px-2 py-0.5 rounded bg-[#e50914]/20 text-[#e50914] text-[10px] font-bold">CARROSSEL</span>' : ''}
              <span class="text-xs font-bold text-[#f5c518]">Ingresso: R$ ${Number(movie.basePrice).toFixed(2).replace('.', ',')}</span>
            </div>
            <h4 class="font-display text-xl text-white tracking-wide">${movie.title}</h4>
            <p class="text-[11px] text-zinc-400">${movie.genre} • ${movie.duration} • Classificação: ${movie.rating}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button type="button" onclick="editAdminMovie(${movie.id})" class="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-white">
            <i class="fa-solid fa-pen mr-1 text-[#f5c518]"></i> Editar
          </button>
          <button type="button" onclick="deleteAdminMovie(${movie.id})" class="px-3.5 py-2 rounded-xl bg-red-950/50 hover:bg-[#e50914] border border-red-900/60 text-xs font-bold text-red-300 hover:text-white transition-colors">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function editAdminMovie(movieId) {
  const movie = appData.movies.find(m => m.id === movieId);
  if (!movie) return;

  document.getElementById('adminMovieFormTitle').textContent = 'EDITAR FILME';
  document.getElementById('cancelEditMovieBtn').classList.remove('hidden');
  document.getElementById('editMovieId').value = movie.id;
  document.getElementById('movieFormTitle').value = movie.title;
  document.getElementById('movieFormGenre').value = movie.genre;
  document.getElementById('movieFormDuration').value = movie.duration;
  document.getElementById('movieFormRating').value = movie.rating;
  document.getElementById('movieFormStatus').value = movie.status;
  document.getElementById('movieFormPosterUrl').value = movie.poster || movie.posterUrl || '';
  document.getElementById('movieFormBannerUrl').value = movie.banner || '';
  document.getElementById('movieFormFeatured').checked = !!movie.featured;
  document.getElementById('movieFormSynopsis').value = movie.synopsis;
  document.getElementById('movieFormTimes').value = (movie.showtimes || []).map(s => s.time).join(', ') || '16:00, 19:30';

  updateAdminImagePreview('movieFormPosterUrl', 'moviePosterPreview');
  updateAdminImagePreview('movieFormBannerUrl', 'movieBannerPreview');

  document.getElementById('movieFormPrice').value = Number(movie.basePrice).toFixed(2);

  document.querySelectorAll('input[name="movieFmt"]').forEach(cb => {
    cb.checked = (movie.formats || []).includes(cb.value);
  });
}

function resetAdminMovieForm() {
  document.getElementById('adminMovieForm').reset();
  document.getElementById('editMovieId').value = '';
  document.getElementById('adminMovieFormTitle').textContent = 'ADICIONAR NOVO FILME';
  document.getElementById('cancelEditMovieBtn').classList.add('hidden');
  document.getElementById('moviePosterPreview').classList.add('hidden');
  document.getElementById('movieBannerPreview').classList.add('hidden');
  document.getElementById('movieFormPrice').value = appData.currentUser?.role === 'submaster'
    ? SUBMASTER_FIXED_PRICES.MOVIE_TICKET.toFixed(2)
    : '36.00';
}

function saveAdminMovie(e) {
  e.preventDefault();
  const role = appData.currentUser?.role;
  if (role !== 'admin' && role !== 'submaster') return;

  const editId = document.getElementById('editMovieId').value;
  const existingMovie = editId ? appData.movies.find(m => m.id === Number(editId)) : null;

  let finalPrice;
  if (role === 'admin') {
    finalPrice = parseFloat(document.getElementById('movieFormPrice').value) || 36.00;
  } else {
    finalPrice = existingMovie ? Number(existingMovie.basePrice) : SUBMASTER_FIXED_PRICES.MOVIE_TICKET;
  }

  const selectedFormats = Array.from(document.querySelectorAll('input[name="movieFmt"]:checked')).map(cb => cb.value);
  const rawTimes = document.getElementById('movieFormTimes').value.split(',').map(t => t.trim()).filter(Boolean);
  const showtimes = rawTimes.map((t, i) => ({
    time: t,
    room: selectedFormats.includes('XD') ? 'Sala 01 XD' : `Sala 0${(i % 4) + 2}`,
    format: selectedFormats[0] || '2D',
    lang: selectedFormats.includes('Dublado') ? 'Dublado' : 'Legendado'
  }));

  const posterVal = document.getElementById('movieFormPosterUrl').value.trim();
  const bannerVal = document.getElementById('movieFormBannerUrl').value.trim();

  const moviePayload = {
    id: existingMovie ? existingMovie.id : Date.now(),
    title: document.getElementById('movieFormTitle').value.trim().toUpperCase(),
    genre: document.getElementById('movieFormGenre').value.trim(),
    duration: document.getElementById('movieFormDuration').value.trim(),
    rating: document.getElementById('movieFormRating').value,
    status: document.getElementById('movieFormStatus').value,
    featured: document.getElementById('movieFormFeatured').checked,
    tagline: existingMovie?.tagline || 'EXIBIÇÃO ESPECIAL CINEPRIME',
    synopsis: document.getElementById('movieFormSynopsis').value.trim(),
    formats: selectedFormats.length > 0 ? selectedFormats : ['2D', 'Dublado'],
    basePrice: finalPrice,
    poster: posterVal,
    banner: bannerVal,
    trailerUrl: existingMovie?.trailerUrl || '',
    palette: existingMovie?.palette || ["#0f172a", "#31102f", "#e50914", "#f5c518"],
    icon: existingMovie?.icon || "fa-film",
    showtimes
  };

  if (existingMovie) {
    const idx = appData.movies.findIndex(m => m.id === existingMovie.id);
    appData.movies[idx] = moviePayload;
    showToast('Filme atualizado com sucesso!', 'gold');
  } else {
    appData.movies.unshift(moviePayload);
    showToast('Novo filme adicionado à programação!', 'gold');
  }

  try {
    saveMoviesToStorage();
  } catch (err) {
    showToast('Aviso: Imagem muito pesada para salvar no navegador. Use arquivos menores ou caminho da pasta img/.', 'info');
  }
  resetAdminMovieForm();
  renderAdminMoviesList();
  initHeroCarousel();
  renderMoviesGrid();
}

function deleteAdminMovie(movieId) {
  appData.movies = appData.movies.filter(m => m.id !== movieId);
  saveMoviesToStorage();
  renderAdminMoviesList();
  initHeroCarousel();
  renderMoviesGrid();
  showToast('Filme removido da programação.', 'info');
}

// CRUD DE COMBOS
function renderAdminCombosList() {
  const container = document.getElementById('adminCombosList');
  container.innerHTML = appData.combos.map(combo => {
    const imgSrc = (combo.imagem || '').trim();
    return `
      <div class="bg-[#121218] border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-16 h-12 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 flex items-center justify-center text-zinc-500">
            ${imgSrc
              ? `<img src="${imgSrc}" alt="${combo.name}" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" class="w-full h-full object-cover"><i class="hidden fa-solid ${combo.icon || 'fa-bucket'}"></i>`
              : `<i class="fa-solid ${combo.icon || 'fa-bucket'}"></i>`
            }
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-[#f5c518]/15 text-[#f5c518] text-[10px] font-bold uppercase">${combo.badge || 'COMBO'}</span>
              <span class="text-xs font-extrabold text-white">R$ ${Number(combo.price).toFixed(2).replace('.', ',')}</span>
            </div>
            <h4 class="text-base font-bold text-white">${combo.name}</h4>
            <p class="text-xs text-zinc-400 line-clamp-1">${combo.desc}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button type="button" onclick="editAdminCombo('${combo.id}')" class="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-white">
            <i class="fa-solid fa-pen mr-1 text-[#f5c518]"></i> Editar
          </button>
          <button type="button" onclick="deleteAdminCombo('${combo.id}')" class="px-3.5 py-2 rounded-xl bg-red-950/50 hover:bg-[#e50914] border border-red-900/60 text-xs font-bold text-red-300 hover:text-white transition-colors">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function editAdminCombo(comboId) {
  const combo = appData.combos.find(c => c.id === comboId);
  if (!combo) return;

  document.getElementById('adminComboFormTitle').textContent = 'EDITAR COMBO';
  document.getElementById('cancelEditComboBtn').classList.remove('hidden');
  document.getElementById('editComboId').value = combo.id;
  document.getElementById('comboFormName').value = combo.name;
  document.getElementById('comboFormBadge').value = combo.badge || 'COMBO';
  document.getElementById('comboFormIcon').value = combo.icon || 'fa-bucket';
  document.getElementById('comboFormImageUrl').value = combo.imagem || '';
  document.getElementById('comboFormDesc').value = combo.desc;
  document.getElementById('comboFormPrice').value = Number(combo.price).toFixed(2);

  updateAdminImagePreview('comboFormImageUrl', 'comboImagePreview');
}

function resetAdminComboForm() {
  document.getElementById('adminComboForm').reset();
  document.getElementById('editComboId').value = '';
  document.getElementById('adminComboFormTitle').textContent = 'ADICIONAR NOVO COMBO';
  document.getElementById('cancelEditComboBtn').classList.add('hidden');
  document.getElementById('comboImagePreview').classList.add('hidden');
  document.getElementById('comboFormPrice').value = appData.currentUser?.role === 'submaster'
    ? SUBMASTER_FIXED_PRICES.COMBO.toFixed(2)
    : '45.00';
}

function saveAdminCombo(e) {
  e.preventDefault();
  const role = appData.currentUser?.role;
  if (role !== 'admin' && role !== 'submaster') return;

  const editId = document.getElementById('editComboId').value;
  const existingCombo = editId ? appData.combos.find(c => c.id === editId) : null;

  let finalPrice;
  if (role === 'admin') {
    finalPrice = parseFloat(document.getElementById('comboFormPrice').value) || 45.00;
  } else {
    finalPrice = existingCombo ? Number(existingCombo.price) : SUBMASTER_FIXED_PRICES.COMBO;
  }

  const comboPayload = {
    id: existingCombo ? existingCombo.id : `combo-${Date.now()}`,
    name: document.getElementById('comboFormName').value.trim(),
    badge: document.getElementById('comboFormBadge').value.trim().toUpperCase() || 'COMBO',
    price: finalPrice,
    imagem: document.getElementById('comboFormImageUrl').value.trim(),
    icon: document.getElementById('comboFormIcon').value,
    accent: existingCombo?.accent || 'from-[#e50914] to-red-900',
    desc: document.getElementById('comboFormDesc').value.trim()
  };

  if (existingCombo) {
    const idx = appData.combos.findIndex(c => c.id === existingCombo.id);
    appData.combos[idx] = comboPayload;
    showToast('Combo atualizado com sucesso!', 'gold');
  } else {
    appData.combos.unshift(comboPayload);
    showToast('Novo combo adicionado à Bombonière!', 'gold');
  }

  try {
    saveCombosToStorage();
  } catch (err) {
    showToast('Aviso: Imagem muito pesada para salvar no navegador. Use arquivos menores ou caminho da pasta img/.', 'info');
  }
  resetAdminComboForm();
  renderAdminCombosList();
  renderCombosPage();
}

function deleteAdminCombo(comboId) {
  appData.combos = appData.combos.filter(c => c.id !== comboId);
  saveCombosToStorage();
  renderAdminCombosList();
  renderCombosPage();
  showToast('Combo removido da Bombonière.', 'info');
}

// ==================== TRAILER & TOASTS ====================
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : null;
}

function openTrailerModal(movieId) {
  const movie = appData.movies.find(m => m.id === movieId);
  if (!movie) return;

  document.getElementById('trailerModalTitle').textContent = `TRAILER • ${movie.title}`;
  document.getElementById('trailerModalSynopsis').textContent = movie.synopsis;

  const buyBtn = document.getElementById('trailerBuyBtn');
  if (movie.status === 'em-breve') {
    buyBtn.classList.add('hidden');
  } else {
    buyBtn.classList.remove('hidden');
    buyBtn.onclick = () => {
      closeTrailerModal();
      openBookingModal(movie.id);
    };
  }

  const defaultMovie = DEFAULT_MOVIES.find(d => d.id === movie.id);
  const rawTrailer = (movie.trailerUrl || defaultMovie?.trailerUrl || '').trim();
  const ytEmbedUrl = getYouTubeEmbedUrl(rawTrailer);
  const stage = document.getElementById('trailerStage');

  if (ytEmbedUrl) {
    stage.innerHTML = `
      <iframe
        class="absolute inset-0 w-full h-full"
        src="${ytEmbedUrl}"
        title="Trailer ${movie.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `;
  } else {
    const [, c2, c3] = movie.palette || ["#0f172a", "#1e1b4b", "#e50914", "#f5c518"];
    const bannerSrc = (movie.banner || movie.poster || '').trim();
    stage.innerHTML = `
      ${bannerSrc ? `<img src="${bannerSrc}" alt="${movie.title}" onerror="this.style.display='none'" class="absolute inset-0 w-full h-full object-cover opacity-35">` : ''}
      <div class="absolute inset-0" style="background: radial-gradient(circle at center, ${c3}55 0%, ${c2}cc 55%, #000 100%);"></div>
      <div class="relative z-10 space-y-4 max-w-lg">
        <div class="w-20 h-20 rounded-full bg-[#e50914]/90 text-white flex items-center justify-center mx-auto text-3xl shadow-glow-red animate-pulse">
          <i class="fa-solid ${movie.icon || 'fa-film'}"></i>
        </div>
        <span class="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-bold uppercase tracking-widest text-[#f5c518]">
          Prévia Oficial 4K Dolby Atmos
        </span>
        <h4 class="font-display text-3xl sm:text-4xl text-white tracking-wider">${movie.title}</h4>
        <p class="text-xs text-zinc-300 italic">"${movie.tagline || 'Em exibição no CinePrime'}"</p>
      </div>
    `;
  }

  const modal = document.getElementById('trailerModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeTrailerModal() {
  const modal = document.getElementById('trailerModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.getElementById('trailerStage').innerHTML = '';
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  const accent = type === 'gold' ? 'border-[#f5c518]/60 text-[#f5c518]' : 'border-[#e50914]/60 text-white';
  const icon = type === 'gold' ? 'fa-crown text-[#f5c518]' : 'fa-circle-info text-[#e50914]';

  toast.className = `pointer-events-auto flex items-center gap-3 bg-[#18181f]/95 backdrop-blur-md border ${accent} px-4 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-medium max-w-sm transition-all duration-300`;
  toast.innerHTML = `<i class="fa-solid ${icon} text-base"></i><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3600);
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.add('hidden');
}

// ==================== INICIALIZAÇÃO ====================
window.addEventListener('DOMContentLoaded', () => {
  loadPersistedData();

  if (appData.currentUser) {
    enterAuthenticatedApp();
  } else {
    document.getElementById('authGatekeeper').classList.remove('hidden');
  }

  document.getElementById('prevSlideBtn').addEventListener('click', () => {
    goToSlide(uiState.currentSlide - 1);
    startCarouselAutoplay();
  });
  document.getElementById('nextSlideBtn').addEventListener('click', () => {
    goToSlide(uiState.currentSlide + 1);
    startCarouselAutoplay();
  });

  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  const syncUnit = (val) => {
    uiState.selectedUnit = val;
    document.getElementById('cinemaSelect').value = val;
    document.getElementById('cinemaSelectMobile').value = val;
    document.getElementById('heroCurrentUnit').textContent = val;
    showToast(`Unidade alterada para ${val}`);
  };
  document.getElementById('cinemaSelect').addEventListener('change', e => syncUnit(e.target.value));
  document.getElementById('cinemaSelectMobile').addEventListener('change', e => syncUnit(e.target.value));

  document.getElementById('searchInput').addEventListener('input', e => {
    uiState.searchQuery = e.target.value;
    renderMoviesGrid();
  });

  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      uiState.activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-chip').forEach(b => {
        b.className = 'filter-chip px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-700/80 hover:border-zinc-500 transition-all';
      });
      btn.className = 'filter-chip active px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#e50914] text-white transition-all';
      renderMoviesGrid();
    });
  });

  document.getElementById('bookingModal').addEventListener('click', e => {
    if (e.target.id === 'bookingModal') closeBookingModal();
  });
  document.getElementById('trailerModal').addEventListener('click', e => {
    if (e.target.id === 'trailerModal') closeTrailerModal();
  });
});