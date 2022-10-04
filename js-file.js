function myFunction() {

    const container = document.querySelector('#container');
    const p = document.createElement('p');
    p.textContent = 'This paragraph was added via js';
    p.setAttribute('style', 'color: red');
    container.appendChild(p);
    const div = document.createElement('div');
    div.classList.add('content');
    div.textContent = 'outer div, child of container';
    const inner = document.createElement('div');
    inner.textContent = 'inner div, child of content';
    inner.setAttribute('style', 'background-color: blue; color: pink');
    container.appendChild(div);
    div.appendChild(inner);
    
}

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
    console.log(e);
});