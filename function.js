//(parameter)
function sayFuck(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

// memanggil function dan menangkap return

const result = sayFuck(["isan", "ihsan"], "septian");
console.log(`${result}`);


//menggunakan untuk menentukan nilai siswa 

function getFinalScore(value){
    if (value > 90){
        return "A";
    }else if (value > 80){
        return "B";
    }else if(value > 70){
        return "C";
    }else{
        return "D";
    }
}

const i = getFinalScore(40);
console.log(`${i}`);

//return untuk menghentikan program
function isContains(array, searchValue) {
    for ( const property of array){
        console.info(`property ke ${property}`);
        if(property === searchValue){
            return true;
        }
    }
    return false;
}

const array =["selvina", "mutia", "rahayu", "septian"];
const search = "vina";
const found = isContains(array, search);
console.log(found);