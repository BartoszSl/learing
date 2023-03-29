const name = 'Ania' // zmienna globalna

const spozaFunkcji = () => { // funkcja ma dostęp do zmiennych globalnych i lokalnych w sobie, ale nie lokalne zapisane w funkcji nie mogą być wywoływane spoza funkcji
    const name = 'skarbie' // zmienna lokalna
    console.log(`Kocham Cię ${name} - w`);
}

spozaFunkcji()

console.log(`Kocham Cię ${name} - spoza`);