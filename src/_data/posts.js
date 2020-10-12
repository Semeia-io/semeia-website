const axios = require('axios');

module.exports = async function() {
    // const postsURL = 'http://localhost/semeia/wp-json/mejlak/v1/posts';
    const postsURL = 'https://semeia.reachadvertising.biz/wp-json/mejlak/v1/posts';

    const response = await axios.get(postsURL);
    return response.data;
}
