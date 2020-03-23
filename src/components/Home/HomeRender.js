import React from 'react';
import {Link} from 'react-router-dom';
import checkoutImg from '../../assets/img/checkoutBook.jpg';
import returnImg from '../../assets/img/returnBook.jpg';

const HomeRender = (props) => {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Welcome, {props.borrower.name}!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <div className="card bg-primary">
                                <img src={checkoutImg} className="card-img-top" alt="checkout"/>
                                <div className="card-body text-center">
                                    <Link to="/checkout" className="btn btn-lg btn-primary" replace>
                                        Checkout Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-primary">
                                <img src={returnImg} className="card-img-top" alt="return"/>
                                <div className="card-body text-center">
                                    <Link to="/return" className="btn btn-lg btn-primary" replace>
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

export default HomeRender;