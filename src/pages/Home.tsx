import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import "../css/Home.css"
import "../css/HomeDark.css"

const pages = [
    {
        id: 1,
        source: "/Blog",
        imgSource: "/img/gallery/img2.jpg",
        title: "Blog"
    },{
        id: 1,
        source: "/Gallery",
        imgSource: "/img/gallery/img2.jpg",
        title: "Galéria"
    },{
        id: 1,
        source: "/Booking",
        imgSource: "/img/gallery/img2.jpg",
        title: "Asztalfoglalás"
    },{
        id: 1,
        source: "/Webshop",
        imgSource: "/img/gallery/img2.jpg",
        title: "Webshop"
    },{
        id: 1,
        source: "/Contact",
        imgSource: "/img/homePage/teamImage.jpg",
        title: "Kapcsolat"
    },{
        id: 1,
        source: "/About",
        imgSource: "/img/gallery/img2.jpg",
        title: "Rólunk"
    },
]


const Home = () => {
    return <> 
        <div className="home-card-grid">
                {pages.map((page) => (
                    <button className="homeCardContainer" key={page.id}>
                        <a href={page.source}>
                        <div className="homeCard">
                            <img className="homeCardImage" src={page.imgSource} alt="image" />
                            <div className='homeCardTitle'>
                                {page.title}
                            </div>
                        </div>
                        </a>
                    </button>
                ))}
        </div>
    </>
};

export default Home;