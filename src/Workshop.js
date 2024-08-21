import {Button, IconButton, Card, CardActions, CardMedia, CardContent, Typography, Grid} from "@mui/material"
import {Share} from '@mui/icons-material'


function Workshop (props) {

    const {data} = props

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{color: '#D5D5D5', paddingTop: '200px', paddingLeft: '130px', marginRight: '50px', fontWeight: 'lighter'}}>
        {
            data.map((item) => (
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 370, backgroundColor: '#5E5E5E80', color: '#D5D5D5' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={require(`${item.banner}`)}
                    title="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton size="small" sx={{color: '#D5D5D5'}}><Share/></IconButton>
                    <Button size="small" sx={{textTransform: 'none', color: '#D5D5D5'}}>Learn More</Button>
                  </CardActions>
                </Card>
            </Grid>
            ))
        }
      </Grid>
    )
}

export default Workshop