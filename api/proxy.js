const request = require('request');

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 添加CORS头
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // 设置允许的方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 设置允许的请求头

    const { key } = req.query;
    const apiUrl = `https://api.1-sms.com/api/sms/get?key=${key}`;
    
    request(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            return res.status(500).send({ error: 'Something went wrong!' });
        }
        res.status(200).send(body);
    });
};
