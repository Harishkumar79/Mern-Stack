import React from 'react';

const ContactUs = () => {
    return (
        <div className="row">
            <div className="col-sm-12 text-center mb-4">
                <h1>Contact Us</h1>
            </div>
            <div className="col-sm-12 mb-4 col-md-5">
                <div className="card border-primary rounded-0">
                    <div className="card-header p-0">
                        <div className="bg-primary text-white text-center py-2">
                            <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                            <p className="m-0">We’ll write rarely, but only the best content.</p>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="form-group">
                            <label>Your name</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="data[name]"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Your email</label>
                            <div className="input-group mb-2 mb-sm-0">
                                <input
                                    type="email"
                                    name="data[email]"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <div className="input-group mb-2 mb-sm-0">
                                <input
                                    type="text"
                                    name="data[subject]"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <div className="input-group mb-2 mb-sm-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mesg"
                                    placeholder="Your message"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                name="submit"
                                value="Submit"
                                className="btn btn-primary btn-block rounded-0 py-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-7">
                <div className="mb-4">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17251.26544568053!2d72.65398387962865!3d24.636345791695142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd4d3731b188f%3A0x417d1ad42e04ff21!2sAnadra%2C%20Rajasthan%20307511!5e0!3m2!1sen!2sin!4v1732467927476!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <a
                            href="https://www.google.com/search?q=anadra&rlz=1C1CHBD_enIN1052IN1052&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQk3MTQwNGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
                            className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
                            role="button"
                            aria-label="Location"
                        >
                            <i className="fa fa-map-marker"></i>
                        </a>
                        <p>Anadra Sirohi</p>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="tel:+919313000121"
                            className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
                            aria-label="Phone number"
                        >
                            <i className="fa fa-phone"></i>
                        </a>
                        <p>
                            <i>
                                <h5>+91- 9313000121</h5>
                            </i>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <a
                            href="mailto:hk@gmail.com"
                            className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"
                            aria-label="Email"
                        >
                            <i className="fa fa-envelope"></i>
                        </a>
                        <p>hk@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
