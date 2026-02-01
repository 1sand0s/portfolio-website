//React native imports
import { useState } from 'react';
import { useRef } from 'react';
//React package imports
import {AppBar, Container, Toolbar, Box, Button, Stack, IconButton, Tooltip} from "@mui/material"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import {Apple, Google, YouTube, GitHub, School, Email} from '@mui/icons-material'
import { AspectRatio } from '@mui/joy';
import { InlineMath, BlockMath } from 'react-katex';
import Dbt from './dbtlabs'
//App library component imports
import ExperienceItem from './ExperienceItem';
import PublicationItem from './PublicationItem';
import Experiences from './Experiences';
import Workshop from './Workshop';
import GoodReads from './GoodReads';
//Data imports
import WorkshopData from './workshop_data.json'
import CalisthenicsData from './calisthenics_data.json'
import GoodReadsData from './good_reads_data.json'
import Features from './features.json'
import selfie from './selfie.png'
import estore from './estore-ecoop.png'
import ogo from './ogo-icse.png'
import lejit from './lejit-fse.png'
import exli from './exli-fse-demo.png'
import jogdemo from './jog-icse-demo.png'
import vulto from './vul-toes.png'
import jog from './jog-issta.png'
import vulsamos from './vul-samos.png'
import vulcicc from './vul-cicc.png'
import bci from './bci-epeps.png'
import ogoSlides from './ogo-icse-slides.pdf'
import estoreSlides from './estore-ecoop-slides.pdf'
import lejitSlides from './lejit-fse-slides.pdf'
import exliSlides from './exli-fse-slides.pdf'
//Stylesheet imports
import 'katex/dist/katex.min.css';
import './App.css';


