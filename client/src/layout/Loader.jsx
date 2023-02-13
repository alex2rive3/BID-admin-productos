import styled from "styled-components";

const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    &::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        left: 20px;
        top: 31px;
        border: 10px solid transparent;
        border-right-color: #fff;
        transform: rotate(-40deg);
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
export { Loader };
