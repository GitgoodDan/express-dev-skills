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

module.exports = {
    index,
    show,
};