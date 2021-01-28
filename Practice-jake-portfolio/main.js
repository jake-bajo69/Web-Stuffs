let body = document.querySelector('body')
let mobileMenuToggler = document.querySelector('.mobile-toggle')
let mobileMenuSeparator = document.querySelector('.separator')
let navList = document.querySelector('.nav-list')
let loader = document.querySelector('.loader')

var open = false

function opened(){
    var right = -30
    var id = setInterval(frame, 10)
    function frame(){
        if (right == 0){
            clearInterval(id)
        }else{
            right++;
            navList.style.right = right + '%'
        }
    }
    open = true
}

function closed(){
    var right = 0
    var id = setInterval(frame, 10)
    function frame(){
        if (right == -30){
            clearInterval(id)
        }else{
            right--;
            navList.style.right = right + '%'
        }
    }
    open = false
}

mobileMenuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
    if (open == false){
        opened();
    }else{
        closed();
    };
})

mobileMenuSeparator.addEventListener('click', function(){
    body.classList.remove('open');
    if (open == true){
        closed();
    }
})

window.addEventListener('load', function () {
    var timer = 0;
    var id = setInterval(frame, 1000)
    function frame(){
        if (timer < 3){
            timer++;
            console.log(timer)
        }else{
            loader.style.display = 'none'
        }
    };
});


// check for screen resize function
// window.addEventListener("resize", function(event) {
//     var screenWidth = window.innerWidth
//     console.log(screenWidth)
//     if (screenWidth > 760){
//         body.classList.remove('open');
//     }
//     if (screenWidth == 760){
//         navList.style.right = '-30%';
//         closed()
//     }
// })
