import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{margin:"30px"}}>
    <CardHeader
      avatar={
        <Avatar
                        sx={{ width: 50, height: 50 }}
                        src="https://people.com/thmb/WxJfkZ3MCkXFhY1GgWzuJLqDgDc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x626:1021x628)/dog-dating-2522ccf2b0e04f94a29f25fdb81d79af.jpg" />
                   
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Alperen Ekici"
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://static.boredpanda.com/blog/wp-content/uploads/2015/04/dog-best-friends-17__605.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="h6" color="text.secondary">
        Ağalarla pazar gezisi.

      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post