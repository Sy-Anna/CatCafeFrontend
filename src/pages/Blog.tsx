import "@assets/css/Blog.css";
import { Container } from "react-bootstrap";

export default function Blog() {
    return (
        <Container fluid="lg" className="mt-4 blog-card-grid">
            <div className="blogParagraph">
                <img
                    className="blogImage"
                    src="/img/CatCafeProjectlogo.png"
                    alt="image"
                />
                <h1>Megnyitottunk!!</h1>
                <p>
                    Örömmel tájékoztatjuk összes leendő vásárlónkat, hogy
                    kávézónk és üzletünk is megnyitott az alábbi címeken:
                    <br />
                    <u>Café - Bp 0000 Valamilyen utca 1</u>
                    <br />
                    Itt várjuk leendő törzsvendégeinket egyedi ízvilágunkkal,
                    macska tematikájú minimalista környezetben. Asztalfoglalás a
                    várhatóan nagy létszámú érdeklődés miatt ajánlott, melyet{" "}
                    <a href="/Booking">Asztalfoglalás</a> oldalunkon tehetnek
                    meg.
                    <br />
                    <u>Shop - Bp 9999 Példa köz 13/a</u>
                    <br />A kávézóban megkedvelt ízeink otthon elkészíthető
                    formátumban vásárolhatók meg ezen a helyen, illetve
                    ajándékcsomagok, <i>coffee addict</i> és{" "}
                    <i>coffee addict starter pack</i> csomagjaink is kaphatók.{" "}
                    <br />
                </p>
            </div>

            <div className="blogParagraph">
                <h1>Hamarosan nyitás （╯°□°）╯</h1>
                <p>
                    A cicák már nyávogva várják, hogy megnyisson kávézónk! Te is
                    dorombolni fogsz, ha megízleled forró italainakt,
                    megígérjük! Boltunk készleteit már szorgosan töltjük, a
                    kávézóban pedig nemsoká az utolsó szék is megtalálja helyét.
                    Visszaszámlálás indul, hamarosan nyitunk!
                </p>
            </div>

            <div className="blogParagraph">
                <img
                    className="blogImage"
                    src="/img/sysAdmin.jpg"
                    alt="image"
                />
                <h1>Macskák, Kávé, Meg WiFi – A Rendszergazdák Megérkeztek</h1>
                <p>
                    Drága cicarajongók, ne ijedjetek meg, ha a napokban furcsa
                    figurák mászkálnak létrákkal, kábelekkel és nagyon komoly
                    arccal a Cat Caféban. Nem UFO-invázió, és nem is egy új
                    escape room – a rendszergazdáink dolgoznak!
                    <br />
                    Ugyanis mi nem csak cukik akarunk lenni, hanem
                    szuperszónikus netkapcsolattal is várunk titeket. A
                    háttérben tehát épp épül a WiFi birodalom. Kábelt húznak,
                    routert bűvölnek, switch-eket varázsolnak. Néha morgolódnak,
                    néha beszélnek a géphez, de ez a dolguk. Ők a digitális
                    dzsungel Tarzanjai.
                    <br />
                    És hogy miért jó ez neked? Mert hamarosan villámgyors lesz a
                    net, akár Zoom meetinget is tarthatsz egy doromboló szőrmók
                    mellett. A kávé gőzölög, a macska dorombol, te meg simán
                    letöltöd az élet értelmét 5 másodperc alatt.
                    <br />
                    Szóval ha most pár napig párhuzamos valóságban élnél, ahol a
                    macskák mellett kábelek is nyújtózkodnak, ne pánikolj –
                    minden érted történik.
                    <br /> <br />
                    Stay tuned, a net jön, és gyorsabb lesz, mint egy frissen
                    felriadt cica!
                </p>
            </div>

            <div className="blogParagraph">
                <img
                    className="blogImage"
                    src="/img/teamImage.jpg"
                    alt="image"
                />
                <h1>Együtt a csapat</h1>
                <p>
                    A Cat Café csapata összeállt, és vért izzadva dolgozik.
                    <br />
                    Mi inspirálta a Cat Café megnyitását? Mi, az alapítók,
                    mindannyian nagy macskakedvelők vagyunk, és egy régi álmot
                    szerettünk volna valóra váltani: egy olyan helyet, ahol a
                    macskák és a kávé iránti szeretetünket megoszthatjuk
                    másokkal. Teljes cicabedobással igyekszünk megvalósítani
                    álmunk, és ezzel az összes cicaszeretűnek megteremteni új
                    törzshelyét. Reméljük hamarosan találkozunk, és vendégünk
                    lehetsz egy jó kávéra, teára, vagy csak gyönyörködsz a cicás
                    környezetben.
                </p>
            </div>
        </Container>
    );
}
