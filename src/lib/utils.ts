import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define permission constant values
export const PERMISSIONS = {
  VIEW_AUDIT: 'view_audit',
  EXPORT_AUDIT: 'export_audit',
  FILTER_AUDIT: 'filter_audit',
  MANAGE_AUDIT: 'manage_audit'
} as const;

// Define permission type from the values
export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];

// Define the roles and their permissions
export const ROLES = {
  ADMIN: [
    PERMISSIONS.VIEW_AUDIT,
    PERMISSIONS.EXPORT_AUDIT,
    PERMISSIONS.FILTER_AUDIT,
    PERMISSIONS.MANAGE_AUDIT
  ],
  MANAGER: [
    PERMISSIONS.VIEW_AUDIT,
    PERMISSIONS.EXPORT_AUDIT,
    PERMISSIONS.FILTER_AUDIT
  ],
  USER: [
    PERMISSIONS.VIEW_AUDIT
  ]
} as const;

export type Role = keyof typeof ROLES;

// Fixed hasPermission function with proper type handling
export function hasPermission(role: Role, permission: Permission): boolean {
  // Create a new mutable array from the readonly array using spread operator
  const permissions = [...ROLES[role]] as Array<Permission>;
  return permissions.includes(permission);
}

// Helper function to get all permissions for a role
export function getRolePermissions(role: Role): Permission[] {
  return [...ROLES[role]] as Array<Permission>;
}
