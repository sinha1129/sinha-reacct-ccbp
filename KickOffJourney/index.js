// src/components/KickOffJourney.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const KickOffJourney = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="container my-5 text-center">
      <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
      <Button variant="primary" onClick={handleShow}>
        Request Call Back
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will call you back soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default KickOffJourney;
