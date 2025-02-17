import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';

interface DropdownProps {
  onReport: (type: string) => void;
}

export function CommentDropdown({ onReport }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const reportOptions = [
    { label: 'Report as spoiler', value: 'spoiler' },
    { label: 'Report as inappropriate', value: 'inappropriate' },
    { label: 'Report as spam', value: 'spam' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-gray-700"
      >
        <MoreHorizontal size={16} />
      </button>
      
      {isOpen && (
        <div className="absolute lg:left-0 md:left-0 sm:left-0 right-[10px] mt-2 w-48 bg-white rounded-[9px] shadow-lg z-50 border border-gray-200  ">
          <div className="py-1">
            {reportOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onReport(option.value);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}