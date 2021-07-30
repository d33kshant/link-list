import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

export default function Link({ href, title, color, icon }) {

    const router = useRouter()

    return (
        <SocialLink onClick={()=>{router.push(href)}} style={{background: color+"34", color: color}}>
            <img height="20" width="20" src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${icon}.svg`} />
            {title}
        </SocialLink>
    )
}

const SocialLink = styled.button`
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
`