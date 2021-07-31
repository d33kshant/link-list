import React from 'react'
import styled from 'styled-components'

export default function Link({ link, title, color, children }) {

    return (
        <SocialLink onClick={()=>{window.open(link)}} style={{background: color+"34", color: color}}>
            {children}
            {title}
        </SocialLink>
    )
}

const SocialLink = styled.a`
    display: block;
    padding: 12px 0;
    font-size: 18px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 8px;
    border: none;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
`