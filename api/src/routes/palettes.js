const { Router } = require("express");
const { Palette } = require("../db");

const router = Router();

router.get('/', async (req, res) => {

    try {
        // consulto a la db --> SELECT * FROM palette;
        const response = await Palette.findAll()

        res.send(response)

    } catch (e) {
        console.log(e)
    }
})


module.exports = router;