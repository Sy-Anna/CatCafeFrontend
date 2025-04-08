import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form>
        <h1>Bejelentkezés</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó" />
      </Form.Group>
      
      <Button className="loginBtn" variant="primary" type="submit">
        Tovább
      </Button>
      <a href="/Registry"></a>
    </Form>
  );
}

export default LoginForm;