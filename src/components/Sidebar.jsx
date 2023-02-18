import { Stack } from '@mui/system'
import React from 'react'

import { categories } from '../utils/constants'

const selectedCategory = 'New';


const Sidebar = () =>
{
  return (
    <Stack direction="row" sx={ { overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' }, } }>
      { categories.map( ( category ) => (
        <button
          className='category-btn'
          style={{background: category.name === selectedCategory && '#FC1503', color: '#fff'}}
        >
          <span>{ category.icon }</span>
          <span>{ category.name}</span>
        </button>
      ) ) }
    </Stack>
  )
}

export default Sidebar
