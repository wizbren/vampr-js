class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

/** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire); //Add a new vampire to this.vampire's children
    vampire.creator = this;       //Sets this vampire as parent of new vampire
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length; //Returns number of vampires in offspring category
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let count = 0;
                                              //Will move up chain of vampires until reaching original
    while (currentVampire.creator !== null) {  
      currentVampire = currentVampire.creator;//Moves to the creator of the currentVampire
      count++;                                //Counts how many vampires to reach the original
    }
    return count;  //Returns how many vampires to reach original
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;            
  }
  //^^^ Whichever vampire has less steps to get to the original, is the more senior vampire
  
/*     SECOND ASSIGNMENT QUESTIONS BELOW     */

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {  //If the current vamp matches the name, return it
      return this;
    }
    for (const child of this.offspring) {
      const found = child.vampireWithName(name); //Search using child
      if (found) return found;                //Return if found
    }
    return null; //If nothing found in branch, return null (?)
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;

