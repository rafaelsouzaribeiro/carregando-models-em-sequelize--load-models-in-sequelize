# Como-alterar-o-format-de-data-para-pt-br-no-sequelize-How-to-change-date-format-in-sequelize-ORM
Em app/models/index.js está o mapeamento de inclusão dos models
Em app/repositories/category-repository.js temos a chamada:
const Project = require("../models").category;
Possibilitando a chamada dos models de uma forma amigável e também podemos chamar o sequelize objeto:
const sequelize = require("../models").sequelize;
