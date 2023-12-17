const cont3 = document.querySelector(".container-3");
const cont4 = document.querySelector(".container-4");
const cont5 = document.querySelector(".container-5");
const cont6 = document.querySelector(".container-6");
const cont7 = document.querySelector(".container-7");
const def_main = document.querySelector(".container-1");
const main_dis = document.querySelector(".def_dis");

function def_func()
{
    document.querySelector(".hidden_div-3").style.display = "none";
    document.querySelector(".hidden_div-4").style.display = "none";
    document.querySelector(".hidden_div-5").style.display = "none";
    document.querySelector(".hidden_div-6").style.display = "none";
    document.querySelector(".hidden_div-7").style.display = "none";
}

const main_func = () =>{
    main_dis.style.display = "none";
    document.querySelector(".main_container").style.display = "block";
}

const hid_maincontfunc = () =>{
    document.querySelector(".main_container").style.display = "none";
    main_dis.style.display = "block";
    def_func()
}

const func3 = ()=>{
    def_func();
    document.querySelector(".hidden_div-3").style.display = "block";
}

const func4 = ()=>{
    def_func();
    document.querySelector(".hidden_div-4").style.display = "block";
}

const func5 = ()=>{
    def_func();
    document.querySelector(".hidden_div-5").style.display = "block";
}

const func6 = ()=>{
    def_func();
    document.querySelector(".hidden_div-6").style.display = "block";
}

const func7 = ()=>{
    def_func();
        document.querySelector(".hidden_div-7").style.display = "block";
}

cont3.addEventListener("click", func3);
cont4.addEventListener("click", func4);
cont5.addEventListener("click", func5);
cont6.addEventListener("click", func6);
cont7.addEventListener("click", func7);
main_dis.addEventListener("click", main_func);
def_main.addEventListener("click", hid_maincontfunc);