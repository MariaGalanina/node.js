const readlineSync=require('readline-sync');
const fs = require('fs');
const path = require('path');

let res=0;

//получаем список файлов
let getFiles = function (dir, files_){
    
  files_ = files_ || [];
    let files = fs.readdirSync(dir);
    for (let i in files){
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

console.log(getFiles('C:\\Node.js\\questions'));
let list=getFiles('C:\\Node.js\\questions');

//рандомно выбираем элемент из массива - путь к файлу
function fileRandWay(list) {
    var rand = Math.floor(Math.random() * list.length);
    return list[rand];
}

//прописываем рандомный путь в функцию для работы с файлом
let n=0;
do {
	let array = fs.readFileSync(fileRandWay(list)).toString().split("\n");
	for(i in array) {
		if(i==1)
			console.log('');
		else console.log(array[i]);
	}

	userAnswer = readlineSync.question('Your answer: ');
	if (userAnswer== +array[1])
		res++;
n++;
} while (n<5);

console.log('YOU GET A '+res);

//записываем результат в файл res.txt
fs.appendFileSync('C:\\Node.js\\res.txt', '\n'+res, (err) => {
  if (err) {
    console.error(err)
    return
  }
})



//let fileContent = fs.readFileSync("C:\\Node.js\\first.txt", "utf8");
//const re = fileContent.split("\n");
//console.log(fileContent);

/*try {
  const stats = fs.statSync ('C:\\Node.js\\first.txt');
  console.log(stats);
} catch (err) {
  console.error(err)
}*/ //сведения о файле