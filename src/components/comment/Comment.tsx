import React, { useEffect,useState,useRef } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, Eye, Plus, Minus, AlertTriangle } from 'lucide-react';
import { CommentDropdown } from './CommentDropdown';
import { Send } from 'lucide-react';

const containsUrls = (text: string): boolean => {
 const urlRegex = /(\b(www\.|https?:\/\/|git:\/\/|ftp:\/\/|file:\/\/|ssh:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)?)/gi;
  return urlRegex.test(text);
};

// Simple Avatar component
const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
      {initials}
    </div>
  );
};

const REPLY_COLORS = [
  '#673842', // dark red
  '#516235', // olive green
  '#354962', // steel blue
  '#355c62',  // teal
  '#645e4e', // warm gray
  '#623549', // plum
];



const getReplyColor = (index: number) => {

  return REPLY_COLORS[index % REPLY_COLORS.length];
};

// Simple CommentInput component
const CommentInput = ({ 
  onSubmit, 
  isReply = false,
  initialContent = ''
}: { 
  onSubmit: (content: string, isSpoiler: boolean) => void;
  isReply?: boolean;
  initialContent?: string;
}) => {
  const [content, setContent] = useState(initialContent);
  const [isSpoiler, setIsSpoiler] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content, isSpoiler);
      // Only clear the content after successful submission
      setContent('');
      setIsSpoiler(false);
    }
  };

  // Focus textarea when component mounts (for reply mode)
  useEffect(() => {
    if (isReply && textareaRef.current) {
      textareaRef.current.focus();
      
      // Calculate the ideal scroll position
      const textareaTop = textareaRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.3; // Position textarea 30% from the top
      
      // Smooth scroll to position the textarea
      window.scrollTo({
        top: window.scrollY + textareaTop - offset,
        behavior: 'smooth'
      });
    }
  }, [isReply]);

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        ref={textareaRef}
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
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>{isReply ? 'Reply' : 'Comment'}</span>
        </button>
      </div>
    </form>
  );
};

// Simple time formatter
const timeAgoFromNow = (timestamp: string) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (isNaN(diffInSeconds)) {
    return 'Invalid date';
  }

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `${interval}${unit.charAt(0)}`;
    }
  }
  return 'now';
};

// Types
interface CommentType {
  reactions: any;
  comment_id: string;
  username: string;
  timestamp: string;
  comment_text: string;
  likes: number;
  dislikes: number;
  depth: number;
  replies: CommentType[];
  attachments: any[];
  isSpoiler?: boolean;
  edited_timestamp?: string;
  containsUrls?: boolean;
  isAuthorOnly?: boolean;
}
interface CommentProps {
  comment: CommentType;
  currentUserId: string | null; 
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onReply: (parentId: string, content: string, isSpoiler: boolean) => void;
  onToggleCollapse: (id: string) => void;
  isAuthorOnly?: boolean;
}


