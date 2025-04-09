import "../css/Home.css"
import "../css/HomeDark.css"

const pages = [
    {
        id: 1,
        source: "/Blog",
        imgSource: "/img/homePage/sysAdmin.jpg",
        title: "Blog"
    },{
        id: 1,
        source: "/Gallery",
        imgSource: "/img/homePage/img22.jpg",
        title: "Galéria"
    },{
        id: 1,
        source: "/Booking",
        imgSource: "/img/homePage/img42.jpg",
        title: "Asztalfoglalás"
    },{
        id: 1,
        source: "/Webshop",
        imgSource: "/img/homePage/Catpucino.png",
        title: "Webshop"
    },{
        id: 1,
        source: "/Contact",
        imgSource: "/img/homePage/teamImage.jpg",
        title: "Kapcsolat"
    },{
        id: 1,
        source: "/About",
        imgSource: "/img/homePage/20240316_004312.png",
        title: "Rólunk"
    },
]


const Home = () => {
    return <> 
        <div className="home-card-grid">
                {pages.map((page) => (
                    <div className="homeCardContainer" key={page.id}>
                        <a href={page.source}>
                        <div className="homeCard">
                            <img className="homeCardImage" src={page.imgSource} alt="image" />
                            <div className='homeCardTitle'>
                                {page.title}
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
        </div>
    </>
};

export default Home;