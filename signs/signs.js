import { findById } from '../utils.js';
import { signs } from '../data.js';

const signName = document.getElementById('sign-name');
const signDate = document.getElementById('sign-date');
const signImage = document.getElementById('sign-image');
const signSaying = document.getElementById('sign-saying');
const signHouse = document.getElementById('sign-house');
const signTraits = document.getElementById('sign-traits');
//console.log('hello from signs.js');
//console.log(signName);

const params = new URLSearchParams(window.location.search);
//console.log(params.get('id'), signs);

const find = findById(params.get('id'), signs);

signName.textContent = find.name;
signImage.src = `../assets/${find.name}.jpg`;
signDate.textContent = find.date;
signSaying.textContent = `"${find.saying}"`;
signSaying.classList.add = 'saying';
signHouse.textContent = `${find.name} is a ${find.type} sign in the ${find.house} house associated with:`;

for (let trait of find.traits) {
    const li = document.createElement('li');
    li.textContent = trait;
    signTraits.append(li);
}

