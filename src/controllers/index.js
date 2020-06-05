const IndexController = {};

function Index(req, res) {
  const response = {
    message: 'REST-API Simple Services',
    version: '1.0.0',
  };
  res.json(response);
}

function NotFound(req, res) {
  const response = {
    message: 'Resource Not Found',
    error: 404
  }
  res.json(response)
}

module.exports = {
  Index,
  NotFound
};
