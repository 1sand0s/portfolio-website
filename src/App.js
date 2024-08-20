import { useState } from 'react';
import './App.css';
import selfie from './selfie.png'
import {AppBar, Container, Toolbar, Box, Button, Stack} from "@mui/material"
import ExperienceItem from './ExperienceItem';
import PublicationItem from './PublicationItem';
import Experiences from './Experiences';
import {Apple, Google} from '@mui/icons-material'
import { useRef, useEffect} from 'react';

function App() {
  const experience_ref = useRef(null)
  const publication_ref = useRef(null)
  const pages = ['Experience', 'Publications', 'Workshop', 'Calisthenics', 'Life', 'Contact']

  const industry_experience_items = [
    <ExperienceItem id='apple-2024' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 13 - August 16 2024' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='apple-2023' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 08 - August 18 2023' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='apple-2022' icon={<Apple sx={{color: '#D5D5D5'}}/>} company='Apple' title='PhD Intern' dates='May 27 - August 12 2022' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='google-2015' icon={<Google sx={{color: '#D5D5D5'}}/>} company='Google' title='Intern' dates='May 15 - August 10 2015' location='Bangalore, KA, India'/>
  ]

  const volunteer_experience_items = [
    <ExperienceItem id='icse-2025'company='IEEE/ACM ICSE 2025' title='Shadow PC - Reviewer' dates='July 22 - September 15 2024' location='Austin, TX, USA'/>,
    <ExperienceItem id='jss-2025'company='Elsevier Journal of Systems and Software' title='Reviewer' dates='May 13 - June 14 2024' location='Cupertino, CA, USA'/>,
    <ExperienceItem id='issta-2024'company='ACM ISSTA 2024' title='Reviewer' dates='August 2023' location='Austin, TX, USA'/>,
    <ExperienceItem id='trel-2022'company='Texas Rocket Engineering Lab, UT Austin' title='RF Systems Lead Engineer' dates='August 2022 - December 2023' location='Austin, TX, USA'/>,
    <ExperienceItem id='greece-2019'company='Graduate ECE Student Organization, UT Austin' title='Corporate Relations Officer' dates='August 2019 - December 2021' location='Austin, TX, USA'/>,
  ]


  const publication_items = [
    <PublicationItem id='fse-lejit-2024' authors={['Zhiqiang Zang', 'Fu-Yao Yu', 'Aditya Thimmaiah', 'August Shi', 'Milos Gligoric']} journal='ACM FSE' year='2024' title='Java JIT Testing with Template Extraction'/>,
    <PublicationItem id='fse-exli-2024' authors={['Yu Liu', 'Aditya Thimmaiah', 'Owolabi Legunsen', 'Milos Gligoric']} journal='ACM FSE (Demo)' year='2024' title='ExLi: An Inline-Test Generation Tool for Java'/>,
    <PublicationItem id='icse-ogo-2024' authors={['Aditya Thimmaiah', 'Leonidas Lampropoulos', 'Christopher Rossbach', 'Milos Gligoric']} journal='ACM/IEEE ICSE' year='2024' title=' Object Graph Programming'/>,
    <PublicationItem id='toes-8051-2024' authors={['Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Andreas Gerstlauer', 'Ali E Yilmaz']} journal='ACM Transactions on Embedded Computing Systems' year='2024' title='A hierarchical classification method for high-accuracy instruction disassembly with near-field EM measurements'/>,
    <PublicationItem id='icse-jog-2024' authors={['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric']} journal='ACM/IEEE ICSE (Demo)' year='2024' title='JOG: Java JIT Peephole Optimizations and Tests from Patterns'/>,
    <PublicationItem id='issta-jog-2023' authors={['Zhiqiang Zang', 'Aditya Thimmaiah', 'Milos Gligoric']} journal='ACM ISSTA' year='2023' title='Pattern-Based Peephole Optimizations with Java JIT Tests'/>,
    <PublicationItem id='samos-sim-2022' authors={['Aditya Thimmaiah', 'Vishnu V Iyer', 'Andreas Gerstlauer', 'Michael Orshansky']} journal='ACM SAMOS' year='2022' title='High-level simulation of embedded software vulnerabilities to EM side-channel attacks'/>,
    <PublicationItem id='cicc-8051-2021' authors={['Meizhi Wang', 'Shanshan Xie', 'Ping Na Li', 'Aseem Sayal', 'Ge Li', 'Vishnu V Iyer', 'Aditya Thimmaiah', 'Michael Orshansky', 'Ali E Yilmaz', 'Jaydeep P Kulkarni']} journal='IEEE CICC' year='2021' title='Galvanically isolated, power and electromagnetic side-channel attack resilient secure AES core with integrated charge pump based power management'/>,
    <PublicationItem id='epeps-mom-2018' authors={['Aditya Thimmaiah', 'Bibhu P Nayak', 'Anant Devi', 'Dipanjan Gope']} journal='IEEE EPEPS' year='2018' title='MoM-Hb Algorithm for Prediction of High Voltage Interference in Automotive Active Circuitry'/>,
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
  }

  return (
    <Box id='root' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
      <AppBar position="fixed" sx={{backgroundColor: 'black', paddingTop: '120px'}}> 
          <Container maxWidth="xl" sx={{margin: 0, marginLeft: '120px'}}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={()=> handlePageNav(page)}
                    sx={{ my: 2, color: '#D5D5D5', display: 'block', fontSize: '2.5em', marginRight: '70px', textTransform: 'none', fontWeight: 'lighter' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      <Box id='main-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Stack direction={'row'} sx={{paddingTop: '500px', marginLeft: '250px'}}>
          <Box
            component="img"
            sx={{
              height: '60vh',
              width: '30vw',
            }}
            src={selfie}
          />
          <Stack sx={{color: '#D5D5D5', justifyContent: 'center', marginLeft: '300px'}}>
            <label style={{fontSize: '4em'}}>Hey there!</label>
            <label style={{fontSize: '9em'}}>I'm <span style={{color:'#FF968D'}}>Aditya Thimmaiah</span></label>
            <label  style={{fontSize: '4em'}}><br/></label>
            <label  style={{fontSize: '3em', fontWeight: 'lighter'}}>I am an ECE PhD candidate at UT Austin advised by the <br/>one and only Dr Milos Gligoric<br/><br/>
            My research interests include databases, programming languages,<br/> compiler testing and systems</label>
            <Box sx={{paddingTop: '80px'}}>
              <Button variant='contained' sx={{backgroundColor:'#FF6961', textTransform: 'none', fontSize: '2.5em', paddingLeft: '100px', paddingRight: '100px', paddingTop: '30px', paddingBottom: '30px'}}>Contact Me</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box ref={experience_ref} id='experience-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Stack direction={'row'} sx={{color: '#D5D5D5', paddingTop: '300px', marginLeft: '250px', marginRight: '250px', fontWeight: 'lighter', justifyContent: 'space-between'}}>
            <Stack>
              <label style={{fontSize: '4em', marginBottom: '50px'}}>Industry Experience</label>
              <Experiences experience_items={industry_experience_items} width='30vw'/>
            </Stack>
            <Stack>
              <label style={{fontSize: '4em', marginBottom: '50px'}}>Volunteer Experience</label>
              <Experiences experience_items={volunteer_experience_items} width='30vw'/>
            </Stack>
        </Stack>
      </Box>
      <Box ref={publication_ref} id='publications-page' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
        <Stack sx={{color: '#D5D5D5', paddingTop: '300px', marginLeft: '250px', marginRight: '250px', fontWeight: 'lighter'}}>
          <Experiences experience_items={publication_items}  width='auto'/>
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
