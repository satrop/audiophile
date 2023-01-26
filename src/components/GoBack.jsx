import { Link, useNavigate } from 'react-router-dom';

const GoBack = () => {
	const navigate = useNavigate();
	return (
		<div className="content">
			<Link
				className="back"
				to={'..'}
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}>
				Go Back
			</Link>
		</div>
	);
};

export default GoBack;
