var Person=require('../models/person.js');
var expect = require('chai').expect;

describe("Person",function(){


  it("Outputs correct string",function(){

    var person=new Person('name');
    expect(person.toString()).to.equal('name');
  });

  it("Two people have different names",function(){
    var p1=new Person('name1');
    var p2=new Person('name2');

    expect(p1.toString()).to.not.equal(p2.toString());
  });
});
