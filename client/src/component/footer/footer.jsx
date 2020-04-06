import React from 'react';
import { Container } from 'reactstrap';
export default function Footer() {
    return (
        <footer className="footerContainer py-5" >
            <Container style={{
                display: "grid",
                justifyContent: "space-around",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gridColumnGap: "1rem"
            }}>
                <div className="footer-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
                    <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, similique dolorum cum eveniet quidem reprehenderit inventore </p>
                </div>
                <div className="footer-item">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Cool stuff</a></li>
                        <li><a className="text-muted" href="/">Random feature</a></li>
                        <li><a className="text-muted" href="/">Team feature</a></li>
                        <li><a className="text-muted" href="/">Stuff for developers</a></li>
                        <li><a className="text-muted" href="/">Another one</a></li>
                        <li><a className="text-muted" href="/">Last time</a></li>
                    </ul>
                </div>

                <div className="footer-item">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Business</a></li>
                        <li><a className="text-muted" href="/">Education</a></li>
                        <li><a className="text-muted" href="/">Government</a></li>
                        <li><a className="text-muted" href="/">Gaming</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Team</a></li>
                        <li><a className="text-muted" href="/">Locations</a></li>
                        <li><a className="text-muted" href="/">Privacy</a></li>
                        <li><a className="text-muted" href="/">Terms</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
