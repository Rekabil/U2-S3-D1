class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  diff() {
    if (p1.age === p2.age) {
      return "They have the same age";
    } else if (p1.age > p2.age) {
      return p1.firstName + " is older than " + p2.firstName;
    } else {
      return p2.firstName + " is older than " + p1.firstName;
    }
  }
}

const p1 = new User("Mario", "Mario", "45", "Toscana");
const p2 = new User("Luigi", "Mario", "41", "Toscana");

console.log(p1);
console.log(p2);

console.log(p1.diff());

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

let ownerList = [];

function petSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("petForm");
  const p = new Pet(
    form.elements["petName"].value,
    form.elements["ownerName"].value,
    form.elements["species"].value,
    form.elements["breed"].value
  );
  let sameOwner = "False";

  for (let i = 0; i < ownerList.length; i++) {
    if (p.ownerName === ownerList[i]) {
      sameOwner = "True";
      break;
    } else {
      sameOwner = "False";
    }
  }
  ownerList.push(p.ownerName);
  document.getElementById(
    "petList"
  ).innerHTML += `</hr><p>Name: ${p.petName}  Owner: ${p.ownerName} Species: ${p.species} Breed: ${p.breed} Does the owner have multiple pets?: ${sameOwner}</p>`;
  console.log(ownerList);
  console.log(p);
}
