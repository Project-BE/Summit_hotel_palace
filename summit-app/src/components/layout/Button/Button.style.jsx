import styled from 'styled-components'

export const Button = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--black-color);
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    background-color: #fdc298;
    width: 327px;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.459);

    @media (min-width: 1000) {
        margin-bottom: 1rem;
    }
`