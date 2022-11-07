"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDTO = void 0;
class ProfileDTO {
    id;
    name;
    status;
    createdAt;
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.ProfileDTO = ProfileDTO;
