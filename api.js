const axios = require('axios');

async function addDeal(accessToken, data) {

	const res = await axios.post('https://api.pipedrive.com/v1/deals', data, {
  	headers: {
    // Overwrite Axios's automatically set Content-Type
		'Authorization': `Bearer ${accessToken}`,
    	'Content-Type': 'application/json'
  	},
	timeout: 10000
});
	return res;
}

async function getUser(accessToken) {
	const requestOptions = {
		url: 'https://api.pipedrive.com/v1/users/me',
		headers: {
			'Authorization': `Bearer ${accessToken}`
		},
		timeout: 10000
	};

	const userInfo = await axios(requestOptions);

	return userInfo.data;
}

module.exports = {
	addDeal,
	getUser
};