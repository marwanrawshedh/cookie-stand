'use strict'

let parent = document.getElementById('resturant');

let unorderd1 = document.createElement('ul');
parent.appendChild(unorderd1);
unorderd1.textContent='seattle'
let Seattle={
    max:0,
    min:0,
    avr:6.3,
    
max: function(){
        
     for(let i=6;i<12;i++){
         this.max= randomAge(23,65)
         let clc=this.avr* this.max
         let list1 = document.createElement('li')
         unorderd1.appendChild(list1)
         list1.textContent= i +'am:'+ clc + 'cookies ';
}
let i=12
if( i=12){
    this.max= randomAge(23,65)
    let clc=this.avr* this.max;
    let list1 = document.createElement('li')
                unorderd1.appendChild(list1)
                list1.textContent= i +'pm:'+ clc + 'cookies ';
}
for(let i=1;i<7;i++){
    this.max= randomAge(23,65)
let clc=this.avr* this.max;
let list1 = document.createElement('li')
            unorderd1.appendChild(list1)
            list1.textContent= i +'pm:'+ clc + 'cookies ';
// console.log(clc);


}}
}

Seattle.max()


let unorderd2 = document.createElement('ul');
parent.appendChild(unorderd2);
unorderd2.textContent='tokyo'
let Tokyo={ 
max:0,
min:0,
avr:1.2, 


    max: function(){
        
        for(let i=6;i<12;i++){
        this.max= randomAge(3,24)
    let clc=this.avr* this.max
    let list1 = document.createElement('li')
   unorderd2.appendChild(list1)
    list1.textContent= i +'am:'+ clc + 'cookies ';}

    let i=12
    if( i=12){
        this.max= randomAge(3,24)
        let clc=this.avr* this.max;
        let list1 = document.createElement('li')
                    unorderd2.appendChild(list1)
                    list1.textContent= i +'pm:'+ clc + 'cookies ';}







                    for(let i=1;i<7;i++){
        this.max= randomAge(3,24)
    let clc=this.avr* this.max;
let list1 = document.createElement('li')
            unorderd2.appendChild(list1)
            list1.textContent= i +'pm:'+ clc + 'cookies ';}
    

            
}}
Tokyo.max()




let unorderd3 = document.createElement('ul');
parent.appendChild(unorderd3);
unorderd3.textContent='Dubai'
let Dubai={
    
    max:0,
    min:0,
avr:3.7,
    
max: function(){


    
    for(let i=6;i<12;i++){
    this.max= randomAge(11,38)  
    let clc=this.avr* this.max
    let list1 = document.createElement('li')
   unorderd3.appendChild(list1)
    list1.textContent= i +'am:'+ clc + 'cookies ';}


let i=12
    if( i=12){
        this.max= randomAge(11,38) 
        let clc=this.avr* this.max;
        let list1 = document.createElement('li')
                    unorderd3.appendChild(list1)
                    list1.textContent= i +'pm:'+ clc + 'cookies ';}

for(let i=1;i<7;i++){
    this.max= randomAge(11,38)  
    let clc=this.avr* this.max;
let list1 = document.createElement('li')
            unorderd3.appendChild(list1)
            list1.textContent= i +'pm:'+ clc + 'cookies ';}
    
}}
Dubai.max()




let unorderd4 = document.createElement('ul');
parent.appendChild(unorderd4);
unorderd4.textContent='paris'

let Paris={
    max:0,
min:0,
    avr:2.3,  
    
    max: function(){
    for(let i=6;i<12;i++){
         this.max= randomAge(20,38)
    let clc=this.avr* this.max
    let list1 = document.createElement('li')
    unorderd4.appendChild(list1)
        list1.textContent= i +'am:'+ clc + 'cookies ';}

    let i=12
    if( i=12){
        this.max= randomAge(20,38)
        let clc=this.avr* this.max;
        let list1 = document.createElement('li')
      unorderd4.appendChild(list1)
           list1.textContent= i +'pm:'+ clc + 'cookies ';}
    for(let i=1;i<7;i++){
        this.max= randomAge(20,38)

        let clc=this.avr* this.max;
        let list1 = document.createElement('li')
                    unorderd4.appendChild(list1)
                    list1.textContent= i +'pm:'+ clc + 'cookies ';}

}}

Paris.max()




let unorderd5 = document.createElement('ul');
parent.appendChild(unorderd5);
unorderd5.textContent='lima'
let Lima={
max:0,
min:0,
avr:4.6,

    max: function(){

    for(let i=6;i<12;i++){
            this.max= randomAge(2,16)
    let clc=this.avr* this.max
    let list1 = document.createElement('li')
    unorderd5.appendChild(list1)
    list1.textContent= i +'am:'+ clc + 'cookies ';}

let i=12
    if( i=12){
        this.max= randomAge(2,16)
        let clc=this.avr* this.max;
        let list1 = document.createElement('li')
                    unorderd5.appendChild(list1)
                    list1.textContent= i +'pm:'+ clc + 'cookies ';}
                    let arr=[]
                    for(let i=1;i<7;i++){
                        this.max= randomAge(2,16)
                        let clc=this.avr* this.max;
                        arr[i]=clc
                      

                       

                        let list1 = document.createElement('li')
                        unorderd5.appendChild(list1)
                        list1.textContent= i +'pm:'+ clc + 'cookies ';}
                        console.log(arr)
                        
}}
Lima.max()

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}
