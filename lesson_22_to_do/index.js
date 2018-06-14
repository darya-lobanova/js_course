//Пока без не сильно работающий (от слова совсем) и без css

let liSt = document.getElementsByTagName('li');
let i;

for (i = 0; i<liSt.length; i++) {
    let button = document.createElement('button');
    let text = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(text);
    liSt[i].appendChild(button);
}

let close = document.getElementsByClassName('close');

for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
       // div.style.display = 'none';
    }
}

let list = document.querySelector('ul');

list.addEventListener ('click', function(event) {
    if(event.target.tagName === 'li'){
        event.target.classList.toggle('done');
    }
}, false);

function newEl(){
    let li = document.createElement('li');
    let inp = document.getElementById('inp').value;
    let t = document.createTextNode(inp);
    li.appendChild(t);

    let button = document.createElement('button');
    let text = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(button);

    for(i = 0; i<close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            //div.style.dispaly = none;
        }
    }

}