const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const divEl = document.createElement('div');
    divEl.classList.add('popup');
    divEl.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
    document.querySelector('body').appendChild(divEl);
    const exitBtn = document.createElement('div');
    exitBtn.classList.add('exit-button');
    exitBtn.textContent = 'x';
    divEl.appendChild(exitBtn);

    exitBtn.addEventListener('click', () => {
        divEl.remove();
    })

})