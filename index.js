async function isURL(url = ''){
    try {
        const original_url = new URL(url);
        return original_url !== null && original_url.protocol.startsWith('http');
    } catch (error) {
        return false
    }
}

module.exports = { isURL };