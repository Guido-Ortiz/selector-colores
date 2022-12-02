const { Router } = require("express");
const { Palette } = require("../db");

const router = Router();

router.post('/', async (req, res) => {
    
    const { name, colors } = req.body

    const newPalette = await Palette.create({
        name, 
        colors 
    })
    
    res.send('Palette added succesfully!')
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try{
        const { id } = req.params
        // const { id } = req.body
        await Palette.destroy({
            // where: {id: id}
            where: {id: id}
        })
        res.send('Palette deleted succesfully')
    } catch(e) {
        console.log(e)
    }
})

module.exports= router;