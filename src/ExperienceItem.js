import {Stack} from "@mui/material"

function ExperienceItem (props) {
    const {id, icon, company, title, dates, location} = props

    return (
        <Stack sx={{padding: '20px', backgroundColor: '#5E5E5E80', color: '#D5D5D5', fontWeight: 'normal', borderRadius: '10px'}}>
            <Stack direction='row' sx={{marginBottom: '8px', fontSize: '2.5em'}}>
                <label style={{marginRight: '10px'}}>{icon}</label>
                <label>{title}</label>
            </Stack>
            <label style={{fontSize: '2.3em', marginBottom: '10px'}}>{company}</label>
            <label style={{fontSize: '1.5em'}}>{dates}   &#8226;   {location}</label>
        </Stack>
    )
}

export default ExperienceItem;