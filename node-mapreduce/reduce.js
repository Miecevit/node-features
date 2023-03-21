var hayvanlar = ['köpek', 'tavuk', 'kedi', 'köpek', 'tavuk', 'tavuk', 'tavsan'];

var hayvanSayisi = hayvanlar.reduce(function(hayvanSayaci, hayvan){

    if(!hayvanSayaci[hayvan]){
        hayvanSayaci[hayvan] = 1;
    }
    else{
        hayvanSayaci[hayvan]++;
    }

    return hayvanSayaci;

}, {});

console.log(hayvanSayisi);


// hayvanSayaci = 
// {
//     köpek: 2
//     tavuk: 3
//     kedi: 1
//     tavsan: 1
// }





//----------------
// const sayilar = [1,2,3,4,5];

// var toplam = sayilar.reduce(function(sonuc, sayi){
//     return sonuc + sayi;
// }, 0);

// console.log(toplam);
//----------------
// var toplam = 0;

// for(var i = 0; i<sayilar.length; i++){
//     toplam += sayilar[i];
// }

// console.log(toplam);