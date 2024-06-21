import React from 'react'
import { Skeleton } from '@nextui-org/react'
function Loading() {
  return (
    <div className='space-y-4 m-4 bg-white'>
        <div className="">
            <Skeleton>
                <div className="w-full h-[50px] bg-default-200 rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-[50px] bg-default-200 rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-[50px] bg-default-200 rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-screen bg-default-200 rounded"></div>
            </Skeleton>
        </div>
    </div>
  )
}

export default Loading