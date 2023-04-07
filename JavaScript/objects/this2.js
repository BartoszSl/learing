const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', (e) => {

}))

const ob = {
    number: 123,
    showNumber () {
        console.log(this.number);
    },
    showNumber2 () {
        const test = () => {
            console.log(this.number);
        }
        test()
    }
}

ob.showNumber()
ob.showNumber2()