class Person{
	constructor(name='John',canDance=false, skills =['html5','javascript', 'css3']){
		this.skills = skills;
		this.name = name;
		this.canDance = canDance;
		this.speak = function(){
			console.log(`hello my name is ${this.name} and people say I can dance thats ${this.canDance} and one of my skill(s): ${skills[0]}`);

		}
	}
}

let davidObj = new Person("David",true, ['judo', 'streetfight']);
let wadeObj = new Person("Wade",false, ['kingfu']);
let leo = new Person("Leonid",false, ['box']);
let mike = new Person();

davidObj.speak();
wadeObj.speak();
leo.speak();
mike.speak();
