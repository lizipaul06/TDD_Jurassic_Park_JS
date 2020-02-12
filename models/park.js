const Park  = function(name, ticketPrice){
this.name = name;
this.ticketPrice = ticketPrice;
this.dinosaurs = [];
}

Park.prototype.dinosaursCollection = function () {
  return Array.isArray(this.dinosaurs)
};

Park.prototype.countDinosaus = function () {
  return this.dinosaurs.length
};

Park.prototype.addDinosaus = function (dinosaur) {
  return this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaus = function (name) {
  const dinosaurIndex = this.dinosaurs.indexOf(name);
   return this.dinosaurs.splice(dinosaurIndex, 1);
};

Park.prototype.dinosaurMostAttraction = function () {
  let attractions = []
  for (let dinosaur of this.dinosaurs){
    attractions.push(dinosaur.guestsAttractedPerDay)}
   return Math.max.apply(null, attractions);
};

Park.prototype.dinosaurOfSpecies = function (specie_name) {
  let filtered = [];
for (let dinosaur of this.dinosaurs) {
  if (dinosaur.species === specie_name){
    filtered.push(dinosaur)}
   }
// let result = this.dinosaurs.filter(dinosaur => dinosaurMostAttrac)
    return filtered;
};


Park.prototype.guestPerDay = function () {
  guestPerDay = 0
  for (let dinosaur of this.dinosaurs){
    guestPerDay += dinosaur.guestsAttractedPerDay
  }
  return guestPerDay
};

Park.prototype.guestPerYear = function () {
  return this.guestPerDay() * 365
};

Park.prototype.revenuePerYear = function () {
  return this.guestPerYear() * this.ticketPrice
};

Park.prototype.removeSpecies = function (specie_name) {
  let filtered = this.dinosaurOfSpecies(specie_name)
     for (let dinosaur of filtered){
       if(dinosaur.species == specie_name)
       this.removeDinosaus(dinosaur)
     }
  return this.dinosaurs;

};

Park.prototype.diets = function () {
  let dietSummary = {};
  let counter = 0;
  for (const dinosaur of this.dinosaurs){
    if (dietSummary.hasOwnProperty(dinosaur.diet)){
      // The hasOwnProperty() method returns a boolean
      //indicating whether the object has the specified property as its own property (as opposed to inheriting it)
      dietSummary[dinosaur.diet] +=1
    } else{
      dietSummary[dinosaur.diet] =1
    }
  }
  return dietSummary;

}

// Park.prototype.numberOfDinosaursByDiet = function () {
//   const numberOfDinosaursByDiet = {};
//
//   for (const dinosaur of this.dinosaurs) {
//     if (numberOfDinosaursByDiet[dinosaur.diet]) {
//       numberOfDinosaursByDiet[dinosaur.diet] += 1;
//     }
//     else {
//       numberOfDinosaursByDiet[dinosaur.diet] = 1;
//     }
//   }
//
//   return numberOfDinosaursByDiet;
// }


module.exports = Park;
