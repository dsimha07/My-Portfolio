import "./Contacts.css";
import SecHeading from "./SecHeading";


function Contacts(){
    return(
        <div>
            <section id="contacts" className="br-contact padding-tb-50 sec-bg">
                <div className="container d-block">
                    <SecHeading title1 = "Get in" title2 = "Touch" bgText = "Contact"/>
                    <div className="row m-b-minus-30px">
                        <div className="col-lg-5 col-md-12">
                            <div>
                                <div className="br-box">
                                    <div className="detail">
                                        <div className="ion">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">
                                            <h3 className="title">Mail & Website</h3>
                                            <p>
                                                <i className="fa fa-envelope" aria-hidden ="true"></i>
                                                &nbsp; deepaksimha2003@gmail.com
                                            </p>
                                            <p>
                                                <i className="fa fa-globe" aria-hidden = "true"></i>
                                                <a href="www.yourdomain.com">&nbsp; www.yourdomain.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="br-box">
                                    <div className="detail">
                                        <div className="ion">
                                            <i className="fa fa-mobile" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">
                                            <h3 className="title">Contact</h3>
                                            <p>
                                                <i className="fa fa-mobile" aria-hidden ="true"></i>
                                                &nbsp; (+91) 9392848728
                                            </p>
                                            <p>
                                                <i className="fa fa-mobile" aria-hidden = "true"></i>
                                                &nbsp; (+91) 8106252436
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="br-box">
                                    <div className="detail">
                                        <div className="ion">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="info">
                                            <h3 className="title">Address</h3>
                                            <p>
                                                <i className="fa fa-map-marker" aria-hidden ="true"></i>
                                                &nbsp; Rasi Hills Apt, Lakdikapul, Hyderabad, 500004.
                                            </p>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7  col-md-12">
                            <form action="https://formspree.io/f/mdkdgewg" method="POST">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="fname" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" id="umail" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="phone" className="form-control" id="phone" placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message"className="form-control" id="textarea" rows={4} placeholder="Message" required></textarea>
                                </div>
                                <button type="submit" className="br-learn-more-right">
                                    <span className="textarea">Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;