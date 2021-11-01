/// <reference types="express" />
import { Response } from '@loopback/rest';
import { UserPermissionsFn } from 'loopback4-authorization';
import { AuthClient } from '../../models';
import { AuthClientRepository, RefreshTokenRepository, UserRepository, UserTenantPermissionRepository, UserTenantRepository } from '../../repositories';
import { AuthRefreshTokenRequest, AuthTokenRequest, LoginRequest } from './';
import { AuthUser } from './models/auth-user.model';
import { TokenResponse } from './models/token-response.dto';
export declare class LoginController {
    private readonly client;
    private readonly user;
    private readonly getUserPermissions;
    authClientRepository: AuthClientRepository;
    userRepo: UserRepository;
    userTenantRepo: UserTenantRepository;
    utPermsRepo: UserTenantPermissionRepository;
    refreshTokenRepo: RefreshTokenRepository;
    constructor(client: AuthClient | undefined, user: AuthUser | undefined, getUserPermissions: UserPermissionsFn<string>, authClientRepository: AuthClientRepository, userRepo: UserRepository, userTenantRepo: UserTenantRepository, utPermsRepo: UserTenantPermissionRepository, refreshTokenRepo: RefreshTokenRepository);
    login(req: LoginRequest): Promise<{
        code: string;
    }>;
    loginWithClientUser(req: LoginRequest): Promise<TokenResponse>;
    getToken(req: AuthTokenRequest): Promise<TokenResponse>;
    exchangeToken(req: AuthRefreshTokenRequest): Promise<TokenResponse>;
    loginViaGoogle(clientId?: string, clientSecret?: string): Promise<void>;
    googleCallback(code: string, state: string, response: Response): Promise<void>;
    private createJWT;
}
