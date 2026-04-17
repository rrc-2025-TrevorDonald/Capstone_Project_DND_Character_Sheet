export interface UserLogin {
    email: string;
    idToken: string;
};

export interface UserCreate {
    email: string;
    password: string;
};

export interface UserApiCallModel {
    email: string;
    password: string;
    returnSecureToken: boolean;
};