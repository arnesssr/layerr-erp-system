import { useUserProfileStore } from '@/lib/services/userProfileService';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, memo } from 'react';

export const ProfileList = memo(() => {
    const { profiles, deleteProfile, setCurrentProfile } = useUserProfileStore();
    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: profiles.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 80,
        overscan: 5
    });

    return (
        <div ref={parentRef} className="h-[400px] overflow-auto">
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const profile = profiles[virtualRow.index];
                    return (
                        <div
                            key={profile.id}
                            className="absolute top-0 left-0 w-full"
                            style={{
                                height: `${virtualRow.size}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <div className="flex items-center justify-between p-4 border rounded">
                                <div>
                                    <h3 className="font-medium">{profile.username}</h3>
                                    <p className="text-sm text-gray-500">Role: {profile.role}</p>
                                    <p className="text-xs text-gray-400">
                                        Last active: {new Date(profile.lastActive).toLocaleString()}
                                    </p>
                                </div>
                                <div className="space-x-2">
                                    <button 
                                        className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                                        onClick={() => setCurrentProfile(profile.id)}
                                    >
                                        Select
                                    </button>
                                    <button 
                                        className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                                        onClick={() => deleteProfile(profile.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

ProfileList.displayName = 'ProfileList';
