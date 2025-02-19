Refer to the code:

function Animal(size,type){
    this.size = size || "small";
    this.type = type || "Animal";
    this.canTalk = false;
}
let Pet = function(size,type,name,owner){
    Animal.call(this,size,type);
    this.name = name;
    this.owner = owner;
}
Pet.prototype = Object.create(Animal.prototype);
let pet1 = new Pet();
console.log(pet1);

Given the code above, which three properties are set pet1?
Choose 3 answers:
A. Owner
B. Name
C. Type
D. Size
E. canTalk