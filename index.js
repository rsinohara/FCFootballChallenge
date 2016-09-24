var Team = require('./models/team.js');
var Player = require('./models/player.js');
var Coach = require('./models/coach.js');
var Match = require('./models/match.js');

//Setting up a game
console.log('Setting up the game.');

var teamDC=new Team('Team DC');
var teamMarvel=new Team('Team Marvel');

teamDC.addCoach(new Coach('Alfred'));
teamMarvel.addCoach(new Coach('Nick Fury'));

var number=1;
teamDC.addPlayer(new Player('Superman',number++));
teamDC.addPlayer(new Player('Batman',number++));
teamDC.addPlayer(new Player('Green lantern',number++));
teamDC.addPlayer(new Player('The flash',number++));
teamDC.addPlayer(new Player('Aquaman',number++));
teamDC.addPlayer(new Player('Robin',number++));
teamDC.addPlayer(new Player('Wonder woman',number++));
teamDC.addPlayer(new Player('Batgirl',number++));
teamDC.addPlayer(new Player('Harley Quinn',number++));
teamDC.addPlayer(new Player('Green arrow',number++));
teamDC.addPlayer(new Player('Lois Lane',number++));
teamDC.addPlayer(new Player('James Gordon',number++));
teamDC.addPlayer(new Player('Cyborg',number++));

var number=1;
teamMarvel.addPlayer(new Player('Spider man',number++));
teamMarvel.addPlayer(new Player('Iron man',number++));
teamMarvel.addPlayer(new Player('Vision',number++));
teamMarvel.addPlayer(new Player('The hulk',number++));
teamMarvel.addPlayer(new Player('Deadpool',number++));
teamMarvel.addPlayer(new Player('Thor',number++));
teamMarvel.addPlayer(new Player('Daredavel',number++));
teamMarvel.addPlayer(new Player('Cap. Marvel',number++));
teamMarvel.addPlayer(new Player('Night crawler',number++));
teamMarvel.addPlayer(new Player('Black widow',number++));
teamMarvel.addPlayer(new Player('Gambit',number++));
teamMarvel.addPlayer(new Player('Hawkeye',number++));
teamMarvel.addPlayer(new Player('Luke Cage',number++));

console.log('Both teams are ready:');
console.log(teamDC.toString());
console.log('vs');
console.log(teamMarvel.toString());
console.log();
console.log('Lineup: player(skill level):');

for(var i=1;i<=13;i++){
    var marvelPlayerDescription=teamMarvel.getPlayer(i).name + '(' + teamMarvel.getPlayer(i).skillLevel + ')';
    var DCPlayerDescription=teamDC.getPlayer(i).name + '(' + teamDC.getPlayer(i).skillLevel + ')';

    if(i<=11){
        
        console.log('Confrontation ' + i + ': ' + DCPlayerDescription + ' VS ' + marvelPlayerDescription);
    } else {
        console.log('Didn\'t make the cut: ' + DCPlayerDescription + ' and ' + marvelPlayerDescription);
    }

}

var match=new Match(new Date());
match.addTeam(teamDC);
match.addTeam(teamMarvel);

console.log('On the paper the next day:');
match.play();
console.log(match.toString());

