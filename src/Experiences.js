import { List, ListItemButton, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import Circle from "@mui/icons-material/Circle"

function Experiences (props) {
    const {id, experience_items, width} = props

    return (
        <List id={id} style={{margin: 0, padding: 0, width: width}}>
            {
                experience_items?.map((item) => (
                    <ListItem sx={{display: 'list-item'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Circle sx={{color: '#FF968D', fontSize: '1em'}}/>
                            </ListItemIcon>
                            <ListItemText>
                                {item}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default Experiences