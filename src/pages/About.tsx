import { Card, Col, Container, Row } from "react-bootstrap";

import locationIcon from "@assets/img/icons/marker.png";
import phoneIcon from "@assets/img/icons/phone-call.png";

import "@assets/css/About.css";
import "@assets/css/AboutDark.css";

const addresses = [
    {
        id: 1,
        title: "Café",
        phone: "06606660606",
        address: "Budapest 0000 Valamilyen utca 1.",
        description:
            "Fantasztikus hangulatú kávézónk cica fanatikusok számára.",
    },
    {
        id: 2,
        title: "Shop",
        phone: "06606660606",
        address: "Budapest, 8888 Mittudomén út 8.",
        description:
            "Itt meg lehet vásárolni a saját márkás termékeinket otthon elkészíthető verzióban.",
    },
    {
        id: 3,
        title: "Iroda",
        phone: "06606660606",
        address: "Budapest, 9999 Példa köz 13/A",
        description:
            "Tudósaink itt kotyvasztják legújabb ízeinket, és itt dolgoznak informatikus kollégáink itt.",
    },
    {
        id: 4,
        title: "Raktár",
        phone: "06606660606",
        address: "Tiszacsécsény, 1234 Sehol utca 2.",
        description:
            "Itt tároljuk termékeinket, míg otthonaitokba vagy kávéházunkba meg nem érkezik.",
    },
];

export default function About() {
    return (
        <Container
            fluid="lg"
            className="mt-4 card-grid"
        >
            <Row className="gx-4 gy-4 gap-4">
                {addresses.map((address) => (
                    <Col
                        className="cardContainer"
                        key={address.id}
                    >
                        <Card className="aboutCard">
                            <h1 className="aboutCardTitle">{address.title}</h1>
                            <div className="content">
                                <div className="contentTop">
                                    <img
                                        className="aboutIcon"
                                        src={locationIcon}
                                        alt="icon"
                                    />
                                    <p className="aboutCardAddress">
                                        {address.address}
                                    </p>
                                    <img
                                        className="aboutIcon"
                                        src={phoneIcon}
                                        alt="icon"
                                    />
                                    <p className="aboutCardPhone">
                                        {address.phone}
                                    </p>
                                </div>
                                <p className="aboutCardDescription">
                                    {address.description}
                                </p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
