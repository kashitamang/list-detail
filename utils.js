export function renderSign(sign) {
    const div = document.createElement('div');
    div.classList.add('sign');

    const h2 = document.createElement('h2');
    h2.textContent = sign.name;

    const h3 = document.createElement('h3');
    h3.textContent = sign.date;

    const img = document.createElement('img');
    img.src = sign.image;

    const a = document.createElement('a');
    a.href = `./signs/?id=${sign.id}`;

    div.append(a, h2, h3, img);
    a.append(img);

    return div;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}