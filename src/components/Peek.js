import React from 'react';
import Character from './Character';

// A character that slides up from behind the card it is placed before.
// The host must be position:relative and its card must sit above (z-index: 1).
export default function Peek({ index = 0, shown, side = 'right', offset = 40, delay = 400, size = 92 }) {
    return (
        <div
            className={`peek ${shown ? 'is-up' : ''}`}
            style={{ [side]: offset, transitionDelay: shown ? `${delay}ms` : '0ms' }}
        >
            <Character person={index} size={size} />
        </div>
    );
}
