import React from 'react';
import './RetryButton.css'; // 스타일을 별도의 CSS 파일로 분리

import './RetryButton.css';

function RetryButton() {
    // onClick 핸들러를 구현하세요. 예를 들어, 게임을 재시작하는 함수 등이 될 수 있습니다.
    const handleClick = () => {
        console.log('Retry button clicked!');
        // 여기에 게임을 재시작하거나 필요한 로직을 추가합니다.
    };

    return (
        <button className="retry-button" onClick={handleClick}>
            Retry
        </button>
    );
}

export default RetryButton;
