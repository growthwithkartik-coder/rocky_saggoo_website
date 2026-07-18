import { createFileRoute } from "@tanstack/react-router";
import NoteFrame from "@/component/NoteFrame";
import EmailCapture from "@/component/EmailCapture";
import "@/styles/layer4.css";

export const Route = createFileRoute("/4-invisible-machines")({
  head: () => ({
    meta: [
      { title: "Layer 4 Finance — Rocky Saggoo Capital" },
      {
        name: "description",
        content:
          "4 Invisible Machines Jo India Ke Ameeron Ko Chalati Hain. Yeh wahi system hai jiske baare mein aapko college mein nahi padhaya gaya.",
      },
      { property: "og:title", content: "Layer 4 Finance — Rocky Saggoo Capital" },
      {
        property: "og:description",
        content:
          "4 Invisible Machines Jo India Ke Ameeron Ko Chalati Hain.",
      },
    ],
  }),
  component: Layer4Page,
});

function Layer4Page() {
  return (
    <div className="layer4-root">
      <NoteFrame />

      <div className="wrap">
        <header className="masthead">
          <div className="mast-row">
            <span className="brand">Rocky Saggoo Capital</span>
            <span className="issue">№ RSC-04 · Field Dossier</span>
          </div>

          <div className="hero-title">
            <span className="eyebrow center">Layer 4 Finance</span>
            <h1>4 Invisible Machines Jo India Ke Ameeron Ko Chalati Hain</h1>
            <p className="dek">Yeh wahi system hai jiske baare mein aapko college mein nahi padhaya gaya.</p>
          </div>
        </header>

        <div className="microprint" aria-hidden="true">
          <span className="mp">
            ₹8.32 LAKH CRORE OFFICIALLY HAIRCUT  ◆  67% AVERAGE CREDITOR RECOVERY LOSS  ◆  25,000
            TONNES HOUSEHOLD GOLD  ◆  99% INTERCONTINENTAL DATA VIA 5 COMPANIES  ◆  SECTION 29A ·
            IBC 2016  ◆  ₹8.32 LAKH CRORE OFFICIALLY HAIRCUT  ◆  67% AVERAGE CREDITOR RECOVERY
            LOSS  ◆  25,000 TONNES HOUSEHOLD GOLD  ◆  99% INTERCONTINENTAL DATA VIA 5
            COMPANIES  ◆  SECTION 29A · IBC 2016  ◆{" "}
          </span>
        </div>

        <section className="intro">
          <div className="verify-row">
            <span className="seal" aria-hidden="true"><span>सत्य</span></span>
            <span className="eyebrow center">Verified Numbers Only</span>
          </div>

          <p className="stat-lead">₹8.32 lakh crore</p>
          <p className="stat-tag">Officially Written Off</p>

          <p>
            Yeh amount India ke resolved insolvency cases mein creditors ne officially chhod diya hai, <strong>IBBI</strong> ke September
            2025 data ke mutabiq. <mark>₹12.31 lakh crore</mark> ke admitted claims mein se sirf <mark>₹3.99 lakh crore</mark> wapas aaye.
            Baaki, average <mark>67% ka haircut</mark>, permanently gone.
          </p>

          <p>
            Haircut ka matlab hota hai jitna loss ek creditor apne original claim ke against uthata hai. Aur yeh loss ek system ka
            structural feature hai, jo scale par baar baar repeat hota hai.
          </p>

          <p>
            Jab ek company default karti hai, wahi process shuru hoti hai jise <strong>Corporate Insolvency Resolution Process</strong>,
            ya <strong>CIRP</strong>, kehte hain. Ek resolution professional company ka control leta hai, banks ka ek committee of
            creditors form hota hai, aur phir naye buyers se bids invite ki jaati hain, poora process{" "}
            <strong>National Company Law Tribunal</strong>, ya NCLT, ki dekhrekh mein. Design mein yeh doobti company ko bachane ka sabse
            structured tareeka hai. Practice mein, yeh ek market bhi bana deta hai jahan distressed assets discount par milte hain.
          </p>

          <p>
            Aap jab ₹100 ki coffee peete hain, GST already us price mein calculate ho chuka hota hai. Koi negotiation nahi hoti, koi
            committee decide nahi karti ki aapko kitna dena hai. Lekin jab ek corporate giant apna loan default karta hai, tab poori ek
            legal machinery activate ho jaati hai, tribunal, resolution professional, committee of creditors, taaki uska karza
            &ldquo;resolve&rdquo; ho sake.
          </p>

          <p>
            RSC ke Layer system mein, <strong>Layer 1</strong> conventional crowd behavior hai aur <strong>Layer 2</strong> demand
            ownership. <strong>Layer 4</strong> us far end tak jaata hai jahan poore financial aur regulatory systems khud engineer kiye
            jaate hain, un logon ke fayde ke liye jo unhe deeply samajhte hain.
          </p>

          <p>
            Chaar mechanisms is Layer 4 economy ko chalate hain. Har ek legal hai aur publicly documented hai. Aur har ek mein ek common
            pattern chhupa hai jo zyadatar log kabhi notice nahi karte.
          </p>
        </section>

        {/* MACHINE 01 */}
        <section className="machine">
          <div className="ghost-num">01</div>
          <div className="eyebrow">Mechanism 01 — Insolvency</div>
          <h2>NCLT Ka Haircut System</h2>

          <p>
            <strong>Insolvency and Bankruptcy Code, 2016</strong> ke shuruaati version mein ek gap tha jo poori financial system ke liye
            khatra ban gaya. Original text mein koi restriction nahi thi ki resolution plan kaun file kar sakta hai. Matlab, jo promoter
            apni company ko default mein le gaya, wahi promoter apne connected entities ke through, discount rate par apni khud ki
            company wapas kharid sakta tha.
          </p>

          <p>
            <strong>Essar Steel</strong> ke case mein exactly yeh dikhne wala tha. Jab bidding hui, tab Numetal consortium ka ek
            beneficiary <strong>Rewant Ruia</strong> nikla, jo Essar Steel ke promoter Ravi Ruia ka beta tha. Uss connection ki wajah se
            poori bid disqualify ho gayi, aur ArcelorMittal ko bhi Uttam Galva ke saath apne related-party links clear karne pade isse
            pehle unki bid accept ho paayi.
          </p>

          <p>
            Yeh incident aur isi tarah ke dusre attempts itne significant the ki government ko 2018 mein <strong>Section 29A</strong>{" "}
            specifically add karna pada, jo promoters aur unse connected persons ko resolution process se bahar rakhta hai. Ek poora naya
            legal section, sirf isliye ki yeh gap itna use ho raha tha.
          </p>

          <h3>The Numbers That Don&rsquo;t Lie</h3>

          <p>
            Section 29A ke aane ke baad bhi, average haircut aaj bhi <mark>67%</mark> ke aas paas stable hai, IBBI ki latest quarterly
            filings ke mutabiq. Har ₹100 ke admitted claim par, creditors ko sirf ₹33 wapas milte hain. Baaki ₹67, legally aur
            procedurally, saaf ho jaata hai.
          </p>

          <p>
            Yeh ek designed system hai jahan distressed asset ki market value uske liabilities se kaafi kam maani jaati hai, aur wahi gap
            ek naye buyer ke liye entry point ban jaata hai. Jiske paas information hai ki kaunsa asset kis price par market mein aa raha
            hai, wahi is game mein sabse pehle position leta hai.
          </p>

          <p>
            Yeh haircut ek jagah se doosri jagah shift hota hai. Jab public sector banks ka capital in losses se kam ho jaata hai,
            government unhe periodically recapitalize karti hai. Matlab yeh loss ghoom kar wahin pahunchta hai jahan se sab shuru hota
            hai, general taxpayer ke paas.
          </p>

          <div className="verdict">
            <span className="verdict-label">Verdict</span>
            <p>Karza sirf ek accounting entry hai. Jiske paas system ki timing ki samajh hai, uske liye woh entry kabhi permanent nahi rehti.</p>
          </div>
        </section>

        {/* MACHINE 02 */}
        <section className="machine">
          <div className="ghost-num">02</div>
          <div className="eyebrow">Mechanism 02 — Real Estate</div>
          <h2>Zoning Arbitrage</h2>

          <p>
            Haryana mein agricultural land ko commercial ya residential category mein badalne ke liye ek legal process hota hai,{" "}
            <strong>Change of Land Use</strong>, ya <strong>CLU</strong>. Yeh process state ke Town and Country Planning Department ke
            through hota hai, aur iski official fees typically <mark>₹1 lakh se ₹8 lakh per acre</mark> ke beech hoti hai.
          </p>

          <p>
            Yeh number chhota lagta hai. CLU approval ke baad, land ki value multiply ho jaati hai, itni ki agar government usi land ko
            baad mein acquire kare, toh compensation <mark>4 guna tak zyada</mark> milta hai, sirf isliye kyunki land ab officially
            &ldquo;converted&rdquo; ho chuki hai.
          </p>

          <p>
            Naugaon aur Bhiwadi jaisi Alwar corridor belt mein yeh pattern decades se dikh raha hai. 2005 mein Bhiwadi ki agricultural land
            ₹8 lakh per bigha ke around trade hoti thi. Jab government ne wahan industrial acquisition shuru ki, prices dramatically badh
            gaye, sirf ek regulatory reclassification ki wajah se, bina ek bhi naya building bane.
          </p>

          <h3>Yeh Kaam Kaise Karta Hai</h3>

          <p>
            CLU ek public process hai, official timeline <strong>60 se 90 din</strong> ka hota hai, aur fast-track cases mein 30 se 45
            din. Lekin timing khud ek private advantage hai. Master plan mein kaunsa zone agla commercial belt banega, yeh information
            saalon pehle un logon ke beech circulate hoti hai jo urban planning cycles ko closely track karte hain. Jab tak general public
            ko pata chalta hai ki ek particular belt &ldquo;hot&rdquo; ho gaya hai, tab tak early movers already unn hi rates par exit kar
            chuke hote hain jo unhone entry ke waqt predict kar liye the.
          </p>

          <p>
            CLU ke upar bhi External Development Charges aur Infrastructure Development Charges lagte hain, jo roads, drainage, aur water
            supply fund karte hain. Yeh charges high lagte hain, lekin final converted value ke saamne yeh ek chhota fraction hote hain.
            Jab ek naya master plan draft hota hai, woh document initially limited stakeholders ke saath share hota hai public objections
            ke liye, ek legally mandatory step. Practically, jo log planning committees ya local broker networks ke close hote hain, unhe
            zone changes ka signal sabse pehle milta hai, mahino ya saalon pehle jab tak general buyer ko koi idea bhi nahi hota.
          </p>

          <div className="verdict">
            <span className="verdict-label">Verdict</span>
            <p>Zameen ka price sabse zyada tab badalta hai jab ek regulatory stamp usse ek naya label deta hai, aur woh label kisi ko sabse pehle pata hota hai.</p>
          </div>
        </section>

        {/* MACHINE 03 */}
        <section className="machine">
          <div className="ghost-num">03</div>
          <div className="eyebrow">Mechanism 03 — Household Wealth</div>
          <h2>Gold Loan Ka Structural Risk</h2>

          <p>
            India ke gharon mein estimated <mark>25,000 tonnes</mark> sona hai, <strong>World Gold Council</strong> ke data ke mutabiq.
            Yeh amount America, Germany, aur France ke combined official gold reserves se zyada baithta hai. Yeh sona millions of
            ordinary gharon ki almirahon aur lockers mein spread hai, India ki asli underground currency ki tarah.
          </p>

          <p>
            2025 mein gold ki price ne ek historic surge dekha. January mein <mark>₹78,000</mark> per 10 gram se badhkar, December tak
            yeh <mark>₹1,38,000</mark> tak pahunch gaya, ek hi saal mein 75% se zyada ka jump. Jaise jaise price badha, gold ke against
            loans bhi explode kiye. Banks ka gold loan book April 2024 mein ₹1.01 lakh crore tha, October 2025 tak yeh{" "}
            <mark>₹3.37 lakh crore</mark> ho gaya.
          </p>

          <p>
            <strong>RBI</strong> ne khud is trend par red flag raise kiya. Regulator ka concern seedha tha: agar gold ki price 10-15% bhi
            correct kar jaaye, toh pledged gold ki value outstanding loan amount se kam ho jaayegi, aur ek badi default wave shuru ho
            sakti hai.
          </p>

          <h3>Woh Gap Jo RBI Ko Bhi Chinta Mein Daal Gaya</h3>

          <p>
            April 2026 se lagu ho rahe naye RBI rules se pehle, gold loan auctions ka process officially <strong>&ldquo;opaque&rdquo;</strong>{" "}
            declare kiya gaya, regulator ke apne circular mein. Valuation methods lender se lender alag the, borrowers ko auction ki
            timely information nahi milti thi, aur surplus amount wapas karne ka koi strict timeline nahi tha. Naye rules ab yeh mandate
            karte hain ki borrower valuation ke time present rahe, reserve price market value ka 90% ho, aur surplus 7 working days mein
            wapas kiya jaaye.
          </p>

          <p>
            <strong>LTV</strong>, ya Loan-to-Value, woh ratio hai jo decide karta hai aapke gold ki market value ke against aap kitna loan
            le sakte hain. RBI ke naye tiered rules ke mutabiq, ₹2.5 lakh tak ke chhote loans mein 85% LTV milta hai, aur ₹5 lakh se upar
            ke loans mein yeh 75% tak limit hota hai. Design ka maksad borrower ko protect karna hai, lekin transition period mein jo
            loans purane, kam strict rules ke under liye gaye hain, unke liye risk abhi bhi live hai.
          </p>

          <p>
            Simple mechanics: jab market peak par hota hai, log gold ke against zyada loan lete hain, kyunki collateral ki value badhi
            hui hoti hai. Jab market correct karta hai, wahi log sabse pehle default zone mein aate hain.
          </p>

          <div className="verdict">
            <span className="verdict-label">Verdict</span>
            <p>Sabse bada risk hamesha timing ka hota hai. Jab collateral sabse mehenga hota hai, wahi waqt default ka chance bhi sabse zyada hota hai.</p>
          </div>
        </section>

        {/* MACHINE 04 */}
        <section className="machine">
          <div className="ghost-num">04</div>
          <div className="eyebrow">Mechanism 04 — Digital Infrastructure</div>
          <h2>Subsea Cable Ka Monopoly</h2>

          <p>
            Duniya ka <mark>99% intercontinental internet data</mark> submarine cables ke through travel karta hai, na ki satellites se,
            ITU aur UN ke recent statements ke mutabiq. India mein yeh cables sirf <strong>paanch companies</strong> control karti hain:
            Tata Communications, Reliance Jio, Bharti Airtel, BSNL, aur Sify Technologies. Poore country mein 17 international cables
            sirf <mark>14 landing stations</mark> par land karte hain, jo Mumbai, Chennai, Cochin, Tuticorin, aur Trivandrum tak limited
            hain.
          </p>

          <p>
            <strong>Tata Communications</strong>, jo is space mein India ki sabse badi player hai, khud public statements mein claim
            karti hai ki uske undersea network se global internet traffic ka <mark>25%</mark> guzarta hai, aur duniya ke 80% mobile
            subscribers uske backbone se connected hain.
          </p>

          <h3>Yeh Physical Infrastructure Hai, Isliye Yeh Permanent Hai</h3>

          <p>
            Ek app ban ho sakta hai, ek company bankrupt ho sakti hai, lekin ek naya cable landing station banane mein saalon lagte hain
            aur licensing itni complex hai ki naye players ke liye entry barrier almost impossible ban jaata hai. Yehi wajah hai ki
            Google, Meta, aur Amazon jaise giants ab apne khud ke cables bana rahe hain globally, taaki woh is bottleneck se independent
            ho sakein.
          </p>

          <p>
            India mein jo companies yeh physical gateway control karti hain, unke paas ek asset hai jo tab tak disrupt nahi hoga jab tak
            koi naya landing station legally approve na ho jaaye.
          </p>

          <p>
            AI aur cloud computing ka boom is monopoly ko aur strong kar raha hai. India ki active undersea capacity early 2025 mein
            around 132 Tbps thi, aur AI workloads ki badhti demand ki wajah se yeh rapidly expand ho rahi hai. India-Asia-Express aur
            India-Europe-Express jaise naye cable projects is capacity ko <mark>char guna</mark> tak badhane ka plan rakhte hain. Har naya
            cable, har naya landing station, wahi existing paanch players ke through hi India mein land karta hai.
          </p>

          <div className="verdict">
            <span className="verdict-label">Verdict</span>
            <p>Duniya data ko commodity ki tarah treat karti hai. Uska actual rasta, jahan se woh guzarta hai, sirf paanch companies ke haath mein hai.</p>
          </div>
        </section>

        <hr className="div" />

        <section className="synth">
          <div className="eyebrow">Synthesis</div>
          <h2>The Real Pattern</h2>

          <p>
            Yeh chaaron machines alag alag dikhti hain, lekin inki base ek hi hai. Har ek mein ek asset hai jiski value ek regulatory ya
            structural event se redefine hoti hai, karza ho, land use ho, ya collateral ho, ya infrastructure. Aur har baar, jo log us
            event ko pehle samajhte hain, timing kar sakte hain, ya usmein directly position le sakte hain, wahi long-term wealth capture
            karte hain.
          </p>

          <p>
            Aap 9 se 5 kaam karke apni salary ko grow karte hain. Kuch log un systems ko grow karte hain jo salary khud generate karti
            hai. Fark hamesha ownership ka hota hai, ownership us layer ki jahan asset ki value redefine hoti hai.
          </p>

          <p>
            Layer 1 ka khel simple hai: paisa kamao, tax do, bacha hua invest karo. Layer 4 ka khel bilkul alag rules par chalta hai:
            system ke structural gaps ko decode karo, unme early position lo, aur value ke redefine hone ka intentionally wait karo.
          </p>

          <p>
            Yeh gap wahan banta hai jahan public information aur us information par timely action ke beech ka fasla hota hai. Insolvency
            law, land use policy, gold lending regulation, aur telecom infrastructure, in charon ka detail public record mein hai, kisi
            bhi ke liye available. Fark sirf itna hai ki kitne log actually yeh detail padhte hain, samajhte hain, aur uspar action lete
            hain isse pehle ki woh mainstream news ban jaaye.
          </p>

          <blockquote>Yeh design hai, aur design ko decode kiya ja sakta hai.</blockquote>
        </section>

        <section className="synth">
          <div className="eyebrow">Application</div>
          <h2>Principle Jo Replicate Ho Sakta Hai</h2>

          <p>
            Yeh charon machines dobara replicate karna kisi individual ke liye realistic nahi hai. Aap NCLT ka resolution applicant
            raatons raat nahi ban sakte, na hi ek naya cable landing station akele bana sakte hain. Lekin jo principle in charon ke peeche
            hai, woh replicate ho sakta hai.
          </p>

          <p>
            Woh principle simple hai: kisi asset ki value hamesha ek structure ke through define hoti hai, aur jo log us structure ko
            deeply samajhte hain, wahi value ke shift hone se pehle position lete hain. Chahe insolvency law ho, land zoning ho,
            regulatory reform ho, ya infrastructure ownership, principle same rehta hai.
          </p>

          <p>
            <strong>RSC ke Demand Audit</strong> mein hum exactly yehi karte hain founders ke liye. Har industry mein structural gaps
            hote hain jahan demand already exist karti hai, lekin koi usse formally own nahi kar raha. Jo business yeh gap sabse pehle
            identify karta hai aur usme position leta hai, woh apni category khud define karta hai.
          </p>
        </section>
      </div>

      <div className="cta-wrap">
        <div className="cta-panel">
          <div className="cta-corner tl" />
          <div className="cta-corner tr" />
          <div className="cta-corner bl" />
          <div className="cta-corner br" />
          <div className="eyebrow">Free — Layer 2 Book</div>
          <h2>Ab Aap Kya Karenge</h2>
          <p>
            Yeh un patterns ki shuruaat hai jo Rocky Saggoo Capital roz apne clients ke saath decode karta hai, real estate se business
            structuring tak. NCLT, CLU, RBI circulars, submarine cable licensing, yeh sab alag alag domains lagti hain, lekin inhe padhne
            ka tareeka ek hi hota hai: har regulation mein ek gap dhoondo jahan value abhi define nahi hui, aur us gap mein sabse pehle
            khade ho jao.
          </p>
          <p>
            Poora Layer 2 framework samajhne ke liye, ki demand ko kaise identify karein, own karein, aur uspar monopoly banayein, humari
            free Layer 2 Book abhi available hai. Neeche apna email daaliye aur seedha apne inbox mein paayiye.
          </p>

          <EmailCapture buttonLabel="Free Book Bhejein →" noteText="No spam. Sirf Layer 2 aur upcoming Demand Audit slots ki updates." />

          <p className="tagline">Think Wrong. Win Right.</p>
        </div>
      </div>

      <div className="wrap">
        <footer>
          <p className="sources">
            Sources — Insolvency and Bankruptcy Board of India (IBBI), September 2025 · Section 29A &amp; Essar Steel resolution analysis
            (ibclaw.in) · World Gold Council household gold estimates · Reserve Bank of India gold lending circulars, 2025–2026 · Haryana
            Town &amp; Country Planning Department CLU guidelines · ITU / UN submarine cable resilience briefings · Tata Communications
            public statements · submarinenetworks.com India cable landing station directory
          </p>
        </footer>
      </div>
    </div>
  );
}