function App() {
  const experience_ref = useRef(null)
  const publication_ref = useRef(null)
  const good_reads_ref = useRef(null)
  const workshop_ref = useRef(null)
  const calisthenics_ref = useRef(null)
  const life_ref = useRef(null)
  const pages = ['Experience', 'Publications', 'Good Reads', 'Workshop', 'Calisthenics']
  const visited_countries = ['United States', 'India', 'Sri Lanka', 'Portugal', 'Brazil']


  const industry_experience_items = [
    <ExperienceItem id='dbt-2025' icon={<Dbt sx={{color: '#D5D5D5'}}/>} company='dbt Labs' title='PhD Intern' dates='June 2 - August 3 2025' location='Seattle, WA, USA'/>,
    <ExperienceItem id='apple-2024' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 13 - August 16 2024' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='apple-2023' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 08 - August 18 2023' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='apple-2022' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 27 - August 12 2022' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='google-2015' icon={<Google sx={{color: '#D5D5D5'}}/>} company='Google' title='Intern' dates='May 15 - August 10 2015' location='Bangalore, KA, India'/>
  ]

  const volunteer_experience_items = [
    <ExperienceItem id='pldi-2026'company='ACM PLDI 2026' title='AE Committee' dates='March 2026' location='Austin, TX, USA'/>,
    <ExperienceItem id='llm4code-2026'company='IEEE/ACM ICSE LLM4Code 2026' title='Program Committee' dates='November 2025' location='Austin, TX, USA'/>,
    <ExperienceItem id='deeptest-2026'company='IEEE/ACM ICSE DeepTest 2026' title='Program Committee' dates='November 2025' location='Austin, TX, USA'/>,
    <ExperienceItem id='ase-2025'company='IEEE/ACM ASE 2025' title='Reviewer' dates='July 2025' location='Austin, TX, USA'/>,
    <ExperienceItem id='icse-2025'company='IEEE/ACM ICSE 2025' title='Shadow Program Committee' dates='September 2024' location='Austin, TX, USA'/>,
    <ExperienceItem id='jss-2025'company='Elsevier Journal of Systems and Software' title='Reviewer' dates='June 2024' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='issta-2024'company='ACM ISSTA 2024' title='Reviewer' dates='August 2023' location='Austin, TX, USA'/>,
    <ExperienceItem id='trel-2022'company='Texas Rocket Engineering Lab, UT Austin' title='RF Systems Lead Engineer' dates='August 2022 - December 2023' location='Austin, TX, USA'/>,
    <ExperienceItem id='greece-2019'company='Graduate ECE Student Organization, UT Austin' title='Corporate Relations Officer' dates='August 2019 - December 2021' location='Austin, TX, USA'/>,
  ]


  const publication_items = [
    <PublicationItem id='ecoop-estore-2025' slides_link={estoreSlides} item_icon={estore} authors={['Aditya Thimmaiah', 'Zijian Yi', 'Joseph Kenis', 'Christopher Rossbach', 'Milos Gligoric']} journal='ECOOP' year='2025' title='In-memory Object Graph Stores' pdf_link='https://drops.dagstuhl.de/storage/00lipics/lipics-vol333-ecoop2025/LIPIcs.ECOOP.2025.30/LIPIcs.ECOOP.2025.30.pdf'/>,
    <PublicationItem id='fse-lejit-2024' slides_link={lejitSlides} item_icon={lejit} authors={['Zhiqiang Zang', 'Fu-Yao Yu', 'Aditya Thimmaiah', 'August Shi', 'Milos Gligoric']} journal='ACM FSE' year='2024' title='Java JIT Testing with Template Extraction' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3643777'/>,
    <PublicationItem id='fse-exli-2024' slides_link={exliSlides} item_icon={exli} authors={['Yu Liu', 'Aditya Thimmaiah', 'Owolabi Legunsen', 'Milos Gligoric']} journal='ACM FSE (Demo)' year='2024' title='ExLi: An Inline-Test Generation Tool for Java' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3663529.3663817'/>,
    <PublicationItem id='icse-ogo-2024' slides_link={ogoSlides} item_icon={ogo} authors={['Aditya Thimmaiah', 'Leonidas Lampropoulos', 'Christopher Rossbach', 'Milos Gligoric']} journal='ACM/IEEE ICSE' year='2024' title=' Object Graph Programming' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3597503.3623319'/>,
    <PublicationItem id='toes-8051-2024' item_icon={vulto} authors={['Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Andreas Gerstlauer', 'Ali E Yilmaz']} journal='ACM Transactions on Embedded Computing Systems' year='2024' title='A hierarchical classification method for high-accuracy instruction disassembly with near-field EM measurements' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3629167'/>,
    <PublicationItem id='icse-jog-2024' item_icon={jogdemo} authors={['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric']} journal='ACM/IEEE ICSE (Demo)' year='2024' title='JOG: Java JIT Peephole Optimizations and Tests from Patterns' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3639478.3640040'/>,
    <PublicationItem id='issta-jog-2023' item_icon={jog} authors={['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric']} journal='ACM ISSTA' year='2023' title='Pattern-Based Peephole Optimizations with Java JIT Tests' pdf_link='https://dl.acm.org/doi/pdf/10.1145/3597926.3598038'/>,
    <PublicationItem id='samos-sim-2022' item_icon={vulsamos} authors={['Aditya Thimmaiah', 'Vishnu V Iyer', 'Andreas Gerstlauer', 'Michael Orshansky']} journal='ACM SAMOS' year='2022' title='High-level simulation of embedded software vulnerabilities to EM side-channel attacks' pdf_link='https://slam.ece.utexas.edu/pubs/samos22.EM.pdf'/>,
    <PublicationItem id='cicc-8051-2021' item_icon={vulcicc} authors={['Meizhi Wang', 'Shanshan Xie', 'Ping Na Li', 'Aseem Sayal', 'Ge Li', 'Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Ali E Yilmaz', 'Jaydeep P Kulkarni']} journal='IEEE CICC' year='2021' title='Galvanically isolated, power and EM side-channel attack resilient secure AES core with integrated charge pump based power management' pdf_link='https://sites.utexas.edu/CRL/files/2021/05/Galvanically-Isolated-Power-and-Electromagnetic-SideChannel-Attack-Resilient-Secure-AES-Core-with-Integrated-Charge-Pump-based-Power-Management.pdf'/>,
    <PublicationItem id='epeps-mom-2018' item_icon={bci} authors={['Aditya Thimmaiah', 'Bibhu P Nayak', 'Anant Devi', 'Dipanjan Gope']} journal='IEEE EPEPS' year='2018' title='MoM-Hb Algorithm for Prediction of High Voltage Interference in Automotive Active Circuitry' pdf_link='https://ieeexplore.ieee.org/document/8534302'/>,
  ]

  const handlePageNav = (page) => {
    if(page === 'Experience'){
      experience_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if(page === 'Publications'){
      publication_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if(page === 'Workshop'){
      workshop_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if(page === 'Good Reads'){
      good_reads_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if(page === 'Calisthenics'){
      calisthenics_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if(page === 'Life'){
      life_ref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box id='root' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
      <AppBar position="fixed" sx={{backgroundColor: 'black', paddingTop: '50px'}}> 
          <Container maxWidth="100vw" sx={{margin: 0, width: '100vw'}}>
            <Toolbar disableGutters>
              <Stack direction='row' width='100vw' sx={{justifyContent: 'space-between',margin: 0, marginLeft: '50px'}}>
                <Stack direction='row' width='50vw'>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={()=> handlePageNav(page)}
                      sx={{ my: 2, color: '#D5D5D5', display: 'block', fontSize: '1.2em', marginRight: '30px', textTransform: 'none', fontWeight: 'lighter' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Stack>
                <Stack direction='row' width='auto' sx={{justifyContent: 'flex-start'}}>
                    <Tooltip title="Email">
                      <IconButton onClick={()=> window.open('mailto:auditt@utexas.edu', '_blank')}>
                        <Email sx={{color: '#D5D5D5'}}/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Google Scholar">
                      <IconButton onClick={()=> window.open('https://scholar.google.com/citations?user=ABEzcbkAAAAJ&hl=en', '_blank')}>
                        <School sx={{color: '#D5D5D5'}}/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="YouTube">
                      <IconButton onClick={()=> window.open('https://www.youtube.com/@auditt1528', '_blank')}>
                        <YouTube sx={{color: '#D5D5D5'}}/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="GitHub">
                      <IconButton onClick={()=> window.open('https://github.com/1sand0s', '_blank')}>
                        <GitHub sx={{color: '#D5D5D5'}}/>
                      </IconButton>
                    </Tooltip>
                  </Stack>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      <Box id='main-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Stack direction={'column'}>
          <Stack direction={'row'} sx={{paddingTop: '200px', marginLeft: '180px'}}>
            <AspectRatio
              ratio='1/1'
              objectFit='contain'
              sx={{
                width: '28vw',
              }}
            >
              <img src={selfie} style={{backgroundColor : 'black'}}/>
            </AspectRatio>
            <Stack sx={{color: '#D5D5D5', justifyContent: 'center', marginLeft: '13vw'}}>
              <label style={{fontSize: '2em'}}>Hey there!</label>
              <label style={{fontSize: '4em'}}>I'm <span style={{color:'#FF968D'}}>Aditya Thimmaiah</span></label>
              <label  style={{fontSize: '2em'}}><br/></label>
              <label style={{ fontSize: '1.4em', fontWeight: 'lighter', lineHeight: '1.6' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '1.1em' }}>
                  <InlineMath math="\llbracket \text{Aditya} \rrbracket" /> ≜ λp. run Γ (commit p {'>>='} review {'>>='} merge)
                </span>

                <br /><br />

                <span style={{ fontFamily: 'monospace', opacity: 0.75 }}>
                  Γ = {'{'}
                  <br />
                  &nbsp;&nbsp;role&nbsp;&nbsp;&nbsp;&nbsp;↦ "ECE PhD @ UT Austin",<br />
                  &nbsp;&nbsp;advisor ↦ "Dr Milos Gligoric",<br />
                  &nbsp;&nbsp;email&nbsp;&nbsp;&nbsp;↦ "auditt@utexas.edu",<br />
                  &nbsp;&nbsp;focus&nbsp;&nbsp;&nbsp;↦ {'{'} PL · DB · Compilers · Systems · AI/ML {'}'}
                  <br />
                  {'}'}
                </span>
              </label>

              {/* <label  style={{fontSize: '1.5em', fontWeight: 'lighter'}}>I am an ECE PhD candidate at UT Austin advised by the <br/>one and only Dr Milos Gligoric<br/><br/>
              My research interests include databases, programming languages,<br/> compiler testing and systems</label> */}
              <Box sx={{paddingTop: '80px'}}>
                <Button variant='contained' onClick={()=> window.open('mailto:auditt@utexas.edu', '_blank')} sx={{backgroundColor:'#FF6961', textTransform: 'none', fontSize: '1em', paddingLeft: '60px', paddingRight: '60px', paddingTop: '20px', paddingBottom: '20px'}}>Contact Me</Button>
              </Box>
            </Stack>
          </Stack>
          <Stack direction={'column'}  sx={{paddingTop: '100px', marginLeft: '120px', marginRight: '120px'}}>
            <Stack sx={{padding: '20px', backgroundColor: '#5E5E5E80', color: '#D5D5D5', fontWeight: 'normal', borderRadius: '6px'}}>
              <label style={{fontSize: '2em', color: '#D5D5D5', fontWeight: 'lighter'}}> I have been awarded <span style={{color:'#FF968D'}}>UT Continuing Fellowship</span> for the year 2025-2026. It is UT's highest graduate student award for academic and research excellence.
              This is my second time winning it.</label>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box ref={experience_ref} id='experience-page' sx={{width:'100vw', height:'140vh', backgroundColor: 'black'}}>
        <Stack direction={'row'} sx={{color: '#D5D5D5', paddingTop: '200px', marginLeft: '130px', marginRight: '50px', fontWeight: 'lighter', justifyContent: 'space-between'}}>
            <Stack>
              <label style={{fontSize: '2em', marginBottom: '25px'}}>Industry Experience</label>
              <Experiences experience_items={industry_experience_items} width='35vw'/>
            </Stack>
            <Stack>
              <label style={{fontSize: '2em', marginBottom: '25px'}}>Professional Service</label>
              <Experiences experience_items={volunteer_experience_items} width='40vw'/>
            </Stack>
        </Stack>
      </Box>
      <Box ref={publication_ref} id='publications-page' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
        <Stack sx={{color: '#D5D5D5', paddingTop: '200px', marginLeft: '130px', marginRight: '50px', fontWeight: 'lighter'}}>
          <Experiences experience_items={publication_items}  width='auto'/>
        </Stack>
      </Box>
      <Box ref={good_reads_ref} id='good-reads-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <GoodReads data={GoodReadsData}/>
      </Box>
      <Box ref={workshop_ref} id='workshop-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Workshop data={WorkshopData}/>
      </Box>
      <Box ref={calisthenics_ref} id='calisthenics-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Workshop data={CalisthenicsData}/>
      </Box>
      {/* <Box ref={life_ref} id='life-page' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
        <Stack sx={{color: '#D5D5D5', paddingTop:'50px', marginLeft: '10px', marginRight: '50px', fontWeight: 'lighter'}}>
          <ComposableMap style={{margin: 0}}>
            <Geographies  style={{margin: 0}}geography={Features}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography style={{margin: 0}} key={geo.rsmKey} geography={geo} 
                  strokeWidth='0.1px'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill={visited_countries.includes(geo.properties.name) ? '#FF696180' : '#000000'}
                  stroke={visited_countries.includes(geo.properties.name) ? '#D5D5D5' : '#777777'} />
                ))
              }
            </Geographies>
          </ComposableMap>    
        </Stack>
      </Box> */}
    </Box>
  );
}

export default App;
