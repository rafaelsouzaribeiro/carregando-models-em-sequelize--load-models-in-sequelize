const Project = require("../models").category;

exports.getById = async (id) =>{
    const res = await Project.findOne({ where:{id:id}  });
    return res;

}


