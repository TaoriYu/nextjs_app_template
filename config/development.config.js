"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apis = __importStar(require("./apis"));
const composeTransformations_1 = require("./utils/composeTransformations");
const defaultConfig = {
    publicRuntimeConfig: {
        apis: {},
    },
    serverRuntimeConfig: {
        apis: {},
    },
};
exports.appConfig = composeTransformations_1.composeTransformations(defaultConfig, [apis, 'apis']);
exports.default = exports.appConfig;
