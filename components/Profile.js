import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export default function Profile({user}) {
    return (
        <div style={{width: "100%", textAlign: "center", paddingTop: 36}}>
            <ProfileImage src={`${user.photoURL}`} width={96} height={96} />
            <Username>
                <h3 style={{margin: 0}}>{user.displayName}</h3>
                <svg height="20" viewBox="0 0 24 24" width="20" fill="#34A853"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z"/></g></svg>
            </Username>
			{user.email}
        </div>
    )
}

const ProfileImage = styled(Image)`
    border-radius: 50%;
`

const Username = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`