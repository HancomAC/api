import Auth from "$types/auth";

declare global {
    namespace Express {
        interface Request {
            auth?: Auth;
        }
    }
}

