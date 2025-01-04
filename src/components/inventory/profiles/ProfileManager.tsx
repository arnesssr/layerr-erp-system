import { useState } from 'react';
import { useUserProfileStore } from '@/lib/services/userProfileService';
import { ProfileList } from './ProfileList';
import { ProfileForm } from './ProfileForm';

export function ProfileManager() {
    const [isCreating, setIsCreating] = useState(false);
    const { currentProfile } = useUserProfileStore();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">User Profiles</h2>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setIsCreating(true)}
                >
                    Add Profile
                </button>
            </div>

            {isCreating && (
                <div className="mt-4 p-4 border rounded">
                    <ProfileForm onSubmit={() => setIsCreating(false)} />
                </div>
            )}

            <div className="mt-6">
                <ProfileList />
            </div>

            {currentProfile && (
                <div className="mt-4 p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Current Profile: {currentProfile.username}</h3>
                    <p className="text-sm text-gray-600">
                        Last Active: {new Date(currentProfile.lastActive).toLocaleString()}
                    </p>
                </div>
            )}
        </div>
    );
}
