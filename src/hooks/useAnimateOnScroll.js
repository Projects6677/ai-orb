// src/hooks/useAnimateOnScroll.js
// A custom React hook to trigger animations when an element scrolls into view.
// It uses the Intersection Observer API for performance.

import { useEffect, useRef } from 'react';

export const useAnimateOnScroll = (options) => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        }, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return ref;
};
