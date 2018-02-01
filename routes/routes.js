module.exports = function(app) {
    var liquids = require('../controller/liquidController');
    
    app.route('/liquids/')
        .get(liquids.listAllLiquids)
        .post(liquids.createLiquid);
    
    app.route('/liquids/:id')
        .delete(liquids.deleteLiquid)
        .put(liquids.updateLiquid);
    
    var flavours = require('../controller/flavourController');
    
    app.route('/flavours/')
        .get(flavours.listAllFlavours)
        .post(flavours.createFlavour);
    
    app.route('/flavours/:id')
        .put(flavours.updateFlavour)
        .delete(flavours.deleteFlavour);
    
    var bases = require('../controller/baseController');
    
    app.route('/bases/')
        .get(bases.listAllBases)
        .post(bases.createBase);
    
    app.route('/bases/:id')
        .put(bases.updateBase)
        .delete(bases.deleteBase);
    
    var premades = require('../controller/premadeController');
    
    app.route('/premades/')
        .get(premades.listAllPremades)
        .post(premades.createPremade);
    
    app.route('/premades/:id')
        .put(premades.updatePremade)
        .delete(premades.deletePremade);
}   