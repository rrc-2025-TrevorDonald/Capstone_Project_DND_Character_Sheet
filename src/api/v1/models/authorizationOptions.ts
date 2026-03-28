export interface AuthorizationOptions {
    hasRole: Array<"player" | "dm" | "admin">;
    allowSameUser?: boolean;
}