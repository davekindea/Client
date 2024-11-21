import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="flex flex-col gap-10 ">
      <img src="" alt="Logo" />
      <div className="flex flex-col gap-5">
        <Link to={'/'}>Dashboard</Link>
        <Link to={'/notification'}>Notifications</Link>
        <Link to={'/approvals'}>Approvals</Link>
        <Link to={'/FAQs'}>FAQs</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'login'}>Login</Link>
      </div>
    </div>
  )
}
export default Sidebar