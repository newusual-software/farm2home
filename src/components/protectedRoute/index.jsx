import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; 

function ProtectedRoute(){
	const user  = useSelector(state => state.user);

	return user.isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" replace/>
}

export default ProtectedRoute;