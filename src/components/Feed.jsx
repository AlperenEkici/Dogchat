import { Box } from '@mui/material';
import * as React from 'react';
import Post from './Post';

export const Feed = () => {
  return (
    <Box  flex={4} padding={2}>
        <Post/>
        <Post/>
        <Post/>
        
    </Box>
  )
}
