import Image from '../img/catCafeIndex.png';
import { Col, Container, Row, Card } from 'react-bootstrap';

import '../css/Contact.css';
import '../css/ContactDark.css';

const persons = [
    {
        id: 1,
        name: "Tyitova Irina",
        role: "Rendszergazda",
        img: "/img/workers/Irina.jpg"
    },{
        id: 2,
        name: "Berencs Zsolt",
        role: "Rendszergazda",
        img: "/img/workers/Zsolt.png"
    },{
        id: 3,
        name: "Kopányi Gergő",
        role: "Rendszergazda",
        img: "/img/workers/Gergő.jpg"
    },{
        id: 4,
        name: "Piovarcs Patrik",
        role: "Szoftverfejlesztő - Backend",
        img: "/img/workers/Patrik.jpg"
    }, {
        id: 5,
        name: "Sáray Anna",
        role: "Szoftverfejlesztő - Frontend",
        img: "/img/workers/Anna.png"
    }
]


function Contact() {

    return (
        <>
            <Container fluid="lg" className="mt-4 card-grid">
                <Row className='gx-4 gy-4 gap-4'>
                    {persons.map((persons) => (
                        <Col className="cardContainer" key={persons.id}>
                            <Card className="contactCard">
                            <img className="contactCardImage" src={persons.img} alt="webshopImage" />
                                <h1 className="contactCardTitle">
                                    {persons.name}
                                </h1>
                                <p className='contactCardText'>
                                     {persons.role}
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        
        </>
    );
};

export default Contact;