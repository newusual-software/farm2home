import { useSelector } from "react-redux";

function Dashboard(){
	const { user } = useSelector(state => state.user);

	return (
		<div>
		  <h1>Hello Email:{user?.email}</h1>		
		</div>
	);
}

export default Dashboard;