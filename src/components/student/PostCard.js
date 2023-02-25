import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { ListItemButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function PostCard(props){
    const image = props.image;
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };

    const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

    const handleCommentClick = () => {
      setIsCommentBoxVisible(!isCommentBoxVisible);
    };

    const [comments, setComments] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          const newComment = {
            id: comments.length + 1,
            text: event.target.value
          };
          setComments([...comments, newComment]);
          event.target.value = '';
        }
      };

    return(<Card>
        <CardOverflow>
          <List sx={{ml:0,mr:0,mb:0,mt:0}}>
          <ListItem sx={{ml:0,mr:0,mb:0,mt:0}} style={{ position: 'relative' }}>
            <img
                src={image}
                alt="Error"
                align ="middle"
                style={{ width: '100%' }}
            />
            </ListItem>
                <ListItemButton style={{ position: 'absolute', top: '50%', right: '0%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                    <ArrowForwardIosIcon />
              </ListItemButton>
              <ListItemButton style={{ position: 'absolute', top: '50%', left: '1%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                    <ArrowBackIosIcon />
              </ListItemButton>
          </List>

        </CardOverflow>
        <Box>
            <Stack direction="row" spacing={3}>
                <IconButton sx={{width:'30%'}} onClick={handleLikeClick} color={isLiked ? 'primary' : '#6D28D9'}>
                    <FavoriteIcon aria-label="heartBotton"></FavoriteIcon>
                </IconButton>  
                <IconButton sx={{width:'30%'}} onClick={handleCommentClick}>
                    <CommentIcon>
                    </CommentIcon>
                </IconButton>
                <IconButton sx={{width:'30%'}}>
                    <SendIcon></SendIcon>
                </IconButton>
            </Stack>

        </Box>

        <Box>
        {isCommentBoxVisible && (
        <TextField
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          label="Add a comment"
          variant="outlined"
          fullWidth
          onKeyPress={handleKeyPress}
        />
      )}
        </Box>
        <Box>
        {comments.map((comment) => (
        <Box key={comment.id} sx={{ border: '1px solid #ccc', borderRadius: '4px', p: 1, mt: 1 }}>
          <Typography variant="body1">
            {comment.text}
          </Typography>
        </Box>
      ))}
        </Box>
    </Card>)
}

