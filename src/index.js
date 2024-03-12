"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var a = lodash_1.default.multiply(2, 5);
var b = lodash_1.default.reverse(arr1);
var c = lodash_1.default.reverse(arr2);
var d = lodash_1.default.dropRight(['a', 'b', 'c', 4, 5, 6], 2);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
