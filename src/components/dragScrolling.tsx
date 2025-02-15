"use client"
import { useRef, useState, useEffect } from 'react';

interface DragScrollProps {
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}

export const useDragScroll = ({ onScrollStart, onScrollEnd }: DragScrollProps = {}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    onScrollStart?.();
  };

  const stopDragging = () => {
    setIsDragging(false);
    onScrollEnd?.();
  };

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.clientX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const preventDefaultDrag = (e: Event) => e.preventDefault();
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('dragstart', preventDefaultDrag);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('dragstart', preventDefaultDrag);
      }
    };
  }, []);

  return {
    containerRef,
    isDragging,
    dragHandlers: {
      onMouseDown: startDragging,
      onMouseLeave: stopDragging,
      onMouseUp: stopDragging,
      onMouseMove: drag,
    },
  };
};