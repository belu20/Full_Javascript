// rest parameter 

function sum(name, ...data){
    let total= 0;
    for (const item of data){
        total += item;
    }
    console.info(`total ${name} adalah ${total}`);
}

    sum("Orange", 10, 12, 30, 40);
    sum("Banana", 12, 10, 31, 40);

//jika sudah terlanjur array

const value = [1,24,12,1,3];
sum("test", ...value);


//argument parameter

function oldSUm(){
    let total = 0;
    for(const argument of arguments){
        total += argument;
    }
    console.log(`Total is ${total}`);
}

oldSUm(1,2,34,5,6);