import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="prifleRightTop">
                <div className="profileCover">
                    <img 
                        src={PUBLIC_FOLDER + "/post/3.jpeg" }
                        alt="" 
                        class="profileCoverImg" 
                    />
                    <img
                        src={PUBLIC_FOLDER + "/person/1.jpeg" }
                        alt="" 
                        class="profileUserImg" 
                    />
                </div>
                <div className="profileInfo">
                        <h4 className="profileInfoName">Shin Code</h4>
                        <span className="profileInfoDesc">Udemy講師をしています</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <TimeLine />
                <Rightbar profile/>     
            </div>
          </div>
        </div>
    </>
  )
}
