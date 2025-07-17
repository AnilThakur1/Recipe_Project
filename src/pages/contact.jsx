import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import { TbCalendarSearch } from "react-icons/tb";
import { TbFileDescription } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

import "./contact.css";

function Contact() {
 
  const [inquiry, setInquiry] = useState("");
  const [description, setDescription] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();






    //validation for user
    if (!inquiry || !description || !fullname || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const serviceId = "service_7leq50n";
    const templateId = "template_yccfjkx";
    const publicKey = "yHjjm7pAq80l3eQcy";

    // Prepare template parameters matching your EmailJS template
    // This object holds your form data that will replace variables in your EmailJS template.

    const templateParams = {
      inquiry,
      description,
      fullname,
      phone,
      email,
      message,

    };


    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        alert("Message sent successfully!");
        // Reset form fields
        setInquiry("");
        setDescription("");
        setFullname("");
        setPhone("");
        setEmail("");
        setMessage("");
      })

      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };






  



  return (
    <div className="m_padding">
    <div className="width_95">
      <div className="contact-container">


        <form onSubmit={handleSubmit} style={{ marginBottom: "300px" }}>



          <div className="contact-form">

            <div className="contact-row">


              <div className="contact-column">
                <label className="contact-label">Inquiry Purpose*</label>
                <div className="form__select">
                  <div className="icon-form">
                    <TbCalendarSearch />
                  </div>
                  <select
                    className="contact-select"
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    required
                  >
                    <option value="">Choose one option</option>
                    <option value="Cook">Cook</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>




              <div className="contact-column">
                <label className="contact-label">Descriptions*</label>
                <div className="form__select">
                  <div className="icon-form">
                    <TbFileDescription />
                  </div>
                  <select
                    className="contact-select"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  >
                    <option value="">Choose one option</option>
                    <option value="Butter">Butter</option>
                    <option value="Fish">Fish</option>
                    <option value="Chicken">Chicken</option>
                  </select>
                </div>
              </div>

            </div>



            <div className="contact-row">

              <div className="contact-column">
                <label className="contact-label">Full Name</label>
                <div className="icon-form">
                  <BsPerson />
                </div>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Enter your full name..."
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>



              <div className="contact-column">
                <label className="contact-label">Phone Number</label>
                <div className="icon-form">
                  <FiPhone />
                </div>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Enter your phone number..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>


            </div>



            <div className="contact-column">
              <label className="contact-label">Enter your email</label>
              <div className="icon-form">
                <CgMail />
              </div>
              <input
                className="contact-input gmail-input"
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>



            <div className="contact-column">
              <label className="contact-label">Message</label>
              <div className="form__select">
                <div className="icon-form msg-icon-form">
                  <FiMessageSquare />
                </div>
                <textarea
                  className="contact-textarea"
                  placeholder="Enter your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>



            
          </div>

          <button className="btn_main contact_button" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
