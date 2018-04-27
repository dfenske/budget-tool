import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <div className="title">The Budget Tool</div>
            <a href="" title="New Budget"><i className="fas fa-plus-circle"></i></a>
            {/* this is log in/sign up/go to your account */}
            <a href="" title="Account"><i className="far fa-user"></i></a>
            <a href="" title="Settings"><i className="fas fa-cog"></i></a>
        </div>
    )
} 