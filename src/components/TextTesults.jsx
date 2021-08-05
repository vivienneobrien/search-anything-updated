import NoDataMsg from "./NoDataMsg";
import Loader from './Loader';
import ErrorMsg from './ErrorMsg'

const TextTesults = ({ textSearch, isLoading, error }) => {
	const data = (textSearch || {}).organic_results || [];

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		// TODO: render error for textSearch request
		return <ErrorMsg msg={error} />
	}

	if (data.length === 0) {
		return <NoDataMsg />;
	}

	return data.map((item, index) => {
		return (
		<div key={index}>
			<h4>
			<a href={item.url}>{item.title}</a>
			</h4>
			<a href={item.url}>{item.url}</a>
			<h6>{item.snippet}</h6>
		</div>
		);
	});
}

export default TextTesults;