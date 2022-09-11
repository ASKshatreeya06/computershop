import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header>
        <nav>
            
            <div id="header">
                <img src="./Logo.png" alt=""/>
                <ul>
                    <li>Home</li>
                    <li>Envornment</li>
                    <li>Characters</li>
                    <li>Webtoons</li>
                    <li>Reference</li>
                </ul>
               
            </div>
            <form>
                <button class="btn" type="button" alt=""><a href="/">My Account</a></button>
                <button class="btn" type="button" alt><a href="/">create</a></button>
                <button class="btn" type="button" alt><a href="/">Log in</a></button>
            </form>
        </nav>
    </header>
    )
}

export default Header
