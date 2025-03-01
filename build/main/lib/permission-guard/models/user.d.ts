import { NamespaceRole, RolePermission } from "./role";
export interface AccountBan {
    ban: string;
    banId: string;
    endDate: string;
}
export declare type AdminUser = {
    authType: string;
    bans: AccountBan[];
    country: string;
    createdAt: string;
    dateOfBirth: string;
    displayName: string;
    emailAddress: string;
    emailVerified: boolean;
    enabled: boolean;
    lastDateOfBirthChangedTime: string;
    lastEnabledChangedTime: string;
    namespace: string;
    namespaceRoles: NamespaceRole[] | null;
    oldEmailAddress: string;
    permissions: RolePermission[];
    phoneVerified: boolean;
    userId: string;
    roles: string[];
} & Partial<{
    newEmailAddress: string;
    phoneNumber: string;
    platformId: string;
    platformUserId: string;
    userName: string;
    deletionStatus: boolean;
}>;
