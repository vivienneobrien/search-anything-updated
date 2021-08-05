import NoDataMsg from './NoDataMsg';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg'

const ImagesResults = ({ imageSearch, isLoading, error }) => {
	const data = (imageSearch || {}).hits || [];

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		// TODO: render error for imageSearch request
		return <ErrorMsg msg={error} />
	}

	if (data.length === 0) {
		return <NoDataMsg />;
	}

	return data.map((item, index) => {
		return (
			<img
				src={item.webformatURL}
				alt={item.tags}
				key={index}
			/>
		);
	});
}

export default ImagesResults;