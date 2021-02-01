const config = require("../util/ConfigManager");
const logger = require("../util/Logger");

const logMessage = (level, success, message, api, id, opts) => {
  logger.log({
    level,
    label: "MX-Controller",
    message: `{ success: ${success}, message: ${message}, api: ${api}, id: ${id}, other: ${opts} }`,
  });
};

const downloadDataById = (req, res) => {
    if (!req?.params?.id) {
        // any other error handler here
        return `Error - no id ${id} found.`
    }

    logMessage('info', 'true', 'Error message on request', req.path, req.params.id, '');
    
    /* Token based service

    return service.downloadDataById(req.params.id, req.get(X_AUTH_TOKEN))

    */

   return service
    .downloadDataById(req.params.id)
    .then(response => succesHandler(response, req, res))
    .catch(error => errorHandler(error, res, "MX-EXCEPTION-001"));
}

const uploadData = (req, res) => {};

const deleteDataById = (req, res) => {};

module.exports = {
    downloadDataById,
    uploadData,
    deleteDataById
}
