import { Outlet, Navigate } from "react-router-dom"
import NoAccess from "../pages/NoAccess";

const ProtectedRoutes = ({user}) => {
    return user ? <Outlet/> : <NoAccess/>
}

export default ProtectedRoutes