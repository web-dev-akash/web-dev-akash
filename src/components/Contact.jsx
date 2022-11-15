import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { Container, Row, Col, ToastContainer } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    tel_number: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(true);
    emailjs
      .sendForm(
        "service_vhiov19",
        "template_9e99xql",
        form.current,
        "RRDflGY46y1lIeqOx"
      )
      .then(
        (success) => {
          setStatus(false);
          setSuccess(true);
          console.log(success);
        },
        (error) => {
          setStatus(false);
          setError(true);
          console.log(error);
        }
      );
    setData({
      first_name: "",
      last_name: "",
      user_email: "",
      tel_number: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={data.first_name}
                          name="first_name"
                          placeholder="First Name"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={data.last_name}
                          name="last_name"
                          required
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={data.user_email}
                          name="user_email"
                          required
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="number"
                          value={data.tel_number}
                          name="tel_number"
                          required
                          placeholder="Phone No."
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={data.message}
                          name="message"
                          required
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        <button type="submit">
                          <span>{status ? "Sending.." : "Send"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={6}>
            <ToastContainer className="position-fixed toast-container">
              <Toast
                onClose={() => setSuccess(false)}
                show={success}
                bg={"success"}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="toast-content1">
                    Message Sent Successfully!
                  </strong>
                  <small>1 min ago</small>
                </Toast.Header>
                <Toast.Body>Thanks for Visiting....</Toast.Body>
              </Toast>
              <Toast
                onClose={() => setError(false)}
                show={error}
                bg={"danger"}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="toast-content">
                    Something Went Wrong!
                  </strong>
                  <small>1 min ago</small>
                </Toast.Header>
                <Toast.Body>Please try after some time</Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
