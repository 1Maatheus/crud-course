"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); //ES
const DB_FILE_PATH = "./core/db";
console.log("CRUD!");
function create(content) {
    fs_1.default.writeFileSync(DB_FILE_PATH, content);
    return content;
}
console.log(create("Segundo teste!"));
