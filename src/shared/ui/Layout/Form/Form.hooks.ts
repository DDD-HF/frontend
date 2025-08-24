
import { useState, useCallback } from 'react';

export const useFlashAnimation = () => {
    const [isFlashing, setIsFlashing] = useState(false);

    const triggerFlash = useCallback(() => {
        console.log('🔥 Flash triggered!');
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 500);
    }, []);

    return { isFlashing, triggerFlash };
};