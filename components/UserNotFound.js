import React from 'react'
import styled from 'styled-components'

export default function UserNotFound() {
    return (
        <Container>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Page not found</ErrorMessage>
            <Create href="/">Create your page</Create>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ErrorCode = styled.h3`
    margin: 0;
    font-weight: 500;
    font-size: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ErrorMessage = styled.h3`
    margin: 0;
    font-weight: 400;
    font-size: 24px;
    color: darkgray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Create = styled.a`
    margin-top: 24px;
    color: white;
    padding: 6px 12px;
    color: #4285F4;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    :hover{
        text-decoration: underline;
    }
`