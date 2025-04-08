import { Card, Container } from 'react-bootstrap';
import LoginForm from './Login';
import "../css/Profile.css"

const Profile = () => {
    return (
        <>
        <Container>
            <Card className='profileCard'>
                <LoginForm/>
            </Card>
        </Container>
        
        
        </>
    );
};

export default Profile;