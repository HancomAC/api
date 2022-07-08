import jwt from 'jsonwebtoken';

const secretKey = 'secretKey';

export function sign(data, expire) {
    return jwt.sign(data, secretKey, {
        ...(expire ? {expiresIn: expire} : {})
    });
}

export function verify(token) {
    return jwt.verify(token, secretKey);
}
