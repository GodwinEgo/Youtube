import { Stack } from '@mui/system'
import { Button } from 'bootstrap'
import React from 'react'

import { categories } from '../utils/constants'


const Sidebar = () =>
{
  return (
    <Stack direction="row" sx={ { overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } } }>
      { categories.map( ( category ) => (
        <Button>
          <span>{ category.icon }</span>
          <span>{ category.name}</span>
        </Button>
      ) ) }
    </Stack>
  )
}

export default Sidebar
