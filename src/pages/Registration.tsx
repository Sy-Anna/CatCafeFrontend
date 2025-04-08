import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegForm() {
  return (
    <Form>
        <h1>Regisztráció</h1>

        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="felhasználónév" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó újra" />
      </Form.Group>
      
      <Button className="loginBtn" variant="primary" type="submit">
        Tovább
      </Button>
      <a href="/Registry"></a>
    </Form>
  );
}

export default RegForm;