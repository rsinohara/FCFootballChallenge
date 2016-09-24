var Coach=require('../models/coach.js');
var expect = require('chai').expect;

describe('Player',function(){

  describe('Constructor initialization',function(){

    it('outputs correct string',function(){
      var coach=new Coach('my-name',1,5);
      expect(coach.toString()).to.equal('Coach: my-name');
    });
  });
});
