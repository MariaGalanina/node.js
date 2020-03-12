const readlineSync=require('readline-sync');


	const compNumber = '56478';
	let userNumber='';
	let res = 0;

do {
	userNumber = readlineSync.question('Your number (5): ');
	

    for (let i = 0; i < 5; i++){
        if (userNumber[i] == compNumber[i]){
        	res++;
            console.log(userNumber[i]);
        }
	}console.log("na meste: " + res);res=0;


	for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            if (userNumber[i] == compNumber[j] && i != j){
                res++;
                console.log(userNumber[i]);
            }

        }      
	}console.log("ne na meste: " + res);res=0;


	
} while (compNumber!=userNumber);