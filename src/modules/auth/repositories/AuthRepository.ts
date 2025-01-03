import jwt from 'jsonwebtoken';

const SECRET = '2a4bc6hy8sw1ee5fa6e8ydh5m';
const EXPIRESIN = 3600;

export function jwtSign(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRESIN });
}

export function jwtVerify(request, response, next) {
  const token = request.headers['authorization'];
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error)
      return response
        .status(401)
        .json({ message: error.message || 'unknown error' });
    request.userId = decoded.userId;
    next();
  });
}
