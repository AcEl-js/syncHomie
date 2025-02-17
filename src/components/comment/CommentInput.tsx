import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface CommentInputProps {
  onSubmit: (content: string, isSpoiler: boolean) => void;
  isReply?: boolean;
}

export function CommentInput({ onSubmit, isReply = false }: CommentInputProps) {
  const [content, setContent] = useState('');
  const [isSpoiler, setIsSpoiler] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content, isSpoiler);
      setContent('');
      setIsSpoiler(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none border border-gray-600"
        placeholder={isReply ? "What are your thoughts on this comment?" : "What are your thoughts?"}
        rows={4}
      />
      <div className="mt-2 flex items-center justify-between">
        <label className="flex items-center space-x-2 text-gray-300">
          <input
            type="checkbox"
            checked={isSpoiler}
            onChange={(e) => setIsSpoiler(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
          />
          <span>Mark as spoiler</span>
        </label>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>{isReply ? 'Reply' : 'Comment'}</span>
        </button>
      </div>
    </div>
  );
}