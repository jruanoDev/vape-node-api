module.exports = function(app) {
    var liquids = require('../controller/liquidController');
    
    app.route('/liquids/')
        .get(liquids.listAllLiquids)
        .post(liquids.createLiquid);
    
    app.route('/liquids/:id')
        .delete(liquids.deleteLiquid)
        .put(liquids.updateLiquid);
}   