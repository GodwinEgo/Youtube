import { Feed } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChannelDetail from './components/ChannelDetail'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'

const App = () =>
{
  return (
    <BrowserRouter>
      <Box sx={ { backgroundColor: '#0000' } }>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Feed /> } />
          <Route path='/video/:id' element={ <VideoDetail /> } />
          <Route path='/channel/:id' element={ <ChannelDetail /> } />
          <Route path='/search/:id' element={ <SearchFeed /> } />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
