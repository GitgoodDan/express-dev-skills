const skills = [
    { id: 111, skill: 'Javascript', learned: true},
    { id: 222, skill: 'HTML', learned: true},
    { id: 333, skill: 'CSS', learned: true},
]

function getAll(){
    return skills;
};

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = true;
    skills.push(skill);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}