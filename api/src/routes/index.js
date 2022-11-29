const { Router } = require('express');

// Importar todos los routers;
const palettes = require('./palettes')
const palette = require('./palette')


const router = Router();

// Configurar los routers
router.use('/palettes', palettes)
router.use('/palette', palette)


module.exports = router;
