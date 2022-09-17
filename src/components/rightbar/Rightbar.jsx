import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventCountainer">
          <img src="assets/star.png" alt="" className="starImg"/>
          <span className="evenText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
          </div> 
          <img className="eventImg" src="assets/event.jpeg" alt="" />
          <h4 className="rightbarTitle">オンラインの友達</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Shin Code</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img  className="rightbarProfileImg" src="assets/person/2.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Tanaka</span>
            </li>
          </ul>
      </div>
    </div>
  );
}
