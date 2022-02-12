// let btn = document.querySelector('#btn')

// let log = document.querySelector('#log')

// btn.addEventListener('click', () => {
//     a = prompt('son: ')

//     if(18<a){
//         log.innerText ='Bilvadim'
//     }else{
//         log.innerText ='Ket anaka'
//     }
   
// })

let btn = document.querySelector('#btn')
let log = document.querySelector('#log')

btn.onclick = () => {

    let a=prompt('style ni krit: ')

    log.innerCSS += "<h1>"+a+"</h1>"
   
}


















