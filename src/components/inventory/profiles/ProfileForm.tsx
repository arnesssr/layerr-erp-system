import { useState } from 'react';
import { useUserProfileStore } from '@/lib/services/userProfileService';

interface ProfileFormProps {
    profileId?: string;
    onSubmit?: () => void;
}

export function ProfileForm({ profileId, onSubmit }: ProfileFormProps) {
    const { profiles, addProfile, updateProfile } = useUserProfileStore();
    const existingProfile = profileId ? profiles.find(p => p.id === profileId) : null;
    
    const [formData, setFormData] = useState({
        username: existingProfile?.username || '',
        role: existingProfile?.role || 'viewer',
        permissions: existingProfile?.permissions || {
            canCreate: false,
            canEdit: false,
            canDelete: false,
            canExport: true,
            canViewCosts: false,
            canManageProfiles: false
        },
        preferences: existingProfile?.preferences || {
            defaultView: 'list',
            itemsPerPage: 10,
            favoriteCategories: [],
            notifications: true
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const profileData = {
            ...formData,
            lastActive: new Date().toISOString() // Ensure lastActive is always a string
        };
        
        if (profileId) {
            updateProfile(profileId, profileData);
        } else {
            addProfile(profileData);
        }
        onSubmit?.();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        username: e.target.value 
                    }))}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                    value={formData.role}
                    onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        role: e.target.value as any 
                    }))}
                    className="w-full p-2 border rounded"
                >
                    <option value="viewer">Viewer</option>
                    <option value="clerk">Clerk</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <button 
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {profileId ? 'Update Profile' : 'Create Profile'}
            </button>
        </form>
    );
}
