'use client';
import React from 'react'

interface Props{
    error: Error
}

function ErrorPage({error}: Props) {
  return (
    <div>
       An unexpected Error has occured!
    </div>
  )
}

export default ErrorPage