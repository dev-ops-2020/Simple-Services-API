const IndexController = {};

function Index(req, res) {
  const response = {
    message: 'REST-API Simple Services',
    version: '1.0.0',
  };
  res.send(response);
}

function NotFound(req, res) {
  const response = {
    message: 'Resource Not Found',
    error: 202
    //error: 404
  }
  res.send(response)
}

module.exports = {
  Index,
  NotFound
};
