import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormPros {
    hasError: boolean;
}

export const Title = styled.h1`
    max-width: 440px;
    font-size: 48px;
    color: #3a3a3a;

    margin-top: 80px;
`;

export const Form = styled.form<FormPros>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 72px;
        padding: 0 24px;
        border: none;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: none;

        ${props =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
            font-size: 18px;
        }
    }

    button {
        width: 210px;
        height: 72px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: none;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 146px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 84px;
            height: 84px;
            border-radius: 50%;
        }

        div {
            margin: 0 24px;
            flex: 1;

            strong {
                font-size: 24px;
                color: #3d3d4d;
            }

            p {
                color: #a8a8b3;
                font-size: 18px;
            }
        }

        svg {
            margin-left: auto;
            color: #c9c9d4;
        }
    }
`;
