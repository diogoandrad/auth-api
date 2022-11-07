"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const DataSource_1 = require("./database/DataSource");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
exports.app = app;
DataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database started!');
})
    .catch(error => {
    let message = 'Unknown Error.';
    if (error instanceof Error)
        message = error.message;
    console.log(message);
});
app.use(express_1.default.json());
app.use(routes_1.routes);
