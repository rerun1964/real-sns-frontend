import React from 'react'

export default function Topbar() {
    return (
        <div className="topbaContainer">
            <div className="topbarLeft">
                <span className="logo">Real SNS</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <input 
                        type="text" 
                        className="searchInput" 
                        placeholder="探しものは何ですか？"
                    />
                </div>
            </div>
            <div className="topbaRight">
                <div className="topbarIconItem">1</div>
                <div className="topbarIconItem">2</div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    );
}
