import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <Header classname='header'>
            <div className='container'>
                <div className="logo">
                    <Link href='/'>app</Link>
                </div>
                <div className="links">
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>Our Team</Link>
                    <Link href='/code/repos'>Code</Link>

                </div>
            </div>
        </Header>
    )
}

export default Header