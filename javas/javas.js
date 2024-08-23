let yeniSatir = "\r\n"
let araba = "En İyi Araba Hangisidir?"+yeniSatir
+"1-BMW"+yeniSatir
+"2-AUDİ"+yeniSatir
+"3-MERCEDES"+yeniSatir
+"4-Porsche"+yeniSatir
+"5-Rolls-Royce";

let yaz = prompt(araba);
switch(yaz){

    case "1":
         alert("Arabalardan Anlıyorsun :)");
         break;

    case "2":
         alert("Kesinlikle En İyisi!");
         break;
    case "3":
         alert("Anlaşılan Konforu seviyorsun :)");
         break;
    case "4":
         alert("Hız Tutkunu Seni!");
         break;
    case "5":
         alert("Hayat Kaliteni Arttırır...");
         break;
    default:
        alert("Lütfen Geçerli Bir Sıra Seç!!!");
}


