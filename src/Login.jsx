import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Import Link



function Login() {
    return (
        <center>
            <div className='contain'>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Login in</h1>

                    <div className="form-floating mail">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mail">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>

                    {/* Sign up link */}
                    <div>
                        <Link className="nav-link a" to="/Sign up">
                            Sign up
                        </Link>
                    </div>

                    <div className='btn'>
                        <button className="btn btn-primary w-100 py-2" type="submit">Login in</button>
                    </div>
                </form>
            </div>
        </center>
    );
}

export default Login;
