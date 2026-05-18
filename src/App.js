import { useState } from 'react';
import selfie from './selfie.jpg';
import plsemantics from './plsemantics-icml.png';
import estore from './estore-ecoop.png';
import ogo from './ogo-icse.png';
import lejit from './lejit-fse.png';
import exli from './exli-fse-demo.png';
import jogdemo from './jog-icse-demo.png';
import vulto from './vul-toes.png';
import jog from './jog-issta.png';
import vulsamos from './vul-samos.png';
import emscaiceaa from './emsca-iceaa.png'
import vulcicc from './vul-cicc.png';
import bci from './bci-epeps.png';
import ogoSlides from './ogo-icse-slides.pdf';
import estoreSlides from './estore-ecoop-slides.pdf';
import lejitSlides from './lejit-fse-slides.pdf';
import exliSlides from './exli-fse-slides.pdf';
import './App.css';

function Authors({ list }) {
  return (
    <span className="pub-authors">
      {list.map((name, i) => (
        <span key={i}>
          {name === 'Aditya Thimmaiah'
            ? <span className="self-author">{name}</span>
            : name}
          {i < list.length - 1 && ', '}
        </span>
      ))}
    </span>
  );
}

function Publication({ number, image, title, authors, venue, publicationDetails, pdfLink, slidesLink, showPDF=true, showSlides=true }) {
  return (
    <div className="pub-row">
      {image && <div className="pub-image"><img src={image} alt={title} /></div>}
      <div className="pub-details">
        <span>{number}. </span>
        <Authors list={authors} />
        <br />
        <i>{title}</i>
        <br />
        <span>{venue}</span>
        <br />
        <span>{publicationDetails}</span>
        <div className="pub-links">
          {showPDF && pdfLink && <a href={pdfLink} target="_blank" rel="noreferrer">[PDF]</a>}
          {!showPDF && <span>[TBD]</span>}
          {showSlides && slidesLink && <a href={slidesLink} target="_blank" rel="noreferrer">[Slides]</a>}
          {!showSlides && <span>[TBD]</span>}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showOldNews, setShowOldNews] = useState(false);

  const publications = [
    {
      image: plsemantics,
      title: 'PLSemanticsBench: A Formal Semantics Reasoning Benchmark for Code',
      authors: ['Aditya Thimmaiah', 'Jiyang Zhang', 'Jayanth Srinivasa', 'Junyi Jessy Li', 'Milos Gligoric'],
      venue: 'International Conference on Machine Learning',
      publicationDetails: '(ICML 2026), to appear, Seoul, South Korea, July 2026.',
      pdfLink: 'TBD',
      slidesLink: 'TBD',
      showPDF: false,
      showSlides: false,
    },
    {
      image: estore,
      title: 'In-memory Object Graph Stores',
      authors: ['Aditya Thimmaiah', 'Zijian Yi', 'Joseph Kenis', 'Christopher Rossbach', 'Milos Gligoric'],
      venue: 'European Conference on Object-Oriented Programming',
      publicationDetails: '(ECOOP 2025), Bergen, Norway, July 2025.',
      pdfLink: 'https://drops.dagstuhl.de/storage/00lipics/lipics-vol333-ecoop2025/LIPIcs.ECOOP.2025.30/LIPIcs.ECOOP.2025.30.pdf',
      slidesLink: estoreSlides,
    },
    {
      image: lejit,
      title: 'Java JIT Testing with Template Extraction',
      authors: ['Zhiqiang Zang', 'Fu-Yao Yu', 'Aditya Thimmaiah', 'August Shi', 'Milos Gligoric'],
      venue: 'ACM International Conference on the Foundations of Software Engineering',
      publicationDetails: '(FSE 2024), Porto de Galinhas, Brazil, July 2024.',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3643777',
      slidesLink: lejitSlides,
    },
    {
      image: exli,
      title: 'ExLi: An Inline-Test Generation Tool for Java',
      authors: ['Yu Liu', 'Aditya Thimmaiah', 'Owolabi Legunsen', 'Milos Gligoric'],
      venue: 'ACM International Conference on the Foundations of Software Engineering',
      publicationDetails: '(FSE Demo 2024), Porto de Galinhas, Brazil, July 2024.',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3663529.3663817',
      slidesLink: exliSlides,
    },
    {
      image: ogo,
      title: 'Object Graph Programming',
      authors: ['Aditya Thimmaiah', 'Leonidas Lampropoulos', 'Christopher Rossbach', 'Milos Gligoric'],
      venue: 'ACM/IEEE International Conference on Software Engineering',
      publicationDetails: '(ICSE 2024), Lisbon, Portugal, April 2024.',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3597503.3623319',
      slidesLink: ogoSlides,
    },
    {
      image: vulto,
      title: 'A hierarchical classification method for high-accuracy instruction disassembly with near-field EM measurements',
      authors: ['Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Andreas Gerstlauer', 'Ali E Yilmaz'],
      venue: 'ACM Transactions on Embedded Computing Systems',
      publicationDetails: '(TECS 2024).',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3629167',
    },
    {
      image: jogdemo,
      title: 'JOG: Java JIT Peephole Optimizations and Tests from Patterns',
      authors: ['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric'],
      venue: 'ACM/IEEE International Conference on Software Engineering',
      publicationDetails: '(ICSE Demo 2024), Lisbon, Portugal, April 2024.',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3639478.3640040',
    },
    {
      image: jog,
      title: 'Pattern-Based Peephole Optimizations with Java JIT Tests',
      authors: ['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric'],
      venue: 'ACM SIGSOFT International Symposium on Software Testing and Analysis',
      publicationDetails: '(ISSTA 2023), Seattle, USA, July 2023.',
      pdfLink: 'https://dl.acm.org/doi/pdf/10.1145/3597926.3598038',
    },
    {
      image: vulsamos,
      title: 'High-level simulation of embedded software vulnerabilities to EM side-channel attacks',
      authors: ['Aditya Thimmaiah', 'Vishnu V Iyer', 'Andreas Gerstlauer', 'Michael Orshansky'],
      venue: 'ACM SIGARCH International Conference on Embedded Computer Systems: Architectures, Modeling and Simulation',
      publicationDetails: '(SAMOS 2022), Samos, Greece, July 2022.',
      pdfLink: 'https://slam.ece.utexas.edu/pubs/samos22.EM.pdf',
    },
    {
      image: emscaiceaa,
      title: 'Testing the Resilience of Cryptographic Modules Against Fine-Grained Time- and Frequency-Domain EM Side-Channel Analysis Attacks',
      authors: ['Vishnu V Iyer', 'Aditya Thimmaiah', 'Ali E Yilmaz'],
      venue: 'IEEE International Conference on Electromagnetics in Advanced Applications',
      publicationDetails: '(ICEAA 2021), Honolulu, USA, August 2021.',
      pdfLink: 'https://ieeexplore.ieee.org/document/9539534',
    },
    {
      image: vulcicc,
      title: 'Galvanically isolated, power and EM side-channel attack resilient secure AES core with integrated charge pump based power management',
      authors: ['Meizhi Wang', 'Shanshan Xie', 'Ping Na Li', 'Aseem Sayal', 'Ge Li', 'Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Ali E Yilmaz', 'Jaydeep P Kulkarni'],
      venue: 'IEEE Custom Integrated Circuits Conference',
      publicationDetails: '(CICC 2021), Virtual, April 2021.',
      pdfLink: 'https://sites.utexas.edu/CRL/files/2021/05/Galvanically-Isolated-Power-and-Electromagnetic-SideChannel-Attack-Resilient-Secure-AES-Core-with-Integrated-Charge-Pump-based-Power-Management.pdf',
    },
    {
      image: bci,
      title: 'MoM-Hb Algorithm for Prediction of High Voltage Interference in Automotive Active Circuitry',
      authors: ['Aditya Thimmaiah', 'Bibhu P Nayak', 'Anant Devi', 'Dipanjan Gope'],
      venue: 'IEEE Conference on Electrical Performance of Electronic Packaging and Systems',
      publicationDetails: '(EPEPS 2018), San Jose, USA, October 2018.',
      pdfLink: 'https://ieeexplore.ieee.org/document/8534302',
    },
  ];

  return (
    <div className="page">

      {/* ── Header ── */}
      <table className="header-table">
        <tbody>
          <tr>
            <td>
              <img className="header-photo" src={selfie} alt="Aditya Thimmaiah" />
            </td>
            <td className="header-info">
              <h1 style={{fontSize: "xx-large"}}>Aditya Thimmaiah</h1>
              <p >PhD Student</p>
              <p >UT Austin, Electrical and Computer Engineering</p>
              <p >Advisor: <a href="http://users.ece.utexas.edu/~gligoric/" target="_blank" rel="noreferrer">Dr Milos Gligoric</a></p>
              <p >
                <span className="meta-label">E-mail:</span>{' '}
                <a href="mailto:auditt@utexas.edu">auditt@utexas.edu</a>
              </p>
              <div className="header-links">
                <a href="https://scholar.google.com/citations?user=ABEzcbkAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
                <a href="https://conf.researchr.org/profile/adityathimmaiah" target="_blank" rel="noreferrer">ResearchR</a>
                <a href="https://github.com/1sand0s" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.youtube.com/@auditt1528" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="bio">
        I am a PhD candidate at UT Austin ECE, advised by{' '}
        <a href="http://users.ece.utexas.edu/~gligoric/" target="_blank" rel="noreferrer">Dr Milos Gligoric</a>.
        My research interests span programming languages, databases, compiler testing, and systems.
        I focus on making software more reliable and efficient through principled approaches
        grounded in PL theory and systems design.
      </p>

      <hr />

      {/* ── News ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bold"}}>News</h2>
      <ul className="section-list">
        <li>Our paper "PLSemanticsBench: A Formal Semantics Reasoning Benchmark for Code" is accepted at <strong>ICML 2026</strong>.</li>
        <li>
          I have been awarded the <strong>UT Continuing Fellowship</strong> for 2025–2026 — UT's highest
          graduate student award for academic and research excellence. This is my second time winning it.
        </li>
      </ul>

      {showOldNews && (
        <>          
          <h4>2025</h4>
          <ul className="section-list">
            <li>Our paper "In-memory Object Graph Stores" was accepted at ECOOP 2025.</li>
          </ul>
          <h4>2024</h4>
          <ul className="section-list">
            <li>"Java JIT Testing with Template Extraction" accepted at ACM FSE 2024.</li>
            <li>"ExLi: An Inline-Test Generation Tool for Java" accepted at ACM FSE 2024 (Demo).</li>
            <li>"Object Graph Programming" accepted at ACM/IEEE ICSE 2024.</li>
            <li>"JOG: Java JIT Peephole Optimizations and Tests from Patterns" accepted at ACM/IEEE ICSE 2024 (Demo).</li>
          </ul>
          <h4>2023</h4>
          <ul className="section-list">
            <li>"Pattern-Based Peephole Optimizations with Java JIT Tests" accepted at ACM ISSTA 2023.</li>
          </ul>
        </>
      )}

      <p>
        <a
          href="#old-news"
          onClick={(e) => { e.preventDefault(); setShowOldNews(v => !v); }}
        >
          {showOldNews ? 'Hide old news' : 'Link to old news'}
        </a>
      </p>

      <hr />

      {/* ── Publications ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bold"}}>Publications</h2>
      <div>
        {publications.map((pub, i) => (
          <Publication key={i} number={i + 1} {...pub} />
        ))}
      </div>

      <hr />

      {/* ── Industry Experience ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bolder"}}>Industry Experience</h2>
      <table className="exp-table">
        <tbody>
          <tr><td>Summer 2025</td><td>PhD Intern, <strong>dbt Labs</strong>, Seattle, WA</td></tr>
          <tr><td>Summer 2024</td><td>PhD Intern, <strong>Apple</strong>, Cupertino, CA</td></tr>
          <tr><td>Summer 2023</td><td>PhD Intern, <strong>Apple</strong>, Cupertino, CA</td></tr>
          <tr><td>Summer 2022</td><td>PhD Intern, <strong>Apple</strong>, Cupertino, CA</td></tr>
          {/* <tr><td>Summer 2015</td><td>Intern, <strong>Google</strong>, Bangalore, India</td></tr> */}
        </tbody>
      </table>
      I also interned with Google's <i>Experience Engineering Team</i> during my undergraduate.

      <hr />

      {/* ── Professional Service ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bolder"}}>Professional Service</h2>
      <table className="exp-table">
        <tbody>
          <tr><td>2026</td><td>IEEE/ACM ICSE LLM4Code — Program Committee <br /> IEEE/ACM ICSE DeepTest — Program Committee <br /> IEEE Transactions on Software Engineering — Review Committee <br /> ACM PLDI — AE Committee</td></tr>
          <tr><td>2025</td><td>IEEE/ACM ICSE — Shadow Program Committee <br /> IEEE/ACM ASE — Reviewer</td></tr>
          <tr><td>2024</td><td>Elsevier Journal of Systems and Software — Review Committee <br /> ACM ISSTA — Reviewer</td></tr>
          <tr><td>2022–2023</td><td>Texas Rocket Engineering Lab, UT Austin — RF Systems Lead Engineer</td></tr>
        </tbody>
      </table>

      <hr />

      {/* ── Teaching ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bolder"}}>Teaching & Mentoring</h2>
      <table className="exp-table">
        <tbody>
          <tr><td>Spring 2026</td><td>Organized and lead UT's <i>NL4SE</i> paper reading group under the guidance of <a href="https://www.cs.utexas.edu/~mooney/" target="_blank" rel="noreferrer">Dr Raymond Mooney</a>, <a href="https://jessyli.com" target="_blank" rel="noreferrer">Dr Junyi Jessy Li</a>, and <a href="http://users.ece.utexas.edu/~gligoric/" target="_blank" rel="noreferrer">Dr Milos Gligoric</a></td></tr>
          <tr><td>Spring 2026</td><td>Mentored Michael Zhao (undergraduate student) on the <i>Object Graph Programming (OGO)</i> project </td></tr>
          <tr><td>Fall 2025</td><td>Teaching Assistant for <i>EE 360G: Programming Paradigms</i></td></tr>
          <tr><td>Fall 2024</td><td>Mentored Zijian Yi (junior graduate student) and Joseph Kenis (undergraduate student) on the <i>In-memory Object Graph Stores (εStore)</i> project (accepted at ECOOP 2025)</td></tr>
          <tr><td>Fall 2024</td><td>Teaching Assistant for <i>EE 361G: Engineering Program Analysis</i></td></tr>
          <tr><td>Spring 2024</td><td>Teaching Assistant for <i>EE 312H: Software Design and Implementation-1</i></td></tr>
        </tbody>
      </table>

      <hr />

      {/* ── Industry Experience ── */}
      <h2 style={{fontSize: "x-large", fontWeight: "bolder"}}>Miscellany</h2>
        I am fascinated by Calisthenics because much like PL research, skill progression requires a methodical and principled approach.
        I am currently working towards a <i>Floor Maltese</i> which is a C-level skill in gymnastics.
        I love Tolkien's Legendarium and I have read the entire series 7 times.
      <hr />

    </div>
  );
}

export default App;
