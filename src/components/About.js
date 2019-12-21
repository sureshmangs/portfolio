import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';
import Education from './Education';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="about" className="pb-5">
                    <div className="container-fluid pt-5 ">
                        <div className="text-center">
                            <img src={require('../images/me.jpg')} className="border border-dark rounded-circle mx-auto img-fluid d-block" style={{ width: "200px", height: "200px" }} alt="" />
                            <p id="aboutName" className="mt-5">Suresh Mangs</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                    <p className="mb-0 mt-2 font-italic">"I am a Computer Science and Engineering undergraduate
                                    student at Indian Institute of Information Technology Kota .I like building new
                                    stuff and work with other people."</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 mx-auto">
                                <div className="text-center">
                                    <a className="center-block" href={"https://drive.google.com/file/d/1B5SOdrox52PdvbEinrbvlZsBjQk68NV3/view?usp=sharing"}>
                                        <button type="button" className="btn btn-primary center-block">RESUME</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Education />
                <Footer />
                <Social />
            </div>
        )
    }
}

export default About;