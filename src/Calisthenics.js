import { useState, useEffect } from 'react'
import {Button, IconButton, Card, CardActions, CardMedia, CardContent, Typography, Grid, Modal, Box, Stack} from "@mui/material"
import {Share, Close} from '@mui/icons-material'
import ReactMarkdown from 'react-markdown'
import { markdownContent } from './markdownContent'

// Helper function to extract plain text excerpt from markdown
const getMarkdownExcerpt = (content, maxLength = 150) => {
    if (!content) return ''
    
    // Remove markdown headers (# ## ###)
    let text = content.replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers (** * __ _)
    text = text.replace(/\*\*|\*|__|_/g, '')
    // Remove links [text](url) -> text
    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove code blocks ```code``` and `code`
    text = text.replace(/```[\s\S]*?```/g, '')
    text = text.replace(/`[^`]+`/g, '')
    // Remove horizontal rules (---)
    text = text.replace(/^---+$/gm, '')
    // Remove list markers (- * +)
    text = text.replace(/^[\s]*[-*+]\s+/gm, '')
    // Remove numbered list markers
    text = text.replace(/^\d+\.\s+/gm, '')
    // Remove extra whitespace and newlines
    text = text.replace(/\n+/g, ' ').trim()
    // Remove multiple spaces
    text = text.replace(/\s+/g, ' ')
    
    // Truncate to maxLength
    if (text.length > maxLength) {
        text = text.substring(0, maxLength).trim()
        // Try to cut at a word boundary
        const lastSpace = text.lastIndexOf(' ')
        if (lastSpace > maxLength * 0.7) {
            text = text.substring(0, lastSpace)
        }
        text += '...'
    }
    
    return text
}

function Calisthenics (props) {

    const {data} = props
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [markdownText, setMarkdownText] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOpen = (item) => {
        setSelectedItem(item)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedItem(null)
        setMarkdownText('')
        setLoading(false)
    }

    useEffect(() => {
        if (selectedItem?.content && selectedItem.content.endsWith('.md')) {
            setLoading(true)
            // Load markdown content from src folder via mapping
            const content = markdownContent[selectedItem.content]
            if (content) {
                setMarkdownText(content)
                setLoading(false)
            } else {
                setMarkdownText('Markdown content not found')
                setLoading(false)
            }
        } else {
            setMarkdownText('')
            setLoading(false)
        }
    }, [selectedItem])

    return (
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{color: '#D5D5D5', paddingTop: '200px', paddingLeft: '130px', marginRight: '50px', fontWeight: 'lighter'}}>
        {
            data.map((item) => (
            <Grid item key={item.title} sx={{ padding: '4px' }}>
                <Card sx={{ 
                    width: 310, 
                    height: 'auto', 
                    backgroundColor: '#5E5E5E80', 
                    color: '#D5D5D5',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '4px'
                }}>
                  {item.banner && /\.(mp4|webm|ogg|mov)$/i.test(item.banner) ? (
                    <CardMedia
                      component="video"
                      sx={{ 
                          width: '100%',
                          height: 300,
                          objectFit: 'cover'
                      }}
                      src={require(`${item.banner}`)}
                      title={item.title}
                      controls
                      muted
                      loop
                      autoPlay
                    />
                  ) : (
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
                  )}
                  <CardContent sx={{ flexGrow: 1, padding: '12px', display: 'flex', flexDirection: 'column' }}>
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
                    <Typography 
                        variant="body2" 
                        sx={{
                            color: '#D5D5D5',
                            fontSize: '0.85em',
                            lineHeight: 1.4,
                            flexGrow: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            minHeight: '60px'
                        }}
                    >
                        {item.content && item.content.endsWith('.md') 
                            ? getMarkdownExcerpt(markdownContent[item.content] || '')
                            : item.content
                        }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined" sx={{textTransform: 'none', color: '#FF968D', borderColor: '#FF968D'}} onClick={() => handleOpen(item)}>Learn More</Button>
                  </CardActions>
                </Card>
            </Grid>
            ))
        }
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="workshop-modal-title"
        aria-describedby="workshop-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '70%', md: '60%' },
          maxWidth: '70vw',
          maxHeight: '90vh',
          overflow: 'auto',
          backgroundColor: 'white',
          color: 'black',
          //color: '#D5D5D5',
          border: '2px solid #D5D5D5',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
            <Typography id="workshop-modal-title" variant="h4" component="h2" sx={{ color: 'black', fontWeight: 'lighter' }}>
              {selectedItem?.title}
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: 'black' }}>
              <Close />
            </IconButton>
          </Stack>
          <Box id="workshop-modal-description" sx={{ color: 'black', fontWeight: 'lighter', lineHeight: 1.6 }}>
            {loading ? (
              <Typography variant="body1" sx={{ color: 'black', fontWeight: 'lighter' }}>
                Loading...
              </Typography>
            ) : selectedItem?.content && selectedItem.content.endsWith('.md') ? (
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <Typography variant="h4" sx={{ color: 'black', mt: 3, mb: 2, fontWeight: 'lighter' }} {...props} />,
                  h2: ({node, ...props}) => <Typography variant="h5" sx={{ color: 'black', mt: 2.5, mb: 1.5, fontWeight: 'lighter' }} {...props} />,
                  h3: ({node, ...props}) => <Typography variant="h6" sx={{ color: 'black', mt: 2, mb: 1, fontWeight: 'lighter' }} {...props} />,
                  p: ({node, ...props}) => <Typography variant="body1" sx={{ color: 'black', mb: 1.5, fontWeight: 'lighter' }} component="div" {...props} />,
                  ul: ({node, ...props}) => <ul style={{ color: 'black', paddingLeft: '20px', marginBottom: '1em' }} {...props} />,
                  ol: ({node, ...props}) => <ol style={{ color: 'black', paddingLeft: '20px', marginBottom: '1em' }} {...props} />,
                  li: ({node, ...props}) => <li style={{ color: 'black', marginBottom: '0.5em' }} {...props} />,
                  a: ({node, ...props}) => <a style={{ color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />,
                  strong: ({node, ...props}) => <strong style={{ color: 'black', fontWeight: 'bold' }} {...props} />,
                  em: ({node, ...props}) => <em style={{ color: 'black', fontStyle: 'italic' }} {...props} />,
                  code: ({node, inline, ...props}) => 
                    inline ? (
                      <code style={{ backgroundColor: '#3E3E3E', padding: '2px 4px', borderRadius: '3px', color: '#D5D5D5', fontFamily: 'monospace' }} {...props} />
                    ) : (
                      <code style={{ backgroundColor: '#3E3E3E', padding: '8px', borderRadius: '4px', color: '#D5D5D5', fontFamily: 'monospace', display: 'block', overflow: 'auto', marginBottom: '1em' }} {...props} />
                    ),
                  hr: ({node, ...props}) => <hr style={{ borderColor: '#D5D5D5', margin: '20px 0', borderWidth: '1px' }} {...props} />,
                  blockquote: ({node, ...props}) => <blockquote style={{ borderLeft: '3px solid #D5D5D5', paddingLeft: '15px', margin: '1em 0', fontStyle: 'italic', color: '#D5D5D5' }} {...props} />,
                }}
              >
                {markdownText}
              </ReactMarkdown>
            ) : (
              <Typography variant="body1" sx={{ color: '#D5D5D5', fontWeight: 'lighter', lineHeight: 1.6 }}>
                {selectedItem?.content}
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
      </>
    )
}

export default Calisthenics