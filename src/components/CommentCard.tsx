import React from 'react';

interface CommentCardProps {
  episodeId: string;
  comment: string;
  showTitle: string;
}

const CommentCard = ({ episodeId, comment, showTitle }: CommentCardProps) => {
  return (
    <div className="bg-[#141421] p-4 rounded-lg min-w-[400px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-white"></div>
        <span className="text-gray-400 text-sm">S15E{episodeId}</span>
      </div>
      <p className="text-gray-200 text-sm mb-2">{comment}</p>
      <p className="text-gray-400 text-xs">{showTitle}</p>
    </div>
  );
};

export default CommentCard;