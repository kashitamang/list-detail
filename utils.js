export function renderSign(sign) {
    const div = document.createElement('div');
    div.classList.add('sign');

    const h2 = document.createElement('h2');
    h2.textContent = sign.name;

    const h3 = document.createElement('h3');
    h3.textContent = sign.date;

    const img = document.createElement('img');
    img.src = sign.image;

    const h4 = document.createElement('h4');
    h4.classList.add('saying');
    h4.textContent = `"${sign.saying}"`;
    
    div.append(h2, h3, img, h4);
    return div;
}

export function renderListItem(sign) {
    const div = document.createElement('div');
    div.classList.add('sign');

    const h2 = document.createElement('h2');
    h2.textContent = sign.name;

    const h3 = document.createElement('h3');
    h3.textContent = sign.date;

    const img = document.createElement('img');
    img.src = sign.image;

    const h4 = document.createElement('h4');
    h4.classList.add('saying');
    h4.textContent = `"${sign.saying}"`;

    const p = document.createElement('p');
    p.textContent = `${sign.name} is a ${sign.type} sign in the ${sign.house} house associated with:`;

    const ul = document.createElement('ul');
    for (let trait of sign.traits) {
        const li = document.createElement('li');
        li.textContent = trait;
        ul.append(li);
    }
    
    const a = document.createElement('a');
    a.href = `./signs/?id=${sign.id}`;

    a.append(h2, h3, img, h4, p, ul);
    div.append(a);
    return div;
}