//membuat fuction didalam function 
//hanya di pakai di dalam tidak bisa di luar 


function outer(){

    function inner(){
        console.info("in");
    }

    inner();
    inner();
}

outer()


// inner();