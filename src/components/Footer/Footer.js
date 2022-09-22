import React from "react";
import "./Footer.scss";

export function Footer() {
    return (
        <footer className="footer">
            <div className="top-bar">
                <div className="top-bar__title">
                    <img src="img/logo.svg" alt="Logo" className="footer-logo"/>
                    <div className="name body-1">The New Creative <br/> Economy.</div>
                </div>
                <div className="top-bar__info">
                    <div className="info-title body-bold-2">Crypter.</div>
                    <ul className="info-links small">
                        <li>Discover</li>
                        <li>Connect wallet</li>
                        <li>Create item</li>
                    </ul>
                </div>
                <div className="top-bar__info">
                    <div className="info-title body-bold-2">Info</div>
                    <ul className="info-links small">
                        <li>Download</li>
                        <li>Demos</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="top-bar__subscription">
                    <div className="subscription-title body-bold-2">Join Newsletter</div>
                    <div className="subscription-description caption">Subscribe our newsletter to get more free
                        design <br/>
                        course and resource
                    </div>
                    <div className="email-enter">
                        <form>
                            <input type="email" name="email" placeholder="Enter your email"
                                   className="email-field caption"/>
                            <button type="submit" className="email-button">
                                <img src="img/arrow-r.svg" alt="Send" className="email-img"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__text caption-bold">Copyright © 2021 UI8 LLC. All rights reserved</div>
                <div className="copyright__cookies">
                    <div className="use-cookies caption-bold">We use cookies for better service.</div>
                    <div className="accept caption-bold-2">Accept</div>
                </div>
            </div>
        </footer>
    );
}
