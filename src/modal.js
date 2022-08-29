import React, { useState } from "react";
import { Facebook, Twitter, Linkedin } from "react-social-sharing";
import Modal from "react-modal";
import Socials from "./Socials";

import "./modalBadges.scss";

export default function PersonalDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        parentSelector={() => document.body}
        className="Modal"
      >
        <Socials />
        <button className="modal-close" onClick={toggleModal}>
          Close
        </button>
      </Modal>
      <div className="personal__main">
        <div className="personal__card">
          <div className="personal__card--left">
            <h3>Modal Headline 1</h3>
            <p>
              {" "}
              Your total: <strong>500</strong>
            </p>
            <p>
              Next Threshold: <strong>700</strong>
            </p>
          </div>
          <div className="personal__card--right">
            <div className="shareIcon">
              <img
                src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                alt="Share Icon"
                title="Share"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
        <div className="personal__card">
          <div className="personal__card--left">
            <h3>Modal Headline 2</h3>
            <p>
              {" "}
              Your total: <strong>100</strong>
            </p>
            <p>
              Next Threshold: <strong>700</strong>
            </p>
          </div>

          <div className="personal__card--right">
            <div className="shareIcon">
              <img
                src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                alt="Share Icon"
                title="Share"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
        <div className="personal__card">
          <div className="personal__card--left">
            <h3>Modal Headline 3</h3>
            <p>
              {" "}
              Your total: <strong>20</strong>
            </p>
            <p>
              Next Threshold: <strong>70</strong>
            </p>
          </div>

          <div className="personal__card--right">
            <div className="shareIcon">
              <img
                src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                alt="Share Icon"
                title="Share"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
