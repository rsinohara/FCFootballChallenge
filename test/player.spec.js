var Player=require('../models/player.js');
var expect = require('chai').expect;

describe("Player",function(){


  it("Outputs correct string",function(){

    var player=new Player('name');
    expect(player.toString()).to.equal('name');
  });
});
