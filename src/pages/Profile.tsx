import { Card, Container } from 'react-bootstrap';
import LoginForm from './Login';
import RegForm from './Registration';
import React, {useState} from 'react';
import "../css/Profile.css"

const Profile = () => {
    const [loginOrReg, setLoginOrReg] = useState<'login' | 'reg'>('login');
    const toggleForm = () => {
        setLoginOrReg(loginOrReg === 'login' ? 'reg' : 'login');
    };
    
    return (
        <>
        <Container>
            <Card className='profileCard'>
            {loginOrReg === 'login' ? (
                <LoginForm />
            ) : (
                <RegForm />
            )}
            <button className='loginBtn' onClick={toggleForm}>
            {loginOrReg === 'login' ? 'Még nincs profilom' : 'Már van profilom'}
            </button>
            </Card>
        </Container>
        
        
        </>
    );
};

export default Profile;