let liSt = document.getElementsByTagName('li');
let i;

for (i = 0; i < liSt.length; i++) {
    let button = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(text);
    liSt[i].appendChild(button);
}

let close = document.getElementsByClassName('close');
let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

let nlist = document.getElementById('my_list');

nlist.onclick = function(event) {
    
    let target = event.target;
    
    if (target.tagName !== 'Li'){
        target.setAttribute('class', 'done');
        target = target.parentNode; 

        //это по идее должно было удалять класс у li, но нет
        // if(target.className == "done"){
        //     target.setAttribute('class', ' ');
        // }
    }
};  

//другой метод для сделаных дел  

// let nlist = document.getElementById('my_list');

// nlist.addEventListener('click', function(event) {
//     if (event.target.tagName === 'li') {
//         event.target.classList.toggle('done');
//     }
// }, false);

function newEl(){
    let li = document.createElement('li');
    let inp = document.getElementById('inp').value;
    let t = document.createTextNode(inp);
    li.appendChild(t);
    if (inp === '') {
        alert("You have to write something");
    } else {
        document.getElementById('my_list').appendChild(li);
    }
    document.getElementById('inp').value = "";

    let button = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(text);
    li.appendChild(button);

    // ввод при нажатии на enter

    //     let input = document.getElementById('inp');
    //     let btn = document.getElementById('btn');
    //     input.addEventListener("keypress", function(event) {
    //     event.preventDefault();
    //     if (event.keyCode == 13)
    //         btn.click();
    // });

    let f;
    for (f = 0; f < close.length; f++) {
        close[f].onclick = function() {
            let div = this.parentElement;
           div.style.display = 'none';
        }
    }
}