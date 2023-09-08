import React, { useState } from 'react';

function Emoji() {
    const [emoji, setEmoji] = useState('&#128515;');

    const changeMood = () => {
        if (emoji === '&#128515;') {
            setEmoji('&#128546;');
        } else {
            setEmoji('&#128515;');
        }
    };

    return (
        <div>
            <span role="img" aria-label="emoji"/>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;
