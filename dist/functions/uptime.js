"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Return_1 = require("../structures/Return");
const createNativeFunction_1 = __importDefault(require("../util/functions/createNativeFunction"));
exports.default = (0, createNativeFunction_1.default)({
    name: '$uptime',
    description: 'Returns the Client Uptime (MS).',
    returns: 'NUMBER',
    execute: function () {
        return Return_1.Return.string(this.bot.client.uptime);
    }
});
//# sourceMappingURL=uptime.js.map