export function Comment({ 
  comment, 
  currentUserId,
  onLike, 
  onDislike, 
  onReply, 
  onToggleCollapse, 
  isAuthorOnly = false,
  replyOrderIndex = 0 
}: CommentProps & { replyOrderIndex?: number }) {
  const getUserInitialLikeStatus = () => {
    const userReaction = comment.reactions.find(
      (      reaction: { user_id: string | null; }) => reaction.user_id === currentUserId
    );
    
    

    if (!userReaction) return 'neutral';
    return userReaction.type === 'like' ? 'liked' : 'disliked';
  };


  const [isReplying, setIsReplying] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const replyInputRef = useRef<HTMLTextAreaElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const [justAddedReply, setJustAddedReply] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const [optimisticLikes, setOptimisticLikes] = useState(comment.likes);
  const [optimisticDislikes, setOptimisticDislikes] = useState(comment.dislikes);
  const [likeStatus, setLikeStatus] = useState<'neutral' | 'liked' | 'disliked'>(
    getUserInitialLikeStatus()
  );
  const [showUrlAlert, setShowUrlAlert] = useState(false);

  useEffect(() => {
    // Check if comment contains URLs and show alert
    if (containsUrls(comment.comment_text)) {
      setShowUrlAlert(true);
      console.log(`Comment ${comment.comment_id} contains URLs and may be restricted`);
    }
  }, [comment.comment_text]);

  // Modify comment visibility logic
  const shouldShowComment = () => {
    // Show comment if:
    // 1. Not author-only, or
    // 2. Current user is the author, or 
    // 3. Current user is an admin/moderator
    return !isAuthorOnly || 
           currentUserId === comment.username || 
           false; // Replace with actual admin check if needed
  };

  
  
  const handleOptimisticLike = async () => {
    switch (likeStatus) {
      case 'neutral':
        // If neutral, add like
        setOptimisticLikes(prev => prev + 1);
        setLikeStatus('liked');
        await onLike(comment.comment_id);
        break;
      
      case 'liked':
        // If already liked, neutralize
        setOptimisticLikes(prev => Math.max(0, prev - 1));
        setLikeStatus('neutral');
        await onLike(comment.comment_id);
        break;
      
      case 'disliked':
        // If previously disliked, reduce dislikes and add like
        setOptimisticDislikes(prev => Math.max(0, prev - 1));
        setOptimisticLikes(prev => prev + 1);
        setLikeStatus('liked');
        await onLike(comment.comment_id);
        break;
    }
  };

  const handleOptimisticDislike = async () => {
    switch (likeStatus) {
      case 'neutral':
        // If neutral, add dislike
        setOptimisticDislikes(prev => prev + 1);
        setLikeStatus('disliked');
        await onDislike(comment.comment_id);
        break;
      
      case 'disliked':
        // If already disliked, neutralize
        setOptimisticDislikes(prev => Math.max(0, prev - 1));
        setLikeStatus('neutral');
        await onDislike(comment.comment_id);
        break;
      
      case 'liked':
        // If previously liked, reduce likes and add dislike
        setOptimisticLikes(prev => Math.max(0, prev - 1));
        setOptimisticDislikes(prev => prev + 1);
        setLikeStatus('disliked');
        await onDislike(comment.comment_id);
        break;
    }
  };
  
  useEffect(() => {
    // After the first render, set isInitialRender to false
    const timer = setTimeout(() => {
      setIsInitialRender(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

 


// Get color based on the reply's position in the thread
const lineColor = getReplyColor(replyOrderIndex);

  

const isNewComment = () => {
    const commentTime = new Date(comment.timestamp).getTime();
    const currentTime = new Date().getTime();
    return (currentTime - commentTime) < 5000; // 5 seconds threshold
  };

  useEffect(() => {
    // Auto-expand parent comments if this is a new comment
    if (isNewComment()) {
      setIsCollapsed(false);
      // Scroll the new comment into view
      commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [comment.timestamp]);

  useEffect(() => {
    if (replyInputRef.current) {
      replyInputRef.current.focus();
      const yOffset = -100; // Adjust this value to control how far from the top the element should be
      const element = replyInputRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [isReplying]);

  
  const handleSubmitReply = async (content: string, isSpoiler: boolean) => {
    try {
      await onReply(comment.comment_id, content, isSpoiler);
      setIsReplying(false);
      setIsCollapsed(false);
      setJustAddedReply(true);
      setReplyContent(''); // Clear content only after successful submission
    } catch (error) {
      console.error('Failed to submit reply:', error);
      // Keep the content in case of error
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    onToggleCollapse(comment.comment_id);
    setIsInitialRender(false);
  };

  const getMostLikedReply = () => {
    if (!comment.replies.length) return null;
    return comment.replies.reduce((prev, current) => 
      (prev.likes > current.likes) ? prev : current
    );
  };

  const getVisibleReplies = () => {
    if (justAddedReply || !isCollapsed) {
      return comment.replies;
    }
    // Always show replies if they're new
    const newReplies = comment.replies.filter(reply => isNewComment.call({ timestamp: reply.timestamp }));
    
    // For depth 0, show new replies + most liked reply when collapsed

    if (comment.depth === 0 && isCollapsed && isInitialRender) {
      const mostLikedReply = getMostLikedReply();
      return [...newReplies, ...(mostLikedReply && !newReplies.includes(mostLikedReply) ? [mostLikedReply] : [])];
    }
    
    // For depth >= 1, show all replies if expanded or if there are new replies
    return isCollapsed && newReplies.length === 0 ? [] : comment.replies;
  };

  useEffect(() => {
    if (justAddedReply) {
      const timer = setTimeout(() => {
        setJustAddedReply(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [justAddedReply]);

  const visibleReplies = getVisibleReplies();
  const hiddenRepliesCount = comment.replies.length - visibleReplies.length;
  const handleReport = (type: string) => {
    alert(`Reported as ${type}`);
  };
  const ReplyInput = () => {
    const [content, setContent] = useState('');
    const [isSpoiler, setIsSpoiler] = useState(false);
    const replyInputRef = useRef<HTMLTextAreaElement>(null);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (content.trim()) {
        handleSubmitReply(content, isSpoiler);
        setContent('');
        setIsSpoiler(false);
      }
    };
    
    return (
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            ref={replyInputRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Write a reply..."
            rows={3}
          />
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={isSpoiler}
                onChange={(e) => setIsSpoiler(e.target.checked)}
                className="rounded border-gray-700"
              />
              <span>Mark as spoiler</span>
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Reply
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      {shouldShowComment() && (
    <div className="group relative mb-8" ref={commentRef}>
    {comment.replies.length > 0 && (
      <div className="absolute left-0 top-8 bottom-0">
        <div 
          className="absolute left-0 w-[16px] h-[16px] hover:border-blue-400 transition-colors" 
          style={{ 
            bottom: '-8px', 
            borderBottomLeftRadius: '12px',
            borderBottom: `5px solid ${lineColor}`,
            borderLeft: `5px solid ${lineColor}`
          }}
        >
          <button 
            onClick={toggleCollapse} 
            className="absolute left-12 flex items-center justify-center transition-colors"
          >
            {isCollapsed && hiddenRepliesCount > 0 ? (
              <div className="flex flex-row gap-3 w-48 items-center">
                <div className="flex justify-center items-center w-6 h-6 rounded-full hover:border-gray-600 hover:text-gray-600 border border-white">
                  <Plus className="w-3 h-3 text-white" />
                </div>
                <span>{hiddenRepliesCount} more replies</span>
              </div>
            ) : (
              <div className="relative -left-[34px] top-[4px] items-center">
                <div className="flex justify-center items-center w-6 h-6 rounded-full hover:border-gray-600 hover:text-gray-600 border border-white">
                  <Minus className="w-3 h-3 text-white fill-white" />
                </div>
              </div>
            )}
          </button>
        </div>
        <div 
          className="absolute left-0 w-[5px] hover:bg-blue-500 cursor-pointer transition-colors group"
          style={{ 
            top: '24px', 
            bottom: '0', 
            borderRadius: '0 0 0 8px',
            backgroundColor: lineColor
          }}
        >
          <div 
            className="absolute left-[-10px] right-[-10px] top-0 bottom-0" 
            onClick={toggleCollapse}
          />
        </div>
        </div>
      )}
      <div className="py-2">
      
           

        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0">
            <Avatar name={comment.username} />
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-semibold text-gray-200">{comment.username}</span>
              <span className="text-gray-500">{timeAgoFromNow(comment?.timestamp)}</span>
              {comment.edited_timestamp && (
                <span className="text-gray-500">(edited {timeAgoFromNow(comment.edited_timestamp)})</span>
              )}
            </div>

            <div className={`mt-1 ${comment.isSpoiler && !showSpoiler ? 'blur-md' : ''}`}>
              <div className={`text-gray-300 text-sm ${comment.isSpoiler && !showSpoiler ? ' cursor-pointer' : ''}`}  onClick={() => setShowSpoiler(true)}>{comment.comment_text}</div>
             
              {comment.attachments.length > 0 && (
                <div className="mt-2 space-y-2">
                  {comment.attachments.map((attachment, index) => (
                    <div key={index} className="text-blue-400 hover:text-blue-300">
                      {attachment.toString()}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {comment.isSpoiler && !showSpoiler && (
              <button
                onClick={() => setShowSpoiler(true)}
                className="mt-2 flex items-center space-x-1 text-blue-400 hover:text-blue-300"
              >
                <Eye className="w-4 h-4" />
                <span>Show Spoiler</span>
              </button>
            )}

            <div className="flex items-center space-x-4 my-2 mb-2 ">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setIsReplying(!isReplying)}
                        className="flex items-center space-x-1 text-gray-400 hover:text-gray-200"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">Reply</span>
                      </button>

                      <button
                        onClick={handleOptimisticLike}
                        className={`flex items-center space-x-1 ${
                          likeStatus === 'liked' 
                            ? 'text-blue-500' 
                            : 'text-gray-400 hover:text-blue-400'
                        }`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{optimisticLikes}</span>
                      </button>
                      <button
                        onClick={handleOptimisticDislike}
                        className={`flex items-center space-x-1 ${
                          likeStatus === 'disliked' 
                            ? 'text-red-500' 
                            : 'text-gray-400 hover:text-red-400'
                        }`}
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span className="text-sm">{optimisticDislikes}</span>
                      </button>
                    </div>

                    <CommentDropdown onReport={handleReport} />
                  </div>

                        {isReplying && (
                <CommentInput
                  onSubmit={handleSubmitReply}
                  isReply={true}
                  initialContent={replyContent}
                />
              )}
              

              {visibleReplies.map((reply) => (
                
                <Comment
                  key={reply.comment_id}
                  comment={reply}
                  onLike={onLike}
                  onDislike={onDislike}
                  onReply={onReply}
                  onToggleCollapse={onToggleCollapse}
                  replyOrderIndex={replyOrderIndex + 1} 
                  currentUserId={null}
                  isAuthorOnly={comment.isAuthorOnly}
                            />
                  
              ))}
          </div>
        </div>
      </div>
    </div>
     )}
    </>
  );
}

export default Comment;