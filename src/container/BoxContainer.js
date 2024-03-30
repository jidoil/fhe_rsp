import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../components/Box'; // 적절한 경로로 Box 컴포넌트를 임포트하세요.

function BoxContainer() {
    const navigate = useNavigate();
    const [selectedBox, setSelectedBox] = useState(null); // 선택된 Box를 추적하는 상태
    const [hoveredBox, setHoveredBox] = useState(null);

    const handleBoxClick = (letter) => {
        setSelectedBox(letter); // 플레이어의 선택을 상태에 저장
        localStorage.setItem('playerChoice', letter); // 로컬 스토리지에 플레이어의 선택 저장
        navigate('/result'); // 결과 페이지로 이동
    };


    const handleMouseEnter = (letter) => {
        setHoveredBox(letter);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };

    const boxes = ['R', 'S', 'P'].map((letter) => (
        <Box
            key={letter}
            letter={letter}
            isSelected={selectedBox === letter}
            isHovered={hoveredBox === letter}
            onClick={handleBoxClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    ));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            {selectedBox ? boxes.filter(box => box.key === selectedBox) : boxes}
        </div>
    );
}

export default BoxContainer;