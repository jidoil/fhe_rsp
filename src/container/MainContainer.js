import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContainer.css';

const MainContainer = () => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/rsp'); // '/target-page'는 이동할 경로입니다.
    };

    return (
        <div className="main-container">
            <div className="icon-circle" onClick={handleIconClick}>
                {/* 아이콘 컴포넌트 혹은 이미지 태그를 여기에 넣으세요. */}
                {/* 예시로 텍스트 아이콘을 사용합니다. */}
                <div className="icon">🎮</div>
            </div>
            <h1 className="title">R.P.S</h1>
            <p className="subtitle">WEB3 Rock paper scissor</p>
        </div>
    );
};

export default MainContainer;
