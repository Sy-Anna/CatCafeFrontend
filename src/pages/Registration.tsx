import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UsersApi } from '../libs/api/users';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setError('A jelszavak nem egyeznek!');
          return;
        }
    
        setLoading(true);
        setError(null);
    
        try {
            const response = await UsersApi.register(name, email, password);
            console.log('Regisztráció sikeres:', response);
            navigate('/login');
          } catch (err: any) {
            setError(err?.message || 'Ismeretlen hiba történt.');
          }
        
          setLoading(false);
      };
    
    return (
    <Form onSubmit={handleSubmit}>
        <h1>Regisztráció</h1>

        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="felhasználónév" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó újra" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      </Form.Group>
      
      <Button className="loginBtn" type="submit" disabled={loading}>
        Tovább
      </Button>
      <a href="/Registry"></a>
    </Form>
  );
}

export default RegForm;