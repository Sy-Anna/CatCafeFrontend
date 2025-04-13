import "@assets/css/Blog.css";
import { Container } from "react-bootstrap";

export default function Blog() {
    return (
        <Container fluid="lg" className="mt-4 blog-card-grid">

            <div className="blogParagraph">
                <img 
                    className='blogImage'
                    src="/img/easter.jpg" 
                    alt="image" />
                <h1>Boldog húsvétot kívánunk!</h1>
                <p>
                Az ünnep örömére szeretnénk egy kis meglepetéssel készülni nektek 😊! Minden látogatónk húsvéti hangulatú dekorációval és cicás boldogsággal találkozik nálunk, emellett dorombolással garantáltan feltöltődhetsz! 
                <br />Fontos információ: hivatalos ünnepnapokon zárva tartunk, hogy mi is megünnepelhessük a húsvétot, de a többi nap változatlan nyitva tartassál várunk titeket.
                <br />Várjuk kedves vendégeinket a megszokott időkben, hogy együtt élvezzük a kávé és cicák csodás összhangját. 
                <br />Kellemes húsvéti ünnepeket kívánunk, és hamarosan találkozunk! 
                </p>
            </div>

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

            <div className='blogParagraph'>
                <img 
                    className='blogImage'
                    src="/img/developer.jpg" 
                    alt="image" />
                <h1>Kávé, cica, kék halál – így készül a Cat Café a nyitásra</h1>
                <p>
                    Miközben a kávégépek még csomagolásban, és a cicák is csak álmainkban dorombolnak, a háttérben már gőzerővel dolgozik a fejlesztőcsapat – szó szerint.
                    <br/>Ők építik fel a foglalórendszert, a cicaprofilokat és az egész digitális élményt, amitől a Cat Café több lesz, mint egy hely, ahol kávézni lehet.
                    <br/>A tech stack modern, a határidő feszes, a kávé erős – de még ez sem mindig elég ahhoz, hogy a rendszer ne rottyanjon le.
                    <br/>Mint például ma, amikor az egyik gép kék halált kapott. A fejlesztő csak bólintott: „Legalább nem a cicák fagytak le.”
                    <br/>Minden napra jut egy bug, egy új ötlet, és legalább három tappancsos szóvicc a táblán.
                    <br/>A nyitásig még sok a kód – de ha minden jól megy, a vendégek már csak a dorombolós végeredményt látják.
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

            <div className="blogParagraph">
                <img    
                        className='blogImage'
                        src="/img/reserved.jpg"
                        alt="image" />
                <h1>A macskakávézók története</h1>
                <p>
                A macskakávézók története igazán különleges és szívmelengető, hiszen ezek a helyek nemcsak a kávézás élményét, hanem a macskák társaságát is kínálják. Az első macskakávézó 1998-ban nyílt meg Tajpejben, Tajvanon, de a koncepció igazán Japánban vált népszerűvé. 2004-ben Oszakában nyílt meg az első japán macskakávézó, a "Neko no Dzsikan" (Macskák Órája), amely tíz év alatt több mint 150 hasonló létesítmény megnyitását inspirálta az országban. Európában az első macskakávézó 2012-ben nyílt meg Bécsben, míg Magyarországon 2013-ban nyitotta meg kapuit a Budapest Cat Café. Ezek a helyek különleges atmoszférát teremtenek, ahol a vendégek kávéjukat kortyolgatva élvezhetik a macskák társaságát. A macskák híresek nyugtató hatásukról, így ezek a kávézók különösen népszerűek azok körében, akiknek nincs lehetőségük háziállatot tartani. A kávézók nemcsak a kikapcsolódás helyszínei, hanem gyakran a macskák örökbefogadását is támogatják. Sok helyen a vendégek megismerhetik a macskákat, és ha valamelyikük különösen közel kerül a szívükhöz, örökbe is fogadhatják őket. Ezáltal ezek a kávézók nemcsak a vendégek, hanem a macskák életét is gazdagítják. A macskakávézók története tehát nemcsak a kávézás és a macskák szeretetéről szól, hanem arról is, hogyan hozhatunk létre olyan közösségi tereket, amelyek mindenki számára örömet és nyugalmat nyújtanak. Ha még nem jártál ilyen helyen, érdemes kipróbálni – garantáltan doromboló élményben lesz részed!
                </p>
            </div>

        </Container>
    );
}
