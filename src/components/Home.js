import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Welcome, User!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <div className="card bg-success">
                                <img src={require("../images/checkoutBook.jpg")} className="card-img-top" alt="checkout"/>
                                <div className="card-body text-center">
                                    <Link to="/checkout" className="btn btn-lg btn-success" replace>
                                        Checkout Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-success">
                                <img src={require("../images/returnBook.jpg")} className="card-img-top" alt="return"/>
                                <div className="card-body text-center">
                                    <Link to="/return" className="btn btn-lg btn-success" replace>
                                        Return Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Home;