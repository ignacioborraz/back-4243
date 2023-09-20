export default class Admin {
  constructor(name, mail) {
    this.name = name;
    this.mail = mail;
    if (typeof Admin.instance === "object") {
      return Admin.instance;
    } else {
      Admin.instance = this;
      return this;
    }
  }
}

const admin1 =  new Admin('igna','igna@coder.com')
console.log(admin1.name);       //igna

const admin2 =  new Admin('mateo','mateo@coder.com')
console.log(admin2.name);       //igna


