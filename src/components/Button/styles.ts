import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;

    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:gover{
        opacity: .7;
    }
`