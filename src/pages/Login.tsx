import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UsersApi } from '../libs/api/users';
import { useEffect, useState } from 'react'
import useStorageState from 'use-storage-state';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useStorageState('token', { defaultValue: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
    
        const [error, response] = await UsersApi.login(email, password);
    
        if (error) {
          console.error('Login error', error);
          alert('Hibás email vagy jelszó!');
        } else {
          setToken(response!.token);
          console.log('Login Successful:', response);
          navigate('/home')
        }

        const [userError, user] = await UsersApi.me();

        if (userError) {
            console.error('Nem sikerült lekérni a felhasználót', userError);
            alert('Sikertelen bejelentkezés');
        } else {
            console.log('Sikeres bejelentkezés', user);
            if (user.role == "WORKER") {
                navigate('/Cargo')
            } else {
                navigate('/Home')
            }
        }

        
    
        setLoading(false);
      };
    
  return (
    <Form onSubmit={handleSubmit}> 
        <h1>Bejelentkezés</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="jelszó" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button className="loginBtn" variant="primary" type="submit" disabled = {loading}>
        Tovább
      </Button>
      <br />
    </Form>
  );
}

export default LoginForm;