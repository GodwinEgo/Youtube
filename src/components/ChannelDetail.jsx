import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () =>
{
  const [ channelDetail, setChannelDetail ] = useState( null )

  const [ videos, setVideos ] = useState( [] )


  const { id } = useParams( videos );

  useEffect( () =>
  {
    fetchFromAPI( `channels?part=snippet&id=${ id }` )
      .then( ( data ) => setChannelDetail( ( data?.items[ 0 ] ) ) )


    fetchFromAPI( `search?channelId=${ id }&part=snippet&order=date` )
      .then( ( data ) => setVideos( ( data?.items ) ) )

  }, [ id ] )


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={ {
          background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
          zIndex: 10,
          height: '300px',
        } }
        />
        <ChannelCard channelDetail={ channelDetail } />
      </Box>
    </Box>
  )
}

export default ChannelDetail
