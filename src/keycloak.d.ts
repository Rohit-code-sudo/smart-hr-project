declare module "keycloak-js" {
    interface KeycloakConfig {
      url?: string;
      realm: string;
      clientId: string;
    }
  
    interface KeycloakInstance {
      init(options?: KeycloakInitOptions): Promise<boolean>;
      login(options?: KeycloakLoginOptions): Promise<void>;
      logout(options?: KeycloakLogoutOptions): Promise<void>;
      token?: string;
      refreshToken?: string;
      tokenParsed?: any;
      authenticated?: boolean;
      updateToken(minValidity: number): Promise<boolean>;
    }
  
    interface KeycloakInitOptions {
      onLoad?: "login-required" | "check-sso";
      checkLoginIframe?: boolean;
      silentCheckSsoRedirectUri?: string;
    }
  
    interface KeycloakLoginOptions {
      redirectUri?: string;
    }
  
    interface KeycloakLogoutOptions {
      redirectUri?: string;
    }
  
    const Keycloak: (config?: KeycloakConfig) => KeycloakInstance;
  
    export default Keycloak;
  }
  