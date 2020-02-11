const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
       park = new Park ('New World', 5);
       dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
       dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 20);
  });

  it('should have a name', function(){
  const actual = park.name;
  assert.strictEqual(actual, 'New World');
    });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaursCollection();
    assert.strictEqual(actual, true);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaus(dinosaur1)
    const actual = park.countDinosaus();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaus(dinosaur1)
    park.addDinosaus(dinosaur2)
    park.removeDinosaus('t-rex')
    const actual = park.countDinosaus();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
  park.addDinosaus(dinosaur1)
  park.addDinosaus(dinosaur2)
  const actual = park.dinosaurMostAttraction();
  assert.strictEqual(actual, 50);
});
  it('should be able to find all dinosaurs of a particular species', function(){
  park.addDinosaus(dinosaur1)
    park.addDinosaus(dinosaur1)
      park.addDinosaus(dinosaur1)
  park.addDinosaus(dinosaur2)
  const actual = park.dinosaurOfSpecies('t-rex').length;
  assert.strictEqual(actual,3);
});


  it('should be able to calculate the total number of visitors per day', function(){
  park.addDinosaus(dinosaur1)
    park.addDinosaus(dinosaur1)
park.addDinosaus(dinosaur2)
const actual = park.guestPerDay()
  assert.strictEqual(actual, 120);
});

  it('should be able to calculate the total number of visitors per year', function() {

  park.addDinosaus(dinosaur1)
  const actual = park.guestPerYear()
  assert.strictEqual(actual, 18250);


});


  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaus(dinosaur1)
    const actual = park.revenuePerYear()
    assert.strictEqual(actual, 91250);

  });

  it('should be able to remove dinosaurs of particular species', function(){
    park.addDinosaus(dinosaur1)
      park.addDinosaus(dinosaur1)
        park.addDinosaus(dinosaur1)
    park.addDinosaus(dinosaur2)
    const actual = park.removeSpecies('t-rex').length;
    assert.strictEqual(actual,1);
  });
});
