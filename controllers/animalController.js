const Animal = require("../models/Animal");

exports.getAllAnimals = async (req, res) => {  
    const animals = await Animal.find(); 
    res.render("animals/index", { animals }); 
}; 

exports.getAnimalDetail = async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    res.render("animals/show", { animal });
};