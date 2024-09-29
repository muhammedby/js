let dizel = 43.76   , benzin = 43.62 , lpg = 22.90

const yeniSatir = "\r\n";

const yakitMetni = "Yakıt Türünüzün Sırasını Seçiniz:"+yeniSatir
+"1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){

    let yakitLitresi = Number(prompt("Yakıt Litrenizi Giriniz"));
let yakitBakiyesi = Number(prompt("Yakıt Bakiyenizi Giriniz"));

if(yakitTipi=="1"){

    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar<yakitBakiyesi){
        alert("Yakıt Alma İşleminiz Başarılı"+yeniSatir
            +"Kalan Bakiyeniz: " + (yakitBakiyesi-odenecekTutar));
    }else{
        alert("Bakiyeniz Yeterli Değildir!"+yeniSatir
            +"Ödenecek Tutar: " + odenecekTutar+yeniSatir
            +"Bakiyeniz: " + yakitBakiyesi+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-yakitBakiyesi));
    }
}else if(yakitTipi=="2"){

    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar<yakitBakiyesi){
        alert("Yakıt Alma İşleminiz Başarılı"+yeniSatir
            +"Kalan Bakiyeniz: " + (yakitBakiyesi-odenecekTutar));
    }else{
        alert("Bakiyeniz Yeterli Değildir!"+yeniSatir
            +"Ödenecek Tutar: " + odenecekTutar+yeniSatir
            +"Bakiyeniz: " + yakitBakiyesi+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-yakitBakiyesi));
    }
}else if(yakitTipi=="3"){

    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar<yakitBakiyesi){
        alert("Yakıt Alma İşleminiz Başarılı"+yeniSatir
            +"Kalan Bakiyeniz: " + (yakitBakiyesi-odenecekTutar));
    }else{
        alert("Bakiyeniz Yeterli Değildir!"+yeniSatir
            +"Ödenecek Tutar: " + odenecekTutar+yeniSatir
            +"Bakiyeniz: " + yakitBakiyesi+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-yakitBakiyesi));

    }
}

}else{
    alert("Lütfen Üç Yakıt Seçeneğinden Birisini Seçiniz!")
}
