function cinta(array, searchValue){
    for (const love of array){
        if (love === searchValue){
            return love;
        }
    }
    return false;
}
const array = ["aku", "sayang", "kamu"];
const search = "sayang";
const found = cinta(array, search);
console.log(found);