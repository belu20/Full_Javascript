// menjadikan function sebagai value

function item(name){
    console.log("hello" + " "+ name + "\n");
}

item("isan");

const say = item;

say("septian");


function giveMeName(callback){
    callback("isan");
}

giveMeName(item)
giveMeName(say);
