import {Stack} from "@mui/material"

function ExperienceItem (props) {
    const {id, icon, company, title, dates, location} = props

    return (
        <Stack sx={{padding: '10px', backgroundColor: '#5E5E5E80', color: '#D5D5D5', fontWeight: 'normal', borderRadius: '6px'}}>
            <Stack direction='row' sx={{marginBottom: '4px', fontSize: '1.3em'}}>
                <label style={{marginRight: '5px'}}>{icon}</label>
                <label>{title}</label>
            </Stack>
            <label style={{fontSize: '1.3em', marginBottom: '3px'}}>{company}</label>
            <label style={{fontSize: '1em'}}>{dates}   &#8226;   {location}</label>
        </Stack>
    )
}

export default ExperienceItem;