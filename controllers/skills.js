const Skill = require('../models/skill.js')

function index(req, res){
    const skills = Skill.getAll();
    res.render('skills/index.ejs', { skills: skills });
};

function show(req, res){
    res.render('skills/show.ejs', {
        skill: Skill.getOne(req.params.id),
    });
};

function newSkill (req, res) {
    res.render('skills/new', {title: 'New Skill'});
}

function create (req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
};