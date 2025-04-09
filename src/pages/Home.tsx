import "@assets/css/Home.css";
import "@assets/css/HomeDark.css";

const pages = [
    {
        source: "/Blog",
        imgSource: "/img/homePage/sysAdmin.jpg",
        title: "Blog",
    },
    {
        source: "/Gallery",
        imgSource: "/img/homePage/img22.jpg",
        title: "Galéria",
    },
    {
        source: "/Booking",
        imgSource: "/img/homePage/img42.jpg",
        title: "Asztalfoglalás",
    },
    {
        source: "/Webshop",
        imgSource: "/img/homePage/Catpucino.png",
        title: "Webshop",
    },
    {
        source: "/Contact",
        imgSource: "/img/homePage/teamImage.jpg",
        title: "Kapcsolat",
    },
    {
        source: "/About",
        imgSource: "/img/homePage/20240316_004312.png",
        title: "Rólunk",
    },
];

export default function Home() {
    return (
        <>
            <div className="home-card-grid">
                {pages.map((page, index) => (
                    <div
                        className="homeCardContainer"
                        key={index}
                    >
                        <a href={page.source}>
                            <div className="homeCard">
                                <img
                                    className="homeCardImage"
                                    src={page.imgSource}
                                    alt="image"
                                />
                                <div className="homeCardTitle">
                                    {page.title}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
