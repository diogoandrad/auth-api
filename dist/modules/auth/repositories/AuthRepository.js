"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = exports.jwtSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = '2a4bc6hy8sw1ee5fa6e8ydh5m';
const EXPIRESIN = 3600;
function jwtSign(payload) {
    return jsonwebtoken_1.default.sign(payload, SECRET, { expiresIn: EXPIRESIN });
}
exports.jwtSign = jwtSign;
function jwtVerify(request, response, next) {
    const token = request.headers['x-access-token'];
    jsonwebtoken_1.default.verify(token, SECRET, (error, decoded) => {
        if (error)
            return response.status(401).json({ message: "Invalid token." });
        request.userId = decoded.userId;
        next();
    });
}
exports.jwtVerify = jwtVerify;
