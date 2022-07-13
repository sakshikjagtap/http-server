const createNext = handlers => {
  let index = -1;
  const callNextHandler = (req, res) => {
    index++;
    const currentHandler = handlers[index];
    if (currentHandler) {
      currentHandler(req, res, () => callNextHandler(req, res));
    }
  };
  return callNextHandler;
};

const createRouter = (handlers) => {
  return (req, res) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);
    request.url = url;
    const next = createNext(handlers);
    next(req, res);
  };
};

module.exports = { createRouter };
