import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="#">
                    <img src="sagara.png" />
                </a>
                <button>Login</button>
            </div>
        )
    }
}

export default Header;