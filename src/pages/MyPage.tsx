import React from 'react';
import { Button } from 'react-bootstrap';
import { UsersApi } from '../libs/api/users';
import { User } from '../libs/types';

type MyPageProps = {
    user: User;
    onLogout: () => void;
};

const MyPage: React.FC<MyPageProps> = ({ user, onLogout }) => {
    const handleLogout = async () => {
        const token = localStorage.getItem('token'); 

        if (!token) {
            alert("Nincs bejelentkezve felhasználó.");
            return;
        }

        const [err] = await UsersApi.logout(token); 
        if (!err) {
            onLogout();
        } else {
            alert("Sikertelen kijelentkezés");
        }
    };

    return (
        <div>
            <h2>Profilom</h2>
            <p><strong>Név:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <Button className='loginBtn' onClick={handleLogout}>Kijelentkezés</Button>
        </div>
    );
};

export default MyPage;
