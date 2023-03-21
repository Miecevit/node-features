const ogrenciler = [
    {
        isim: "mert", not:96
    },
    {
        isim: "ayse", not: 100
    },
    {
        isim: "ali", not: 65
    },
    {
        isim: "zeynep", not: 84
    },
    {
        isim: "hakan", not:72
    },
    {
        isim: "deniz", not: 87
    }
]

//.charAt()
//.toUpperCase()
//.slice()

const buyukharfListe = ogrenciler.map(function(ogrenci){

    return {
        isim: ogrenci.isim.charAt(0).toUpperCase() + ogrenci.isim.slice(1),
        not: ogrenci.not
    }

});

console.log(buyukharfListe);