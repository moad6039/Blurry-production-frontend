// lib/api.ts
// ═══════════════════════════════════════════════════════════
// Service API centralisé — fait le lien entre le frontend
// Next.js et l'API Express backend
// ═══════════════════════════════════════════════════════════

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// ── Types
export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  date?: string;
  budget?: string;
  message: string;
}

export interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  thumbnailUrl?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
  location?: string;
  date?: string;
  published?: boolean;
  createdAt: string;
}

export interface TestimonialItem {
  _id: string;
  author: string;
  role?: string;
  text: string;
  rating?: number;
  category?: string;
  avatarUrl?: string;
  published?: boolean;
  order?: number;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  count?: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// ── Helper fetch avec gestion d'erreurs
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Ajouter le token JWT si présent (admin)
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('bp_admin_token');
    if (token) {
      (defaultHeaders as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const res = await fetch(url, config);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || `Erreur ${res.status}`);
  }

  return json;
}

// ══════════════════════════════════════
//  CONTACT
// ══════════════════════════════════════

export const contactApi = {
  /** Envoyer le formulaire de contact (public) */
  send: (payload: ContactPayload) =>
    apiFetch<{ id: string; createdAt: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  /** Lister tous les messages (admin) */
  getAll: (params?: { page?: number; limit?: number; status?: string }) => {
    const query = new URLSearchParams(
      Object.entries(params || {}).reduce((acc, [k, v]) => {
        if (v !== undefined) acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    return apiFetch<any[]>(`/contact/admin${query ? `?${query}` : ''}`);
  },

  /** Lire un message par ID (admin) */
  getById: (id: string) => apiFetch<any>(`/contact/${id}`),

  /** Changer le statut d'un message (admin) */
  updateStatus: (id: string, status: string) =>
    apiFetch<any>(`/contact/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  /** Supprimer un message (admin) */
  delete: (id: string) =>
    apiFetch<null>(`/contact/${id}`, { method: 'DELETE' }),
};

// ══════════════════════════════════════
//  PORTFOLIO
// ══════════════════════════════════════

export const portfolioApi = {
  /** Lister les items (public) */
  getAll: (params?: { category?: string; featured?: boolean; limit?: number }) => {
    const query = new URLSearchParams(
      Object.entries(params || {}).reduce((acc, [k, v]) => {
        if (v !== undefined) acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    return apiFetch<PortfolioItem[]>(`/portfolio${query ? `?${query}` : ''}`);
  },

  /** Un item par ID (public) */
  getById: (id: string) => apiFetch<PortfolioItem>(`/portfolio/${id}`),

  /** Créer un item (admin) */
  create: (data: Partial<PortfolioItem>) =>
    apiFetch<PortfolioItem>('/portfolio', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /** Mettre à jour un item (admin) */
  update: (id: string, data: Partial<PortfolioItem>) =>
    apiFetch<PortfolioItem>(`/portfolio/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  /** Supprimer un item (admin) */
  delete: (id: string) =>
    apiFetch<null>(`/portfolio/${id}`, { method: 'DELETE' }),
};

// ══════════════════════════════════════
//  TÉMOIGNAGES
// ══════════════════════════════════════

export const testimonialsApi = {
  /** Lister les témoignages (public) */
  getAll: (params?: { category?: string; limit?: number }) => {
    const query = new URLSearchParams(
      Object.entries(params || {}).reduce((acc, [k, v]) => {
        if (v !== undefined) acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    return apiFetch<TestimonialItem[]>(`/testimonials${query ? `?${query}` : ''}`);
  },

  /** Créer un témoignage (admin) */
  create: (data: Partial<TestimonialItem>) =>
    apiFetch<TestimonialItem>('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /** Mettre à jour (admin) */
  update: (id: string, data: Partial<TestimonialItem>) =>
    apiFetch<TestimonialItem>(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  /** Supprimer (admin) */
  delete: (id: string) =>
    apiFetch<null>(`/testimonials/${id}`, { method: 'DELETE' }),
};

// ══════════════════════════════════════
// 🔐 AUTH ADMIN
// ══════════════════════════════════════

export const authApi = {
  /** Se connecter en tant qu'admin */
  login: async (email: string, password: string) => {
    const res = await apiFetch<{ token: string; data: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    // Stocker le token dans localStorage
    if (res.data?.token) {
      localStorage.setItem('bp_admin_token', res.data.token);
    }
    return res;
  },

  /** Récupérer le profil admin */
  getMe: () => apiFetch<any>('/auth/me'),

  /** Se déconnecter */
  logout: () => {
    localStorage.removeItem('bp_admin_token');
  },

  /** Vérifier si connecté */
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('bp_admin_token');
  },
};

// ══════════════════════════════════════
// HEALTH CHECK
// ══════════════════════════════════════

export const healthCheck = () =>
  apiFetch<{ status: string; env: string; timestamp: string }>('/health');
