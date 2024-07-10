// api/proxy.js

const request = require('request');

module.exports = async (req, res) => {
    const apiKey = req.query.key;
    const apiUrl = `https://api.1-sms.com/api/sms/get?key=${apiKey}`;

    try {
        request(apiUrl, { json: true }, (error, response, body) => {
            if (error) {
                return res.status(500).json({ error: 'Something went wrong!' });
            }
            res.json(body);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
};
