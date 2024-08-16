// ? Document write ile çıktı verme

document.writeln("Hello World <br>"); // ? line (ln) alt satıra geç
document.writeln("Batuhan Bayram");   // ? <br> alt satıra geç

// ? console ile çıktı verme

console.log("Batuhan Bayram");
// console.clear(); // ? konsolu temizler

let a=486
let b=533

console.log("İki Sayının Toplamı :" ,a+b);
// console.clear();

// ? Alert (Uyarı) popup ile çıktı verme

// console.log(window);   


alert("a ve b olmak üzere iki sayımız olsun. a=486 ve b=533 ise a ve b'yi toplayacak olursak sonuç: " + (a+b));

console.error("Hata!");
console.warn("Hata!");

/*
                  ? Bilgilendirme
                  ! Uyarı
                  Todo Önemli
                  *Dikkat Çekme

*/

// ?var: function scope,  left/const: block scope
// ?let değişken, const sabit

const user = {
username: "batuk",
password: "1923"
}

user.username= "batuhanbayram";

console.log(user);

// == eşittir
// != eşit değildir
// ?null = boş


/*
*   string: "" (tırnak)
*   number: rakam
*   Boolean: comsole.log(5<8)
*   Null: boş
*   ndefined: let a; (tanımsız)
*   object: let batuk = {
*       isim: "batuk"
*       soyisim: "bayram"
*   }
*   console.log(batuk)
*   function: let func = function(){

*   console.log("Merhaba")
*   }
*   func()
*/