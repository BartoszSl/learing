const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    console.log('Wykonuje się pierwszy!');
    const p = document.createElement('p')
    alert('Stworzyłem paragraf!')
    p.textContent = 'test'
    document.body.append(p)
    console.log('koniec');
})