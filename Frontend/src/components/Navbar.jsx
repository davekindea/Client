const Navbar = () =>{
    return(
        <>
        <div className="flex flex-row justify-between h-20 items-center border shadow-lg rounded-2xl p-5">
            <h1>Document Management</h1>
            <div className="flex items-center">
                <img src="path_to_photo.jpg" alt="Account Holder" className="account-photo rounded-full" />
                <span className="account-name">Account Holder Name</span>
            </div>
        </div>
        </>
    );
}

export default Navbar;