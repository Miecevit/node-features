const yapilacaklar =[
    {
         baslik: "Yapilacak 1", aciklama: "kedilerin kumunu temizle"
    },
    {
        baslik: "Yapilacak 2", aciklama: "Derse git"
    },
    {
        baslik: "Yapilacak 3", aciklama: "Vakit kalirsa evi temizle"
    }
];

let yapilacakEleman = document.getElementById("yapilacakList");

function listYazdir(){

    var yapilacakSey = "";

    setTimeout(() => {

        yapilacaklar.forEach(yapilacak => {

            yapilacakSey += `
            <li>
                <b>${yapilacak.baslik}</b>
                <p>${yapilacak.aciklama}</p>
            </li>`;
        });
        yapilacakEleman.innerHTML = yapilacakSey;
    }, 1000)
};

function yeniYapilacak(is, callback){
    setTimeout(() => {
        yapilacaklar.push(is);
        callback();
    }, 5000);
}

var yeniIs = {baslik: "Yapilacak 4", aciklama: "Esinin dogum gununu kutla"};

yeniYapilacak(yeniIs, listYazdir);

listYazdir();