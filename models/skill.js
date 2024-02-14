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

module.exports = {
    getAll,
    getOne,
}