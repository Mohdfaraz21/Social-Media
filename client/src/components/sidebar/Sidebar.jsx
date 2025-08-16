import React from 'react'
import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../DummyData";
import CloseFriend from "../closeFriend/CloseFriend";


export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="SidebarWrapper">
          <ul className='SidebarList'>
            <li className='SidebarItemList'>
              <RssFeedIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Feed</span>
            </li>
            <li className='SidebarItemList'>
              <ChatIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Chats</span>
            </li>
            <li className='SidebarItemList'>
              <SlideshowIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Video</span>
            </li>
            <li className='SidebarItemList'>
              <GroupIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Groups</span>
            </li>
            <li className='SidebarItemList'>
              <BookmarkIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Bookmarks</span>
            </li>
            <li className='SidebarItemList'>
              <QuestionAnswerIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Questions</span>
            </li>
            <li className='SidebarItemList'>
              <WorkIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Jobs</span>
            </li>
            <li className='SidebarItemList'>
              <EventIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Events</span>
            </li>
            <li className='SidebarItemList'>
              <SchoolIcon className='SidebarIcon' />
              <span className="SidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="SidebarButton">Show More</button>
          <hr  className='SidebarHr'/>
          <ul className="SidebarFriendList">
            {Users.map(u => (<CloseFriend key={u.id} user={u} />))}
          </ul>
        </div>
      </div>
    </>
  )
}
