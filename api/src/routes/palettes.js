const { Router } = require("express");
// const { Op } = require("sequelize");
const { Palette } = require("../db");
// const recipeDb = require("./utils/recipeDb");

const router = Router();

router.get('/', async (req, res) => {

    try {

        // const { name } = req.query

        // if (!name) {
    
            // NO TENGO QUERY --> consulto a la db --> SELECT * FROM supplier;
            const response = await Palette.findAll()

            res.send(response)
        // }
        // else {
        //     // SI TENGO QUERY --> consulto a la bd --> SELECT * FROM supplier WHERE name = name;
        //     const response = await Supplier.findAll({
        //         where: {
        //             name: {
        //                 [Op.iLike]: `%${name}%`
        //             },
        //         }
        //     })

        //     if (response) {
        //         res.send(response)
        //     }
        //     else {
        //         res.send('Supplier not found')
        //     }

        // }
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;