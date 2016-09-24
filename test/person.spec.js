var Person=require('../models/person.js');
var expect = require('chai').expect;

describe('Person',function(){

  it('Outputs correct string',function(){

    var person=new Person('name');
    expect(person.toString()).to.equal('name');
  });
});
