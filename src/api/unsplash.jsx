import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID q9SYi9K3mCRKTrPUqFa9vvjPNW1zOJjM54E80UddPZo',
	},
});
