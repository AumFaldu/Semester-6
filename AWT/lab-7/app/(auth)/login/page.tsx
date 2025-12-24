export default function login(){
    return(
        <>
            <form>
                <fieldset>
                    <legend className="text-center">Login Page</legend>
                <div className="mb-3">
                <label htmlFor="userName" className="form-label">UserName:</label>
                <input id="userName" type="text" className="form-control" placeholder="Enter Username"/>
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input id="password" type="password" className="form-control" placeholder="Enter Password"/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </fieldset>
            </form>
            </>
    )
}