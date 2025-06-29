const findTheOldest = function(people) {
    /* OLD SOLUTION
    return people.reduce(
        (oldest, person) => {
            const presentYear = (new Date()).getFullYear();

            const oldestAge = 
                ("yearOfDeath" in oldest ? oldest.yearOfDeath : presentYear)
                - oldest.yearOfBirth
            const personAge = 
                ("yearOfDeath" in person ? person.yearOfDeath : presentYear)
                - person.yearOfBirth

            return (personAge > oldestAge) ? person : oldest;
        }
    );
    */

    // NEW SOLUTION using the nullish coalescing operator and a helper function!
    return people.reduce(
        (oldestPerson, person) => {
            const oldestPersonAge = getAge(oldestPerson);
            const personAge = getAge(person);
            return (oldestPersonAge < personAge) ? person : oldestPerson;
        }  
    );

};

const getAge = function(person) {
    // This is shorthand for person.deathYear = person.deathYear ?? ...
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth
};

// Do not edit below this line
module.exports = findTheOldest;
