import '../CSS/Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function ContactUS() {
  return (
    <>
      <div className=" contact-main  d-flex justify-content-center align-items-center">
        <div className="contact-first w-50 h-100 pt-5 pb-5 d-flex flex-column justify-content-center align-items-start ">
          <div className='first-data w-100 '>
          <h1 className='fw-bold'>Get <span className='highlight-text fw-bold'>25% Discount </span> <br />on your first <br /> purchase</h1>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vero
            unde magni, beatae placeat reiciendis. Ducimus ipsam aliquid error
            enim nisi! Esse rem libero atque voluptatum eaque, veniam nobis
            fugiat.
          </p>
          </div>
        </div>

        <div className="contact-second w-50 pt-5 pb-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="abc@mail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe to the Newsletter" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
