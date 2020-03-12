/*Напишите программу, которая получает от пользователя строку, и при помощи цикла for 
переворачивает ее. Например qwerty -> ytrewq*/
const readlineSync=require('readline-sync');

/*const uStr = readlineSync.question('Write text: ');
for(let i = uStr.length-1; i>=0 ; i--){
	console.log(uStr[i]);
}*/

const uStr1 = readlineSync.question('Write text1: ');
const uStr2 = readlineSync.question('Write text2: ');
if (uStr1==uStr2){
	console.log('sovpali');
}


else if (uStr1.includes(uStr2)){
 console.log(uStr1.indexOf(uStr2));
 console.log(uStr2.length);
  console.log(-uStr1.lastIndexOf(uStr2));
  console.log(uStr1.indexOf(uStr2));
console.log(uStr1.replace(uStr2,'*'));

const nStr1 = uStr1.slice(uStr1.indexOf(uStr1), uStr1.indexOf(uStr2));

const nStr = uStr1.slice(uStr2.length);

const nStr2 = uStr1.slice(-uStr1.lastIndexOf(uStr2));

console.log(nStr1+'  '+nStr2);
console.log(nStr);

}



else
	console.log('ne sovpali');

