let body = document.querySelector('body');
let button = document.querySelectorAll('li');


//! Option 1

// let redColor = document.querySelector('.red')
// redColor.addEventListener('click', function(){
//     body.style.backgroundColor = 'rgb(251, 255, 0)'
// });


// let greenColor = document.querySelector('.green')
// greenColor.addEventListener('click', function(){
//     body.style.backgroundColor = 'rgb(241, 167, 7)'
// });


// let blueColor = document.querySelector('.blue')
//     blueColor.addEventListener('click', function(){
//     body.style.backgroundColor = 'rgb(231, 11, 202)'
// });


// let blackColor = document.querySelector('.black')
//     blackColor.addEventListener('click', function(){
//     body.style.backgroundColor = 'rgb(10, 150, 231)'
// });



//! Option 2

// button.forEach( function(value){
//     value.addEventListener('click' , function(){
//         let classNime = this.classList.value
//         body.style.backgroundColor = classNime
//     })
    
// })


//! Option 3


button.forEach( function(value){
    value.addEventListener('click' , function(){
        let classNime = this.classList[0];
        let color = ''

        if(classNime === 'red'){
            color = 'rgb(251, 255, 0)'
        }

        if(classNime === 'green'){
            color = 'rgb(241, 167, 7)'
        }

        if(classNime === 'blue'){
            color = ' rgb(231, 11, 202)'
        }

        if(classNime === 'black'){
            color = 'rgb(10, 150, 231)'
        }

        body.style.backgroundColor = color
    })
    
})