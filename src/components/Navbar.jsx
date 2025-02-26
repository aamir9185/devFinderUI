import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useNavigate } from "react-router-dom"
import { removeUser } from "../utils/userSlice"


const Navbar =  () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  const handleLogout = async () =>{
  try {
    await axios.post(BASE_URL + "/logout",{},{withCredentials: true})
    dispatch(removeUser())
    navigate('/login')
  } catch (error) {
    console.error(error)
  }
  }


  return (
    <div className="navbar bg-base-300 shadow-sm">
    <div className="flex-1">
      <Link to={'/'} className="btn btn-ghost text-xl">devFinder</Link>
    </div>
    <div className="flex gap-2 mx-3">
     {user && (<div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Photo"
              src={user.photo} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to={'/profile'} className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link>Settings</Link></li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>)}
    </div>
  </div>
  )
}

export default Navbar