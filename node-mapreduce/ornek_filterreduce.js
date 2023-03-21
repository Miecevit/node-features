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

const filtreliListe = ogrenciler.filter(function(ogrenci){
    return ogrenci.not > 70;
});
const toplamNot = filtreliListe.reduce(function(toplam, ogrenci){
    return toplam + ogrenci.not;
}, 0);
const ortalama = toplamNot / filtreliListe.length;

console.log(ortalama);

