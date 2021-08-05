import { useState } from 'react';
import axios from 'axios';

// TODO: Store Keys in dotenv
const PIXABAY_API_KEY = '22424374-e4cb1c8f8a738bc1e3dd830a9';
const SERPSTACK_API_KEY = '5a0627a84b52eb8b94d4e0c68cdabfe8';

const PIXABAY_API_URL = `https://pixabay.com/api/`
const SERPSTACK_API_URL = `http://api.serpstack.com/search`

export const useFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [data, setData] = useState({});

	const fetchData = async (query) => {
		setIsLoading(true);

		const getTextSearch = () => (
			axios.get(SERPSTACK_API_URL, {
				params: {
					query,
					access_key: SERPSTACK_API_KEY
				}
			})
		);

		const getImageSearch = () => (
			axios.get(PIXABAY_API_URL, {
				params: {
					q: query,
					per_page: 30,
					page: 1,
					key: PIXABAY_API_KEY
				}
			})
		);

		const getVideoSearch = () => (
			axios.get(`${PIXABAY_API_URL}/videos`, {
				params: {
					q: query,
					per_page: 30,
					page: 1,
					key: PIXABAY_API_KEY
				}
			})
		);

		axios
			.all([getTextSearch(), getImageSearch(), getVideoSearch()])
			.then((response) => {
				setIsLoading(false);
				setData({
					textSearch: response[0].data,
					imageSearch: response[1].data,
					videoSearch: response[2].data
				});
			})
			.catch((error) => {
				setIsLoading(false);
				// TODO: store error per request
				setError(error.message);
			})
	}

	return {
		isLoading,
		data,
		error,
		fetchData
	}
}