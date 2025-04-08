import { Card, Container, Spinner } from 'react-bootstrap';
import LoginForm from './Login';
import RegForm from './Registration';
import MyPage from './MyPage';
import {useState, useEffect} from 'react';
import { UsersApi } from '../libs/api/users';
import { User } from '../libs/types';
import "../css/Profile.css"



const Profile = () => {
    const [loginOrReg, setLoginOrReg] = useState<'login' | 'reg'>('login');
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const toggleForm = () => {
        setLoginOrReg(loginOrReg === 'login' ? 'reg' : 'login');
    };

    useEffect(() => {
        const checkLogin = async () => {
            const [err, userData] = await UsersApi.me();
            if (!err && userData) {
                setUser(userData);
            }
            setLoading(false);
        };
        checkLogin();
    }, []);

    if (loading) return <Spinner animation="border" role="status" />;

    
    return (
        <>
        <Container>
            <Card className='profileCard'>
                {user ? (
                    <MyPage user={user} onLogout={() => setUser(null)} />
                ) : (
                    <>
                        {loginOrReg === 'login' ? (
                            <LoginForm onLoginSuccess={(u) => setUser(u)} />
                        ) : (
                            <RegForm onRegisterSuccess={(u) => setUser(u)} />
                        )}
                        <button className='loginBtn' onClick={toggleForm}>
                            {loginOrReg === 'login' ? 'Még nincs profilom' : 'Már van profilom'}
                        </button>
                    </>
                )}
            </Card>
        </Container>
        
        
        </>
    );
};

export default Profile;