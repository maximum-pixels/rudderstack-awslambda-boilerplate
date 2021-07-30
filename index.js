const WRITE_KEY = '';
const DATA_PLANE_URL = '';
const Analytics = require("@rudderstack/rudder-sdk-node");
const client = new Analytics(WRITE_KEY, DATA_PLANE_URL+"/v1/batch");

/**
 * @param {*} event JSON Object/Array from the webhook payload
 * @returns object lambda response, nothing to do with it
 */
exports.handler = (event) => {
	
	// do something with the event object


	/**
	 * Call this at the very end 
	 * It will make sure the event is sent to Rudder before Lambda exits
	 */
	client.flush();
    
    return response = {
        statusCode: 200
    };
};
