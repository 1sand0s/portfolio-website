import { useState } from 'react';
import './App.css';
import selfie from './selfie.png'
import {AppBar, Container, Toolbar, Box, Button, Stack, IconButton, Tooltip, Card, CardActions, CardMedia, CardContent, Typography, Grid} from "@mui/material"
import ExperienceItem from './ExperienceItem';
import PublicationItem from './PublicationItem';
import Experiences from './Experiences';
import Workshop from './Workshop';
import {Apple, Google, YouTube, GitHub, School, Share} from '@mui/icons-material'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { useRef, useEffect} from 'react';
import WorkshopData from './workshop_data.json'
import CalisthenicsData from './calisthenics_data.json'
import Features from './features.json'

function App() {
  const experience_ref = useRef(null)
  const publication_ref = useRef(null)
  const workshop_ref = useRef(null)
  const calisthenics_ref = useRef(null)
  const life_ref = useRef(null)
  const pages = ['Experience', 'Publications', 'Workshop', 'Calisthenics', 'Life']
  const visited_countries = ['United States', 'India', 'Sri Lanka', 'Portugal', 'Brazil']


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
    else if(page === 'Workshop'){
      workshop_ref.current?.scrollIntoView({
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
          <Container maxWidth="xl" sx={{margin: 0}}>
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
                <Stack direction='row' width='20vw' sx={{justifyContent: 'right'}}>
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
        <Stack direction={'row'} sx={{paddingTop: '200px', marginLeft: '180px'}}>
          <Box
            component="img"
            sx={{
              height: '60vh',
              width: '30vw',
            }}
            src={selfie}
          />
          <Stack sx={{color: '#D5D5D5', justifyContent: 'center', marginLeft: '150px'}}>
            <label style={{fontSize: '2em'}}>Hey there!</label>
            <label style={{fontSize: '4em'}}>I'm <span style={{color:'#FF968D'}}>Aditya Thimmaiah</span></label>
            <label  style={{fontSize: '2em'}}><br/></label>
            <label  style={{fontSize: '1.5em', fontWeight: 'lighter'}}>I am an ECE PhD candidate at UT Austin advised by the <br/>one and only Dr Milos Gligoric<br/><br/>
            My research interests include databases, programming languages,<br/> compiler testing and systems</label>
            <Box sx={{paddingTop: '80px'}}>
              <Button variant='contained' sx={{backgroundColor:'#FF6961', textTransform: 'none', fontSize: '1em', paddingLeft: '60px', paddingRight: '60px', paddingTop: '20px', paddingBottom: '20px'}}>Contact Me</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box ref={experience_ref} id='experience-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Stack direction={'row'} sx={{color: '#D5D5D5', paddingTop: '200px', marginLeft: '130px', marginRight: '50px', fontWeight: 'lighter', justifyContent: 'space-between'}}>
            <Stack>
              <label style={{fontSize: '2em', marginBottom: '25px'}}>Industry Experience</label>
              <Experiences experience_items={industry_experience_items} width='35vw'/>
            </Stack>
            <Stack>
              <label style={{fontSize: '2em', marginBottom: '25px'}}>Volunteer Experience</label>
              <Experiences experience_items={volunteer_experience_items} width='40vw'/>
            </Stack>
        </Stack>
      </Box>
      <Box ref={publication_ref} id='publications-page' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
        <Stack sx={{color: '#D5D5D5', paddingTop: '200px', marginLeft: '130px', marginRight: '50px', fontWeight: 'lighter'}}>
          <Experiences experience_items={publication_items}  width='auto'/>
        </Stack>
      </Box>
      <Box ref={workshop_ref} id='workshop-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Workshop data={WorkshopData}/>
      </Box>
      <Box ref={calisthenics_ref} id='calisthenics-page' sx={{width:'100vw', height:'100vh', backgroundColor: 'black'}}>
        <Workshop data={CalisthenicsData}/>
      </Box>
      <Box ref={life_ref} id='life-page' sx={{width:'100vw', height:'auto', backgroundColor: 'black'}}>
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
      </Box>
    </Box>
  );
}

export default App;
