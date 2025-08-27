
import { useState, useCallback } from 'react';

export const useFlashAnimation = () => {
    const [isFlashing, setIsFlashing] = useState(false);

    const triggerFlash = useCallback(() => {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 500);
    }, []);

    return { isFlashing, triggerFlash };
};