let kitap1 = {isim : "Türklerin Tarihi 2", yazar : "İlber Ortaylı", fiyat : 209, raf : "1.1 RAF"};
let kitap2 = {isim : "Enver", yazar : "Murat Bardakçı", fiyat : "699", raf : "1.2 RAF"};
let kitap3 = {isim : "Sorularla Osmanlı İmparatorluğu", yazar : "Erhan Afyoncu", fiyat : 275, raf : "1.3 RAF"};
let kitap4 = {isim : "Zafer Sızlanarak Kazanılmaz", yazar : "Haluk Tatar", fiyat : 239, raf : "1.4 RAF"};
let kitap5 = {isim : "1984", yazar : "George Orwell", fiyat : "412", raf : "1.5 RAF"};
let kitap6 = {isim : "Dünyanın Merkenize Yolculuk", yazar : "Jules Verne", fiyat : 123, raf : "2.1 RAF"};
let kitap7 = {isim : "Sefiller", yazar : "Victor Hugo", fiyat : "119", raf : "2.2 RAF"};
let kitap8 = {isim : "Suç ve Ceza", yazar : "Fyodor Dostoyevski", fiyat : 104, raf : "2.3 RAF"};
let kitap9 = {isim : "Beyaz Diş", yazar : "Jack London", fiyat : "281", raf : "2.4 RAF"};
let kitap10 = {isim : "Don Kişot", yazar : "Miguel de Cervantes", fiyat : 135, raf : "2.5 RAF"};
let kitap11 = {isim : "İki Şehrin Hikayesi", yazar : "Charles Dickens", fiyat : 107, raf : "3.1 RAF"};
let kitap12 = {isim : "Yeraltından Notlar", yazar : "Fyodor Dostoyevski", fiyat : 149, raf : "3.2 RAF"};
let kitap13 = {isim : "Küçük Prens", yazar : "Antoine de Saint-Exupéry", fiyat : 104, raf : "3.3 RAF"};
let kitap14 = {isim : "Dönüşüm", yazar : "Franz Kafka", fiyat : 83, raf : "3.4 RAF"};
let kitap15 = {isim : "Savaş ve Barış", yazar : "Lev Tolstoy", fiyat : 99, raf : "3.5 RAF"};
let kitap16 = {isim : "Yalnızız", yazar : "Peyami Safa", fiyat : 157, raf : "4.1 RAF"};
let kitap17 = {isim : "Düşte Kalan", yazar : "İskender Pala", fiyat : 126, raf : "4.2 RAF"};
let kitap18 = {isim : "Kara Kitap", yazar : "Orhan Pamuk", fiyat : 435, raf : "4.3 RAF"};
let kitap19 = {isim : "Vahşetin Çağrısı", yazar : " Jack London", fiyat : 149, raf : "4.4 RAF"};
let kitap20 = {isim : "İnsan Ne İle Yaşar?", yazar : "Lev Tolstoy", fiyat : 91, raf : "4.5 RAF"};
let kitap21 = {isim : "Şeker Portakalı", yazar : "José Mauro de Vasconcelos", fiyat : 111, raf : "5.1 RAF"};
let kitap22 = {isim : "Ateşten Gömlek", yazar : "Halide Edib Adıvar", fiyat : 130, raf : "5.2 RAF"};
let kitap23 = {isim : "Denizler Altında Yirmi Bin Fersah", yazar : "Jules Verne", fiyat : 110, raf : "5.3 RAF"};
let kitap24 = {isim : "İnsanın Anlam Arayışı", yazar : "Viktor Frankl", fiyat : 112, raf : "5.4 RAF"};
let kitap25 = {isim : "Dava", yazar : "Franz Kafka", fiyat : 132, raf : "5.5 RAF"};

let kitaplar = [kitap1,kitap2,kitap3,kitap4,kitap5,kitap6,kitap7,kitap8,kitap9,kitap10,kitap11,kitap12,kitap13,kitap14,kitap15,kitap16,kitap17,kitap18,kitap19,kitap20,kitap21,kitap22,kitap23,kitap24,kitap25];


let raf11 = {kod : "1.1 RAF", goster: false};
let raf12 = {kod : "1.2 RAF", goster: false};
let raf13 = {kod : "1.3 RAF", goster: false};
let raf14 = {kod : "1.4 RAF", goster: false};
let raf15 = {kod : "1.5 RAF", goster: false};

let raf21 = {kod : "2.1 RAF", goster: false};
let raf22 = {kod : "2.2 RAF", goster: false};
let raf23 = {kod : "2.3 RAF", goster: false};
let raf24 = {kod : "2.4 RAF", goster: false};
let raf25 = {kod : "2.5 RAF", goster: false};

let raf31 = {kod : "3.1 RAF", goster: false};
let raf32 = {kod : "3.2 RAF", goster: false};
let raf33 = {kod : "3.3 RAF", goster: false};
let raf34 = {kod : "3.4 RAF", goster: false};
let raf35 = {kod : "3.5 RAF", goster: false};

let raf41 = {kod : "4.1 RAF", goster: false};
let raf42 = {kod : "4.2 RAF", goster: false};
let raf43 = {kod : "4.3 RAF", goster: false};
let raf44 = {kod : "4.4 RAF", goster: false};
let raf45 = {kod : "4.5 RAF", goster: false};

let raf51 = {kod : "5.1 RAF", goster: false};
let raf52 = {kod : "5.2 RAF", goster: false};
let raf53 = {kod : "5.3 RAF", goster: false};
let raf54 = {kod : "5.4 RAF", goster: false};
let raf55 = {kod : "5.5 RAF", goster: false};

let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15],
];

function rafOlusturucu(){
    let satir = "";
    console.clear();
    for(let i = 0 ; i<raflar.length ; i++){
        for(let j = 0 ; j<5 ; j++){
            satir+="|" + (raflar[i][j].goster ? raflar[i][j].kod : "_______") ;
        }
        console.log(satir);
        console.log("");
        satir = "";

    }
}

function kodBul(kitapIsmi){
    let rafKod = null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0))
            rafKod = kitap.raf;
    });
    return rafKod;
}

function raftaGoster(rafKodu){
    for(let i = 0 ; i<raflar.length ; i++){
        for(let j = 0 ; j<5 ; j++){
            if(raflar[i][j].kod==rafKodu){
                raflar[i][j].goster = true;
                break;
            }
        }
    }
}



rafOlusturucu();

let kitapIsmi = prompt("Lütfen Aradığınız Kitabı Giriniz.");
let rafKod = kodBul(kitapIsmi);

if(rafKod != null){
    raftaGoster(rafKod);
    rafOlusturucu()
}else{
    alert("Aradığınız Kitap Kütüphanemizde Bulunmamaktadır!")
}