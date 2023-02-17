import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <Route path='/search/:id' element={ <SearchField /> } />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
