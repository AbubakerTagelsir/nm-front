// main application footer
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-content">
                                <div className="footer-copyright">
                                    <p>&copy; 2016 <a href="http://www.michael-simpson.com">Michael Simpson</a></p>
                                    <p>All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;