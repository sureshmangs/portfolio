import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div >
                <div className="page-footer font-small special-color-dark pt-5 pb-5 bg-dark">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a className="btn-floating  mx-3" href={"https://www.facebook.com/sureshmangs3"}>
                                    <img src={require('../images/socialIcons/facebook.png')} alt="facebook logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating  mx-3" href={"https://github.com/sureshmangs"}>
                                    <img src={require('../images/socialIcons/github.png')} alt="github logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating  mx-3" href={"https://www.instagram.com/suresh_mangs7/"}>
                                    <img src={require('../images/socialIcons/instagram.png')} alt="instagram logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating  mx-3" href={"https://in.linkedin.com/in/suresh-mangs-2552a3186"}>
                                    <img src={require('../images/socialIcons/linkedin.png')} alt="linkedin logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating  mx-3" href={"https://stackoverflow.com/users/11398996/suresh-mangs"}>
                                    <img src={require('../images/socialIcons/stackoverflow.png')} alt="stackoverflow logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;