function Person(newName){
  this.name=newName;

  Person.prototype.toString=function(){
    return this.name;
  }
}

module.exports=Person;
