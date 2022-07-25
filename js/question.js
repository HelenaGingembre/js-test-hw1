const services = {

   users: [
    {
        importantSkills: [ 'tempor'],
        name: "Moore",
        gender: "male",
        skills: {  // назва skills та бали за них
            ipsum: 5,
            lorem: 10
        },
        age: 37,
    },
    {
        importantSkills: ['ipsum'],
        name: "Briana",
        gender: "female",
        skills: {
            ipsum: 5,
            tempor: 8,
            mollit: 10,
        },
        age: 30,
    }
],
//потрібно по обраному name та по головним навичкам
// для замовника  importantSkills, вивести skills які підходять замовнику
// у вигляді (ipsum - 5,tempor - 8).
    getUser(name) {
        let result = this.users.find(user => user.name === name);

        return result;
    },
    getSkills(name) {
        return this.getUser(name).skills;
            
      //.map(arg => `skill: ${arg.key} balls: ${arg}`)
      //.join(" - ");
    },
    getSkillsByImportant(name, skill) {
        let user = this.getUser(name);
        
        if (user.importantSkills.includes(skill)) {
            console.log(this.getSkills(name));
            let arr = { ...this.getSkills(name) };
            return arr.map(arg => `skill: ${arg[key]} balls: ${arg}`)
            .join(" - ");
        }

        return `таких навичок у стажера ${name} немає`;
    }
  
}
//console.table(services.getUser('Briana'));
//console.table(services.getSkills('Briana'));
//services.getSkillsByImportant('Briana', 'ipsum')
console.table(services.getSkillsByImportant('Briana', 'ipsum'));
