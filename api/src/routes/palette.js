const { Router } = require("express");
const { Palette } = require("../db");

const router = Router();

router.post('/', async (req, res) => {
    
    const { name, colors } = req.body

    const newPalette = await Palette.create({
        name, 
        colors 
    })
    // console.log(newSupplier)
    res.send('Palette added succesfully!')
})

module.exports= router;