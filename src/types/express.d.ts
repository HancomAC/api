import Auth from "$types/auth";

declare namespace Express {
    interface Request {
        auth?: Auth;
    }
}

