import React from 'react'
import "./home.css"
import { Topbar } from '../../components/topbar/Topbar'
import { Feed } from '../../components/feed/Feed'


export const Home = () => {
  return (
    <div>
      <Topbar />
      <Feed />
    </div>
  )
}
