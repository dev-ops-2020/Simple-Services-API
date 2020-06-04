const IndexController = {};

function getIndex(req, res){
    const response = {
        'message': 'REST-API Simple Services',
        'version': '1.0.0'
    }
    res.json(response);
};

module.exports = {
    getIndex
};