import React from 'react'
import styled from 'styled-components'

export default function Loading() {
    return (
        <Container>
            <Spinner>
                <path d="M12 21a9 9 0 1 0-9-9" fill="none" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round"></path>
            </Spinner>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spinner = styled.svg`
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: translateZ(0) rotate(0deg);
        }

        to {
            transform: translateZ(0) rotate(360deg);
        }
    }
`