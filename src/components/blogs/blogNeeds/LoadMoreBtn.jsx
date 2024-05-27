import React from 'react'
import { ArrowDownwardRounded } from '@mui/icons-material'

function LoadMoreBtn() {
  return (
    <button className='flex px-6 py-2 items-center' style={{background: "#eae3ff"}}>
      <ArrowDownwardRounded sx={{ color: "#42307D" }}/>
      <span className='ml-2 text-theme text-lg'>Load More</span>
    </button>
  )
}

export default LoadMoreBtn
