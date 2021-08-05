import NoDataMsg from './NoDataMsg';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg'

const VideosResults = ({ videoSearch, isLoading, error }) => {
	const data = (videoSearch || {}).hits || [];

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		// TODO: render error for videoSearch request
		return <ErrorMsg msg={error} />
	}

	if (data.length === 0) {
		return <NoDataMsg />;
	}

	return data.map((item, index) => {
		return (
			<div key={index}>
				<h4>{item.tags}</h4>
				<video width="320" height="240" controls>
					<source src={item.videos.medium.url} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<h6>User : {item.user}</h6>
				<h6>Views : {item.views}</h6>
				<h6>Likes : {item.likes}</h6>
				<h6>Comments : {item.comments}</h6>
			</div>
		);
	});
}

export default VideosResults;
