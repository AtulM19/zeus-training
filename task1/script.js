'use strict';

const btn = document.getElementById('btn');
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const comments = document.getElementById('comments');
const male = document.getElementById('male');
const female = document.getElementById('female');


const sub = function(x, y) {
    return x-y
}
const add = function (a, b) {
    return a + b    
}
form.addEventListener('submit', (e) => {
 