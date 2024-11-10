// default parameter 

function register(name = "Anonymous", age="UNKNOWN"){
    console.info(name);
    console.info(age);
}

register();
register("Isan", 21);