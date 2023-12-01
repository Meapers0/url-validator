const http = require('http');
const https = require('https');

function validateUrl(url) {
    return new Promise((resolve, reject) => {
        const url_object = new URL(url);
        const http_module = url_object.protocol === 'https: ' ? https : http;

        const request = http_module.get(url, (response) => {
            response.on('data', () => {});
            response.on('end', () => resolve(response.statusCode));
        });
        request.on('error', reject);

        setTimeout(() => {
            request.destroy();
        }, 10000);
    });
}


async function isURL(url = ''){
    try {
        const original_url = new URL(url);
        return original_url !== null && original_url.protocol.startsWith('http');
    } catch (error) {
        return false
    }
}

module.exports = { validateUrl };