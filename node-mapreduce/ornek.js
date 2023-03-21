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

const kullanicilar = [
    {
        kullanici_adi: "back-end"
    },
    {
        kullanici_adi: "tester"
    }
]

var not = process.env.NOT;
var ogr = process.env.OGR;
var user = process.env.USER;

var user_check = false;

kullanicilar.map(function(kullanici){
    if(kullanici.kullanici_adi == user){
        user_check = true;
    }
});

if(user_check == true){

try{
    console.log("OGRENCI LISTESI");
    console.log("---------------------");
    ogrenciler.map(function(ogrenci, index){
        console.log((index+1)+". Isim: " + ogrenci.isim + " / Not: " + ogrenci.not);
    });
    

    console.log("---------------------");
    console.log(not +" PUANIN UZERINDEKI OGRENCILER");
    console.log("---------------------");
    var filtreliListe = ogrenciler.filter(function(ogrenci){
        return ogrenci.not >= not;
    });
    filtreliListe.map(function(ogrenci, index){
        console.log((index+1)+". Isim: " + ogrenci.isim + " / Not: " + ogrenci.not);
    });

    console.log("---------------------");
    console.log("TUM OGRENCILER ORTALAMASI");
    console.log("---------------------");
    var ortalama = ogrenciler.reduce(function(orta_top, ogrenci){
        return orta_top+(ogrenci.not/ogrenciler.length);
    }, 0);
    console.log("Tum ogrencilerin notlarinin ortalamasi: "+ ortalama.toFixed(2));

    console.log("---------------------");
    console.log("SECILEN "+ ogr + " ISIMLI OGRENCININ BILGILERI");
    console.log("---------------------");
    var secilmis = ogrenciler.filter(function(ogrenci){
        return ogrenci.isim == ogr;
    });
 
    console.log("İsim :" + secilmis[0].isim);
    console.log("Not: " + secilmis[0].not);
    console.log("---------------------");

} catch {
    console.error("Bilinmeyen bir hata olustu.");
}




}else{
    console.error("Bu kullanici adi ile işlem yapamazsiniz.");
}