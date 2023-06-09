import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, Image}  from '@mui/icons-material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyledModal =styled(Modal)({
display:"flex",
alignItems:"center",
justifyContent:"center"


})
const UserBox =styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:"10px",
    marginBottom:"20px"

})
    


const Add = () => {
    const[open,setOpen]=useState(false)
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Delete" sx={{position:"fixed" , bottom:20 , left:{xs:"calc(45%)",md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
                </Fab>
        </Tooltip>
        <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
         <Typography variant='h6' color="gray" textAlign="center">
            Create Post
         </Typography>
         <UserBox>
         <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://people.com/thmb/WxJfkZ3MCkXFhY1GgWzuJLqDgDc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x626:1021x628)/dog-dating-2522ccf2b0e04f94a29f25fdb81d79af.jpg" />
                   <Typography fontWeight={500} variant='span'> Alperen Ekici</Typography>

         </UserBox>
         <TextField
         sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <Image color="secondary"/>
        <PersonAddIcon color='error'/>
        <VideoCameraBackIcon color='success'/>
        </Stack>
        <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
        </>
        
    )
}

export default Add