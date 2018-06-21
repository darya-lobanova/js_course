///^\+38\(0\d\d\)\d{3}[ -]?\d{2}[ -]?\d{2}$/g
///^([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/gi


class Email {
    constructor () {
        this.regexp1 = /^([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/i;
        this.email = document.getElementById('email');
        this.email.onchange = this.testemail.bind.this;
    }

    testemail () {
        if (this.regexp1.test(this.email.value)) {
            this.email.style.border = '3px solid red';
        } else {
            this.email.style.border = '3px solid green';
        }
    }
}

class Phone {
    constructor () {
        this.regexp2 = /^\+38\(0\d\d\)\d{3}[ -]?\d{2}[ -]?\d{2}$/;
        this.phone = document.getElementById('phone');
        this.phone.onchange = this.testphone.bind.this;
    }

    testphone () {
        if (this.regexp2.test(this.phone.value)) {
            this.phone.style.border = '3px solid red';
        } else {
            this.phone.style.border = '3px solid green';
        }
    }
}

class TextArea {
    constructor () {
        this.regexp3 = /^([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/i;
        this.content = document.getElementById('content');
        this.search - document.getElementById('search');
    }
}

const email = new Email();
const phone = new Phone();
const textarea = new TextArea();