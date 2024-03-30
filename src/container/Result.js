import React, { useState, useEffect } from 'react';
import Box from '../components/Box';
import RetryButton from "../components/RetryButton";
import {useNavigate} from "react-router-dom";

function ResultPage() {
    const navigate = useNavigate();
    const handleRetryClick = () => {
        navigate('/rsp'); // '/target-page'는 이동할 경로입니다.
    };
    const [opponentChoice, setOpponentChoice] = useState(null);
    const [playerChoice, setPlayerChoice] = useState(localStorage.getItem('playerChoice'));
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setOpponentChoice('Rock');
            setWinner('Player');
        }, 2000);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', // Changed to 'column' to stack children vertically
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '0 50px'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Your Choice</h2>
                <Box letter={playerChoice || 'Your choice...'} onClick={() => { /* handle click */ }}
                />
                {winner === 'Player' && <div style={{ marginTop: '10px' }}>Winner</div>}
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}> {/* Added margin for spacing */}
                <h2>Opponent's Choice</h2>
                <Box letter={opponentChoice || 'Waiting for opponent...'} onClick={() => { /* handle click */ }} />
                {winner === 'Opponent' && <div style={{ marginTop: '10px' }}>Winner</div>}
            </div>

            {/* RetryButton positioned at the bottom */}
            <div style={{ marginTop: '20px' }} onClick={handleRetryClick}> {/* Added margin for spacing */}
                <RetryButton
                />
            </div>
        </div>
    );
}

export default ResultPage;
