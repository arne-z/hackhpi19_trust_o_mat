// Returns true if successful, undefined if not
function parseQueryParam(req, res, paramName, type, defaultVal = null) {
    try {
        let paramVal = defaultVal;
        const queryVal = req.query[paramName];
        if (queryVal != null) {
            switch (type) {
                case "int":
                    paramVal = parseInt(queryVal);
                    break;
                case "json":
                    paramVal = JSON.parse(queryVal);
                    break;
                default:
                    res.status(500).json({message: `No parsing function for type '${type}'. Complain to Leo.`})
            }
        }
        return paramVal;
    } catch (e) {
        res.status(400).json({
            message: `Failed to parse query param '${paramName}' of type '${type}'.`,
            error: e.message,
        });
        return undefined;
    }
}

module.exports = {
    parseQueryParam,
};
