const request = require('request');

export default (req, res) => {
    const { key } = req.query;
    const apiUrl = `https://api.1-sms.com/api/sms/get?key=${key}`;
    
    request(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            return res.status(500).send({ error: 'Something went wrong!' });
        }
        res.status(200).send(body);
    });
};
