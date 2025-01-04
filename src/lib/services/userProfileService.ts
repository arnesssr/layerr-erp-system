import { create } from 'zustand';

interface InventoryUserProfile {
    id: string;
    username: string;
    role: 'admin' | 'manager' | 'clerk' | 'viewer';
    permissions: {
        canCreate: boolean;
        canEdit: boolean;
        canDelete: boolean;
        canExport: boolean;
        canViewCosts: boolean;
        canManageProfiles: boolean;
    };
    preferences: {
        defaultView: 'list' | 'grid';
        itemsPerPage: number;
        favoriteCategories: string[];
        notifications: boolean;
    };
    lastActive: string;
}

interface UserProfileState {
    profiles: InventoryUserProfile[];
    currentProfile: InventoryUserProfile | null;
    addProfile: (profile: Omit<InventoryUserProfile, 'id'>) => void;
    updateProfile: (id: string, updates: Partial<InventoryUserProfile>) => void;
    deleteProfile: (id: string) => void;
    setCurrentProfile: (id: string) => void;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
    profiles: [],
    currentProfile: null,
    addProfile: (profile) => set((state) => ({
        profiles: [...state.profiles, { 
            ...profile, 
            id: crypto.randomUUID(),
            lastActive: new Date().toISOString()
        }]
    })),
    updateProfile: (id, updates) => set((state) => ({
        profiles: state.profiles.map(profile => 
            profile.id === id ? { ...profile, ...updates } : profile
        )
    })),
    deleteProfile: (id) => set((state) => ({
        profiles: state.profiles.filter(profile => profile.id !== id)
    })),
    setCurrentProfile: (id) => set((state) => ({
        currentProfile: state.profiles.find(profile => profile.id === id) || null
    }))
}));
