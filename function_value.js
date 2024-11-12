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


//function anonymous

let say1 = function(name){
    console.info(`Hallo ${name}`);
}

say1 ("isan");

// function di dalam parameter

function nameGive(callback1){
    callback1("ihsan");
}

nameGive(say);

nameGive(function(name){
    console.info("hai" + " " + name)
})