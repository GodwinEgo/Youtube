import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () =>
{
  const [ chhannelDetail, setChannelDetail ] = useState( null )

  const { id } = useParams();

  useEffect( () =>
  {
    fetchFromAPI( `channels?part=snippet&id=${ id }` )
      .then( ( data ) => setChannelDetail( ( data?.items[ 0 ] ) ) )


    fetchFromAPI( `search?channelId=${ id }&=snippet&order=data` )
      .then( ( data ) => setChannelDetail( ( data?.items[ 0 ] ) ) )

  }, [ id ] )


  return (
    <div>

    </div>
  )
}

export default ChannelDetail
