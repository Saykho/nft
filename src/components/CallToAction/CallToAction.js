import React from "react";
import "./CallToAction.scss";

export function CallToAction() {
    return (
        <div className="cta">
            <div className="cta__content">
                <div className="cta-slogan hairline-large">Save your time with Stacks</div>
                <div className="cta-title h1">Earn free crypto with Crypter</div>
                <div className="cta-description body-2">A creative agency that lead and inspire</div>
                <div className="cta-buttons">
                    <button className="button-now button">Earn now</button>
                    <button className="button-more button">Discover more</button>
                </div>
            </div>
            <img src="img/cta.svg" alt="Cube" className="cta__img"/>
        </div>
    );
}