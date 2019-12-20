import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark py-5">
                    <h2 id="Education" className="text-center text-white mb-4">EDUCATION</h2>
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <ul className="timeline">
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h5 mb-0">B.Tech - 7.03 CGPA</h2>
                                    <span className="small text-gray">
                                        2017-2021
                                    </span>
                                    <p className="text-small mt-2 font-weight-light">Indian Institute of Information Technology Kota</p>
                                </li>
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h5 mb-0">Class XII - 79.00%</h2>
                                    <span className="small text-gray">
                                        2015-2016
                                    </span>
                                    <p className="text-small mt-2 font-weight-light">Kendriya Vidyalay Air Force Station, Saharanpur, UP</p>
                                </li>
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h5 mb-0">Class X - 9.6 CGPA</h2>
                                    <span className="small text-gray">
                                        2013-2014
                                    </span>
                                    <p className="text-small mt-2 font-weight-light">Kendriya Vidyalay Air Force Station, Saharanpur, UP</p>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;