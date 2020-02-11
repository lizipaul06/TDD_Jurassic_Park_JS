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
   return this.dinosaurs.splice(dinosaurIndex)
};

Park.prototype.dinosaurMostAttraction = function () {
  let attractions = []
  for (dinosaur of this.dinosaurs){
    attractions.push(dinosaur.guestsAttractedPerDay)}
   return Math.max.apply(null, attractions);
};

Park.prototype.dinosaurOfSpecies = function (specie_name) {
  let filtered = [];
for (dinosaur of this.dinosaurs) {
  if (dinosaur.species === specie_name){
    filtered.push(dinosaur)}
   }

    return filtered;
};


Park.prototype.guestPerDay = function () {
  guestPerDay = 0
  for (dinosaur of this.dinosaurs){
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
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === specie_name){
      this.removeDinosaus(dinosaur)
  }
  return this.dinosaurs;
};

};
module.exports = Park;
