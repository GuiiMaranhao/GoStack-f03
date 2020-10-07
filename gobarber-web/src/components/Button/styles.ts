import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #ff9000;
    border-radius: 10px;
    height: 56px;
    border: 2px solid #232129;
    padding: 0 16px;
    width: 100%;
    margin-top: 24px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#ff9000')};
    }
`;