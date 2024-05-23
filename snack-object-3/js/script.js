// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const autos = [
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'diesel'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'gpl'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'elettrico'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'metano'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'diesel'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'gpl'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'elettrico'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'metano'
    }, {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'diesel'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'gpl'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'elettrico'
    },
    {
        marca: 'bmw',
        modello: 'x5',
        alimentazione: 'metano'
    },
];

const autoBenzina = autos.filter((auto) => {
    if (auto.alimentazione == 'benzina'){
        return true}
});

const autoDiesel = autos.filter((auto) => {
    if (auto.alimentazione == 'diesel'){
        return true}
});

const restoAuto = autos.filter((auto) => {
    if (auto.alimentazione !== 'diesel' && autos.alimentazione !== 'benzina'){
        return true}
});

console.log(autoBenzina, autoDiesel, restoAuto)