import { findById } from '../utils.js';
import { signs } from '../data.js';

console.log('hello from signs.js');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'), signs);

const signName = findById(params.get('id'), signs);