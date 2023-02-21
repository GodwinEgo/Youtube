import { CardContent, CardMedia, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ( { channelDetail } ) =>
{
  return (
    <Box
      sx={ {
        boxShadow: 'none',
        borderRadius: '20px',
      } }
    >
      <Link to={ `/channel/${ channelDetail?.id?.channelId }` }>
        <CardContent sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' } }>
          <CardMedia
            image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt={ channelDetail?.snippet?.title }
            sx={ { borderRadius: '50%', height: '180px', width: '180px' } }
          />
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
