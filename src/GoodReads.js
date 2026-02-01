import { useState } from 'react';
import {Button, IconButton, Card, CardActions, CardMedia, CardContent, Typography, Grid, TextField, Box, Stack, Rating} from "@mui/material"
import {Share} from '@mui/icons-material'


function GoodReads (props) {

    const {data} = props
    const [searchQuery, setSearchQuery] = useState('')

    const filteredData = data.filter((item) => {
        const query = searchQuery.toLowerCase()
        return (
            item.title.toLowerCase().includes(query) ||
            (item.author && item.author.toLowerCase().includes(query)) ||
            (item.content && item.content.toLowerCase().includes(query))
        )
    })

    return (
        <Box sx={{color: '#D5D5D5', paddingTop: '200px', paddingLeft: '130px', marginRight: '50px', fontWeight: 'lighter', height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column'}}>
            <Stack sx={{marginBottom: '20px'}}>
                <TextField
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        width: '400px',
                        '& .MuiOutlinedInput-root': {
                            color: '#D5D5D5',
                            '& fieldset': {
                                borderColor: '#5E5E5E80',
                            },
                            '&:hover fieldset': {
                                borderColor: '#FF968D',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF968D',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#D5D5D5',
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#D5D5D5',
                            opacity: 0.7,
                        },
                    }}
                />
            </Stack>
            <Box sx={{flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingRight: '20px'}}>
                <Grid container spacing={2}>
                {
                    filteredData.map((item, index) => (
                    <Grid item key={index} sx={{ padding: '4px' }}>
                        <Card sx={{ 
                            width: 200, 
                            height: 'auto', 
                            backgroundColor: '#5E5E5E80', 
                            color: '#D5D5D5',
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '4px'
                        }}>
                          <CardMedia
                            component="img"
                            sx={{ 
                                width: '100%',
                                height: 300,
                                objectFit: 'cover'
                            }}
                            image={require(`${item.banner}`)}
                            title={item.title}
                          />
                          <CardContent sx={{ flexGrow: 1, padding: '12px' }}>
                            <Typography 
                                gutterBottom 
                                variant="h6" 
                                component="div"
                                sx={{
                                    fontSize: '0.95em',
                                    fontWeight: 'bold',
                                    color: '#FF968D',
                                    marginBottom: '8px',
                                    lineHeight: 1.2,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical'
                                }}
                            >
                                {item.title}
                            </Typography>
                            {item.author && (
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        fontSize: '0.85em',
                                        color: '#D5D5D5',
                                        marginBottom: '4px'
                                    }}
                                >
                                    {item.author}
                                </Typography>
                            )}
                            {item.year && (
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        fontSize: '0.8em',
                                        color: '#D5D5D5',
                                        opacity: 0.8,
                                        marginBottom: '8px'
                                    }}
                                >
                                    {item.year}
                                </Typography>
                            )}
                            {item.rating !== undefined && (
                                <Rating
                                    value={item.rating}
                                    readOnly
                                    precision={0.5}
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#FF968D',
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            color: '#5E5E5E',
                                        },
                                        fontSize: '1.2em'
                                    }}
                                />
                            )}
                          </CardContent>
                          {/* <CardActions sx={{ padding: '8px 12px', justifyContent: 'flex-end' }}>
                            <IconButton size="small" sx={{color: '#D5D5D5'}}><Share/></IconButton>
                          </CardActions> */}
                        </Card>
                    </Grid>
                    ))
                }
              </Grid>
            </Box>
        </Box>
    )
}

export default GoodReads