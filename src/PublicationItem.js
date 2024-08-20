import {Stack} from "@mui/material"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function ExperienceItem (props) {
    const {id, authors, title, journal, year} = props

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
        <Stack id={id} sx={{padding: '20px', backgroundColor: '#5E5E5E80', color: '#D5D5D5', fontWeight: 'normal', borderRadius: '10px'}}>
            <Stack direction='row' sx={{marginBottom: '8px', fontSize: '2.5em'}}>
                <label style={{marginRight: '10px'}}><ArticleOutlinedIcon/></label>
                <label>{authors_processed()}. <span style={{color:'#FF968D'}}>{title}</span>. <span style={{fontWeight: 'bold'}}> In <i style={{fontWeight:'bold'}}>{journal}</i> {year}</span>.</label>
            </Stack>
        </Stack>
    )
}

export default ExperienceItem;