"use client";
import { useState } from 'react';
import clsx from 'clsx';

const filters = [
  { name: 'All', count: 36 },
  { name: 'Movies', color: 'bg-pink-500' },
  { name: 'Shows', count: 13, color: 'bg-yellow-500' },
  { name: 'Anime', color: 'bg-purple-500' },
  { name: 'Drama', color: 'bg-green-500' }
];

export default function ContentFilters() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex items-center space-x-4">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeFilter === filter.name
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white'
          )}
        >
          <div className="flex items-center space-x-2">
            {filter.color && (
              <div className={clsx('w-2 h-2 rounded-full', filter.color)} />
            )}
            <span>{filter.name}</span>
            {filter.count && <span>({filter.count})</span>}
          </div>
        </button>
      ))}
    </div>
  );
}