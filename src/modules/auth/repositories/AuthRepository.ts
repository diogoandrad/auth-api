import jwt from "jsonwebtoken";

const SECRET = '2a4bc6hy8sw1ee5fa6e8ydh5m';
const EXPIRESIN = 3600

export function jwtSign(payload) {
    return jwt.sign(payload, SECRET, {expiresIn: EXPIRESIN});
}

export function jwtVerify(request, response, next) {
    const token = request.headers['x-access-token'];
    jwt.verify(token, SECRET, (error, decoded) => {
        if (error) return response.status(401).json({ message: "Invalid token." })
        request.userId = decoded.userId;
        next();
    });
}