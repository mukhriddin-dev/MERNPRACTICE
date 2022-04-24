import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="bd-heade d-flex w-100 justify-content-between bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">

                <div className="container-fluid d-flex align-items-center justify-content-between">

                    <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                        <i className="bi bi-rss"></i>
                        <span className='mx-3 d-block d-sm-none d-lg-block d-lg-inline-block d-xs-none'> NEWSPAPPER</span>
                    </h1>

                    <div className="ok">
                        <Link to="/" className="btn btn-outline-light ml-4 m-1"><i className="bi bi-bar-chart-steps"> </i> HOME </Link>
                        <Link to="/news" className="btn btn-outline-light ml-4 m-1"><i className="bi bi-broadcast-pin"></i> NEWS </Link>
                        <Link to="/create" className="btn btn-outline-light ml-4 m-1"><i className="bi bi-plus-circle"></i>  ADD </Link>

                    </div>
                </div>

            </header>

        </div>
    );
};

export default Navbar;