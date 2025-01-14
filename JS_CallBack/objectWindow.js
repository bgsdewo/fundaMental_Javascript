//Object This Di Dalam Arrow Function Mengarah Pada Object Global Window

const person = {
  firstName: "Bagus",
  lastName: "Sadewo",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const personn = {
  firstName: "Bagus",
  lastName: "Sadewo",
  fullName: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  panggilNanti: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this.firstName);
    }, 3000);
  },
};
console.log(person.fullName());
console.log(personn.fullName());
