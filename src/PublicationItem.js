import {Button, Stack, Link} from "@mui/material"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function ExperienceItem (props) {
    const {id, authors, title, journal, year, pdf_link, item_icon, slides_link = null} = props

    const authors_processed = () => {
        let authors_processed = []
        let count = 0
        for(let i = 0 ; i < authors?.length; i++){
            if(authors[i] === 'Aditya Thimmaiah' && i < (authors?.length - 1)){
                authors_processed[count++] = <span style={{fontWeight: 'bold'}}>Aditya Thimmaiah</span>
            }
            else{
                authors_processed[count++] = <span>{authors[i]}</span>
            }
            if(i < (authors?.length - 1)){
                authors_processed[count++] = <span>, </span>
            }
        }

        return (
            <span>
                {authors.map((author, index) => {
                    if(author === 'Aditya Thimmaiah'){
                        if(index < (authors?.length - 1))
                            return <span style={{fontWeight: 'bold'}}>Aditya Thimmaiah, </span>
                        else
                            return <span style={{fontWeight: 'bold'}}>Aditya Thimmaiah</span>
                    }
                    else{
                        if(index < (authors?.length - 1))
                            return <span>{author}, </span>
                        else
                            return <span>{author}</span>
                    }
                })}
            </span>
        )
    }

    return (
        <Stack direction='row' sx={{padding: '10px', backgroundColor: '#5E5E5E80', color: '#D5D5D5', fontWeight: 'normal', borderRadius: '6px'}}>
            <img src={item_icon} alt='item_icon' style={{width: '200px', height: '110px', marginRight: '10px'}}/>
            <Stack id={id}>
                <Stack sx={{marginBottom: '6px', fontSize: '1.2em'}}>
                    <label><span style={{color:'#FF968D', fontWeight: 'bold'}}>{title}</span></label>
                    <label>{authors_processed()}</label>
                    <label><span>{journal} {year}</span></label>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 1 }} direction='row'>
                    <Link sx={{textTransform: 'none', color:'#FF968D', underline: 'always', textDecorationColor: '#FF968D'}} href={pdf_link} target='_blank'>[PDF]</Link>
                    {/* <Link sx={{textTransform: 'none', color:'#FF968D', underline: 'always', textDecorationColor: '#FF968D'}} href={pdf_link} target='_blank'>[Cite]</Link> */}
                    {slides_link && (
                    <Link sx={{textTransform: 'none', color:'#FF968D', underline: 'always', textDecorationColor: '#FF968D'}} href={slides_link} target='_blank'>[Slides]</Link>
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ExperienceItem;