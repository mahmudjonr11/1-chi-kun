var s = 45
var a = 55
if(a + s == 100 )
 {console.log("Yig'indisi yuzdan teng")
} else{
	console.log("Yig'indisi yuzdan tengmas")
}

var nomlar = ["kitoblar", "rasmlar", "ruchkalar"]
var port = ["kema", "kemacha", "yaxta","qayiq"]

if (nomlar.langth > port.langth) {onsole.log("nomlar portdan elementlari ko'p")}else {console.log("portdan nomlar elementlari ko'p")}


var o = {
	ism: "mahmudjon",
	yosh: 19
}
var i = {
	ism: "abu",
	yosh: 20
}
if(o.yosh == i.yosh) {
	console.log("mahmudjon kichik")
} else{
	console.log("abu katta")}

var tanlov1 = "Tosh"
var tanlov4 = ""
if (Math.random() < 0.33){
	tanlov4 = "Qog'oz"
	
} else if (0.33 < Math.random() < 0.66) {
	tanlov4 = "Qaychi"
} else {
	tanlov4 = " Tosh"
}
if (tanlov4 == "Qaychi" &&  tanlov1 == "Tosh" ){
	console.log("Tanlov1 Yutdi")
}
else {
	console.log("Durang")
}

var film = {
	nomi: "SNOWDEN",
	chiqgan_yili: "2016",
	vaqti: "2s 14min",
	ssenarist: "Oliver Stone",
	yozuvchilar: [
		"Kieran Fitzgerald", "Oliver Stone", "Luke Harding"
	],
	yonalishi: [
		"Biography", "Crime", "Drama", "Thriller"
	] ,
	aktyorlar: [
		"Josepn Gordon-Levitt", "Shailene Woodley", "Rhys Ifans"
	]
} 
var  son = 2;
 
if (son == 0){
	console.log("buson bo'linmaydi")
} 
else if (son % 2 == 0){
 console.log("bo'lsa bo'ladi")
}
 else console.log("0 ga bo'lib bo'lmaydi")

var harflar = [
	"a","o","u","i","e","o'"
]
console.log(harflar.includes("w") )

var bur1 = 1
var bur2 = 2
var bur3 = 3

if ((bur1 + bur2) > bur3){
	console.log("uchburchak bo'ladi")
}
else console.log("uchburchak bo'lmaydi")

var kirim = 500
var chiqim = 450

if (kirim > chiqim ) console.log("foyda qildik")
else if  (kirim = chiqim) console.log("foyda ham zarar ham qilmadik")
else {
	console.log("foyda ko'rmadik")
}

var baho = 45


if (baho > 90){
	console.log("Akang kuchaydi")
}
else if (baho > 80){
	console.log("Akangga ozgina qoldi")
}
else if(baho > 70){
	console.log("Sen ham kuchayasan")
}
else if ( baho > 60){
	console.log("vashe o'zini yo'qotma")
}
else if ( baho > 50){
	console.log("Internetdan kallani ko'tar")
}
else if (baho > 40){
	console.log("Telefonni tashla kitob o'qi")
}
else {
	console.log("tamomsan")
}
var i = 0
for (var i = 10000; i >= 0 ; i-- )
console.log(i)

var harf = ["a", "b", "c", "d", "e","f", "g"]
for (var i = harf.length-1; i >= 0; i--){
	console.log(harf[i])
}

var pl = ["phyton", "Javascript", "PHP"]
for (var i = 0; i < pl.length; i++){
	if(pl[i]== "Javascript"){
		console.log(pl[i].toUpperCase())
	}
	else console.log(pl[i])
}
 var y = "*"
console.log("*" .repeat(1))
for (var i = 10; i >= 0; i--){
	console.log( " " .repeat(10)+"*".repeat(1))
	console.log( " " .repeat(9)+"*".repeat(2)+"*".repeat(1)+ " ".repeat(9))
	console.log( " " .repeat(8)+"*".repeat(3)+"*".repeat(2)+ " ".repeat(8))
	console.log( " " .repeat(7)+"*".repeat(4)+"*".repeat(3)+ " ".repeat(7))
	console.log( " " .repeat(6)+"*".repeat(5)+"*".repeat(4)+ " ".repeat(6))
	console.log( " " .repeat(5)+"*".repeat(6)+"*".repeat(5)+ " ".repeat(5))
	console.log( " " .repeat(4)+"*".repeat(7)+"*".repeat(6)+ " ".repeat(4))
	console.log( " " .repeat(3)+"*".repeat(8)+"*".repeat(7)+ " ".repeat(3))
	console.log( " " .repeat(2)+"*".repeat(9)+"*".repeat(8)+ " ".repeat(2))
	console.log( " " .repeat(1)+"*".repeat(10)+"*".repeat(9)+ " ".repeat(1))
}

var w = 0
var e = 0

for (var i = 20; i > 0; i--){
	if(i == 20 ) console.log(" ".repeat(20)+ "*" )
	if (e = 0 ) console.log(" ".repeat(21)+ "/ * \\" )
	console.log(" ".repeat(i)+ "/*" + "*".repeat(w)+ "|*|" + "*".repeat(w)+ "*\\"  + " ".repeat(i))
	w++;
}
