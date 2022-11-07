"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    id;
    name;
    email;
    password;
    profile;
    status;
    createdAt;
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.UserDTO = UserDTO;
