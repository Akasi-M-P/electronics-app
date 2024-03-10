/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PaystackButton } from "react-paystack";


function PayModal(props) {
    const publicKey = "pk_test_0ca341f96c0361be525bac5012b9ac1887c0bca0";
    const currency = "GHS";
    const totalAmount = props.totalPrice * 100;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");


     const resetForm = () => {
       setEmail("");
       setName("");
       setAmount("");
       setPhone("");
     };

     const componentProps = {
       email,
       amount,
       currency,
       metadata: {
         name,
         phone,
       },
       publicKey,
       text: "Buy Now",
       onSuccess: ({ reference }) => {
         alert(
           `Your purchase was successful! Transaction reference: ${reference}`
         );
         resetForm();
       },
       onClose: () => alert("Wait! You really want to decline payment?"),
     };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-orange">Summary</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Pay">
          <div className="container">
            <div className="item">
              <p className="item-details__title">
                {props.cartProducts.map((product) => (
                  <p key={product.id} className="summary-detail">
                    <span className="text-orange">*</span>
                    {product.name} :{" "}
                    <span className="text-orange">{product.price}</span>
                    <span>  ✖️{product.quantity}</span>
                  </p>
                ))}
              </p>
              <div className="overlay-effect"></div>
            </div>
            <div className="item-details">
              <p className="item-details__amount">Pay : GHS{totalAmount}</p>
            </div>

            <div className="checkout-form">
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Amount</label>
                <input
                  type="text"
                  id="name"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="background-orange">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PayModal;
