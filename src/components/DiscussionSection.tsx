import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Comment } from './comment/Comment';
import { CommentInput } from './comment/CommentInput';
import type { Comment as CommentType } from '../types';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Check, MessageSquare, ThumbsUp, ThumbsDown, Eye, Filter, TrendingUp, Clock, MessageCircle, Plus } from "lucide-react";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CommunityRulesPopup from './comment/CommunityRulesPopup';

const API_BASE_URL = "https://deploy-two-jade.vercel.app";

// Reuse the existing auth functions
async function handleCheckAuth(router: any): Promise<{ isAuthenticated: boolean; username: string | null, userId: string | null }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/check-auth`, { withCredentials: true });
    return { isAuthenticated: true, username: response.data.username, userId: response.data.userId };
  } catch (error) {
    router.push('/login');
    return { isAuthenticated: false, username: null, userId: null };
  }
}

async function handleCheckUsername(router: any): Promise<{ isAuthenticated: boolean; username: string | null, userId: string | null }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/check-auth`, { withCredentials: true });
    return { isAuthenticated: true, username: response.data.username, userId: response.data.userId };
  } catch (error) {
    return { isAuthenticated: false, username: null, userId: null };
  }
}

// Reuse the existing comment service
const commentService = {
  async createComment(
    comment_text: string, 
    post_id: string, 
    parent_comment_id?: string | null, 
    isSpoiler: boolean = false
  ): Promise<CommentType> {
    try {
      const response = await axios.post(`${API_BASE_URL}/comments`, {
        comment_text,
        post_id,
        parent_comment_id,
        isSpoiler
      }, { withCredentials: true });
      
      return response.data.comment;
    } catch (error) {
      console.error('Failed to create comment', error);
      throw error;
    }
  },

  async getComments(post_id: string, userId: string | null): Promise<CommentType[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/comments/${post_id}`, {
        headers: { Authorization: `Bearer ${userId}` },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch comments', error);
      throw error;
    }
  },

  async likeComment(comment_id: string): Promise<{ likes: number, dislikes: number, userInteraction: 'like' | 'none' }> {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/comments/${comment_id}/like`,
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to like comment', error);
      throw error;
    }
  },

  async dislikeComment(comment_id: string): Promise<{ likes: number, dislikes: number, userInteraction: 'dislike' | 'none' }> {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/comments/${comment_id}/dislike`,
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to dislike comment', error);
      throw error;
    }
  },
};

const SORT_OPTIONS = [
  { value: 'hot', label: 'Hot', icon: TrendingUp },
  { value: 'new', label: 'New', icon: Clock },
  { value: 'top', label: 'Top', icon: ThumbsUp },
  { value: 'comments', label: 'Comments', icon: MessageCircle }
];

const timeAgoFromNow = (timestamp: string) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (isNaN(diffInSeconds)) return 'Invalid date';

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
      return `${interval}${unit.charAt(0)} ago`;
    }
  }
  return 'just now';
};

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

const EpisodeSelector = ({ selectedEpisode, onEpisodeChange }: {
  selectedEpisode: number | null;
  onEpisodeChange: (episodeId: number | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const episodes = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-between hover:bg-gray-600 transition-colors"
        >
          <span className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {selectedEpisode 
              ? `Episode ${selectedEpisode} Comments`
              : "General Discussion"
            }
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg border border-gray-600 max-h-60 overflow-y-auto z-10">
            <button
              onClick={() => {
                onEpisodeChange(null);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors ${
                selectedEpisode === null ? 'bg-gray-600 text-blue-400' : 'text-gray-300'
              }`}
            >
              General Discussion
            </button>
            {episodes.map(episode => (
              <button
                key={episode}
                onClick={() => {
                  onEpisodeChange(episode);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors ${
                  selectedEpisode === episode ? 'bg-gray-600 text-blue-400' : 'text-white'
                }`}
              >
                Episode {episode} Comments
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DiscussionPost = ({ 
  comment, 
  currentUserId,
  onLike, 
  onDislike, 
  onReply, 
  onToggleCollapse,
  onOpenPost 
}: {
  comment: CommentType;
  currentUserId: string | null;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onReply: (parentId: string, content: string, isSpoiler: boolean) => void;
  onToggleCollapse: (id: string) => void;
  onOpenPost: (comment: CommentType) => void;
}) => {
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [optimisticLikes, setOptimisticLikes] = useState(comment.likes);
  const [optimisticDislikes, setOptimisticDislikes] = useState(comment.dislikes);
  const [likeStatus, setLikeStatus] = useState<'neutral' | 'liked' | 'disliked'>('neutral');

  const getUserInitialLikeStatus = () => {
    const userReaction = comment.reactions?.find(
      (reaction: { user_id: string | null; }) => reaction.user_id === currentUserId
    );
    
    if (!userReaction) return 'neutral';
    return userReaction.type === 'like' ? 'liked' : 'disliked';
  };

  useEffect(() => {
    setLikeStatus(getUserInitialLikeStatus());
  }, [comment.reactions, currentUserId]);

  const handleOptimisticLike = async () => {
    switch (likeStatus) {
      case 'neutral':
        setOptimisticLikes(prev => prev + 1);
        setLikeStatus('liked');
        break;
      case 'liked':
        setOptimisticLikes(prev => Math.max(0, prev - 1));
        setLikeStatus('neutral');
        break;
      case 'disliked':
        setOptimisticDislikes(prev => Math.max(0, prev - 1));
        setOptimisticLikes(prev => prev + 1);
        setLikeStatus('liked');
        break;
    }
    await onLike(comment.comment_id);
  };

  const handleOptimisticDislike = async () => {
    switch (likeStatus) {
      case 'neutral':
        setOptimisticDislikes(prev => prev + 1);
        setLikeStatus('disliked');
        break;
      case 'disliked':
        setOptimisticDislikes(prev => Math.max(0, prev - 1));
        setLikeStatus('neutral');
        break;
      case 'liked':
        setOptimisticLikes(prev => Math.max(0, prev - 1));
        setOptimisticDislikes(prev => prev + 1);
        setLikeStatus('disliked');
        break;
    }
    await onDislike(comment.comment_id);
  };

  const countTotalComments = (commentList: CommentType[]): number => {
    return commentList.reduce((total, comment) => {
      return total + 1 + countTotalComments(comment.replies || []);
    }, 0);
  };

  const replyCount = countTotalComments(comment.replies || []);
  const truncatedText = comment.comment_text.length > 300 
    ? comment.comment_text.substring(0, 300) + '...' 
    : comment.comment_text;

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 mb-4 overflow-hidden hover:border-gray-600 transition-colors">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Avatar name={comment.username} />
          <span className="text-gray-300 font-medium">u/{comment.username}</span>
          <span className="text-gray-500 text-sm">
            • {timeAgoFromNow(comment.timestamp)}
          </span>
          {comment.isSpoiler && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
              SPOILER
            </span>
          )}
        </div>

        <div 
          className={`mb-4 cursor-pointer ${comment.isSpoiler && !showSpoiler ? 'blur-sm' : ''}`}
          onClick={() => comment.isSpoiler ? setShowSpoiler(true) : onOpenPost(comment)}
        >
          <div className="text-gray-300 text-base leading-relaxed">
            {truncatedText}
          </div>
        </div>

        {comment.isSpoiler && !showSpoiler && (
          <button
            onClick={() => setShowSpoiler(true)}
            className="mb-4 flex items-center space-x-1 text-blue-400 hover:text-blue-300"
          >
            <Eye className="w-4 h-4" />
            <span>Show Spoiler</span>
          </button>
        )}

        <div className="flex items-center space-x-6 text-gray-400 text-sm">
          <button
            onClick={handleOptimisticLike}
            className={`flex items-center space-x-1 hover:text-blue-400 transition-colors ${
              likeStatus === 'liked' ? 'text-blue-500' : ''
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{optimisticLikes}</span>
          </button>
          
          <button
            onClick={handleOptimisticDislike}
            className={`flex items-center space-x-1 hover:text-red-400 transition-colors ${
              likeStatus === 'disliked' ? 'text-red-500' : ''
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            <span>{optimisticDislikes}</span>
          </button>
          
          <button
            onClick={() => onOpenPost(comment)}
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{replyCount} comments</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CreateDiscussionForm = ({ 
  onSubmit, 
  selectedEpisode 
}: { 
  onSubmit: (content: string, isSpoiler: boolean) => void;
  selectedEpisode: number | null;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');
  const [isSpoiler, setIsSpoiler] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content.trim(), isSpoiler);
      setContent('');
      setIsSpoiler(false);
      setIsExpanded(false);
    }
  };

  const placeholderText = selectedEpisode 
    ? `Start a discussion about Episode ${selectedEpisode}...`
    : 'Start a new discussion...';

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 mb-6">
      <div className="p-4">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full text-left text-gray-400 hover:text-white bg-gray-700 rounded-lg p-3 border border-gray-600 hover:border-gray-500 transition-colors"
          >
            {placeholderText}
          </button>
        ) : (
          <div className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              rows={6}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={isSpoiler}
                  onChange={(e) => setIsSpoiler(e.target.checked)}
                  className="rounded"
                />
                <span>Mark as spoiler</span>
              </label>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Post Discussion
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FullDiscussionView = ({ 
  comment, 
  currentUserId, 
  onLike, 
  onDislike, 
  onReply, 
  onToggleCollapse, 
  onBack 
}: {
  comment: CommentType;
  currentUserId: string | null;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onReply: (parentId: string, content: string, isSpoiler: boolean) => void;
  onToggleCollapse: (id: string) => void;
  onBack: () => void;
}) => {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
      >
        <span>← Back to discussions</span>
      </button>
      
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <Comment
          comment={comment}
          currentUserId={currentUserId}
          onLike={onLike}
          onDislike={onDislike}
          onReply={onReply}
          onToggleCollapse={onToggleCollapse}
        />
      </div>
    </div>
  );
};

export default function DiscussionSection() {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [discussionComments, setDiscussionComments] = useState<CommentType[]>([]);
  const [sortBy, setSortBy] = useState('hot');
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [showCommunityRulesPopup, setShowCommunityRulesPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState<CommentType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const { isAuthenticated, username, userId } = await handleCheckUsername(router);
      setAuthenticated(isAuthenticated);
      setUserName(username);
      setUserId(userId);
    };
    fetchAuthStatus();
  }, [router]);

  useEffect(() => {
    const fetchDiscussions = async () => {
      setIsLoading(true);
      try {
        const { userId } = await handleCheckUsername(router);
        const post_id = selectedEpisode ? `Episode ${selectedEpisode}` : 'General Discussion';
        const fetchedComments = await commentService.getComments(post_id, userId);
        
        // Filter only top-level comments (discussions)
        const discussions = fetchedComments.filter(comment => !comment.parent_comment_id);
        setDiscussionComments(discussions);
      } catch (error) {
        console.error('Failed to fetch discussions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiscussions();
  }, [selectedEpisode, router]);

  const checkCommunityRules = async (userId: string | null) => {
    if (!userId) return false;
    
    try {
      const response = await axios.get(`${API_BASE_URL}/check-community-rules/${userId}`, { withCredentials: true });
      return response.data.agreedToCommunityRules;
    } catch (error) {
      console.error('Failed to check community rules', error);
      return false;
    }
  };

  const handleCreateDiscussion = async (content: string, isSpoiler: boolean) => {
    const { isAuthenticated } = await handleCheckAuth(router);
    if (!isAuthenticated) return;

    const agreedToCommunityRules = await checkCommunityRules(userId);
    if (!agreedToCommunityRules) {
      setShowCommunityRulesPopup(true);
      return;
    }

    // Create optimistic discussion post immediately
    const optimisticComment: CommentType = {
      comment_id: `temp_${Date.now()}`, // Temporary ID
      username: userName || 'Anonymous',
      user_id: userId || '',
      post_id: selectedEpisode ? `Episode ${selectedEpisode}` : 'General Discussion',
      comment_text: content,
      timestamp: new Date().toISOString(),
      parent_comment_id: null,
      likes: 0,
      dislikes: 0,
      depth: 0,
      attachments: [],
      reactions: [],
      replies: [],
      isSpoiler,
      containsUrls: false,
      status: 'active'
    };

    // Add immediately to UI
    setDiscussionComments(prevComments => [optimisticComment, ...prevComments]);

    // Send to server in background
    try {
      const post_id = selectedEpisode ? `Episode ${selectedEpisode}` : 'General Discussion';
      const serverComment = await commentService.createComment(content, post_id, null, isSpoiler);
      
      // Replace the optimistic comment with the server response
      setDiscussionComments(prevComments => 
        prevComments.map(comment => 
          comment.comment_id === optimisticComment.comment_id ? serverComment : comment
        )
      );

      if (serverComment.status === 'flagged') {
        alert('Your post contains a URL and has been flagged for review. It will only be visible to you.');
      }
    } catch (error) {
      console.error('Failed to create discussion:', error);
      // Remove the optimistic comment if server request failed
      setDiscussionComments(prevComments => 
        prevComments.filter(comment => comment.comment_id !== optimisticComment.comment_id)
      );
      alert('Failed to post discussion. Please try again.');
    }
  };

  const handleLike = async (commentId: string) => {
    const { isAuthenticated } = await handleCheckAuth(router);
    if (!isAuthenticated) return;
    
    try {
      const response = await commentService.likeComment(commentId);
      
      const updateComments = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.comment_id === commentId) {
            return {
              ...comment,
              likes: response.likes,
              dislikes: response.dislikes,
              userInteraction: response.userInteraction
            };
          }
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComments(comment.replies)
            };
          }
          return comment;
        });
      };

      setDiscussionComments(updateComments(discussionComments));
      
      if (selectedPost && selectedPost.comment_id === commentId) {
        setSelectedPost({
          ...selectedPost,
          likes: response.likes,
          dislikes: response.dislikes,
          userInteraction: response.userInteraction
        });
      }
    } catch (error) {
      console.error('Failed to like comment:', error);
    }
  };

  const handleDislike = async (commentId: string) => {
    const { isAuthenticated } = await handleCheckAuth(router);
    if (!isAuthenticated) return;
    
    try {
      const response = await commentService.dislikeComment(commentId);
      
      const updateComments = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.comment_id === commentId) {
            return {
              ...comment,
              likes: response.likes,
              dislikes: response.dislikes,
              userInteraction: response.userInteraction
            };
          }
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComments(comment.replies)
            };
          }
          return comment;
        });
      };

      setDiscussionComments(updateComments(discussionComments));
      
      if (selectedPost && selectedPost.comment_id === commentId) {
        setSelectedPost({
          ...selectedPost,
          likes: response.likes,
          dislikes: response.dislikes,
          userInteraction: response.userInteraction
        });
      }
    } catch (error) {
      console.error('Failed to dislike comment:', error);
    }
  };

  const handleReply = async (parentId: string, content: string, isSpoiler: boolean) => {
    const { isAuthenticated } = await handleCheckAuth(router);
    if (!isAuthenticated) return;

    const agreedToCommunityRules = await checkCommunityRules(userId);
    if (!agreedToCommunityRules) {
      setShowCommunityRulesPopup(true);
      return;
    }

    // Create optimistic reply immediately
    const optimisticReply: CommentType = {
      comment_id: `temp_${Date.now()}`,
      username: userName || 'Anonymous',
      user_id: userId || '',
      post_id: selectedEpisode ? `Episode ${selectedEpisode}` : 'General Discussion',
      comment_text: content,
      timestamp: new Date().toISOString(),
      parent_comment_id: parentId,
      likes: 0,
      dislikes: 0,
      depth: 0, // This will be calculated by the Comment component
      attachments: [],
      reactions: [],
      replies: [],
      isSpoiler,
      containsUrls: false,
      status: 'active'
    };

    // Add reply immediately to UI
    const addReplyToComments = (comments: CommentType[]): CommentType[] => {
      return comments.map(comment => {
        if (comment.comment_id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), optimisticReply]
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComments(comment.replies)
          };
        }
        return comment;
      });
    };

    setDiscussionComments(prevComments => addReplyToComments(prevComments));

    // Update selected post if viewing full discussion
    if (selectedPost) {
      const addReplyToSelectedPost = (comment: CommentType): CommentType => {
        if (comment.comment_id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), optimisticReply]
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: comment.replies.map(reply => addReplyToSelectedPost(reply))
          };
        }
        return comment;
      };

      setSelectedPost(prevPost => prevPost ? addReplyToSelectedPost(prevPost) : null);
    }

    // Send to server in background
    try {
      const post_id = selectedEpisode ? `Episode ${selectedEpisode}` : 'General Discussion';
      const serverReply = await commentService.createComment(content, post_id, parentId, isSpoiler);

      // Replace optimistic reply with server response
      const updateWithServerReply = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: comment.replies.map(reply => 
                reply.comment_id === optimisticReply.comment_id ? serverReply : reply
              ).length > 0 ? updateWithServerReply([...comment.replies]).flat() : comment.replies
            };
          }
          return comment;
        });
      };

      setDiscussionComments(prevComments => updateWithServerReply(prevComments));

      if (selectedPost) {
        const updateSelectedPostWithServer = (comment: CommentType): CommentType => {
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: comment.replies.map(reply => 
                reply.comment_id === optimisticReply.comment_id ? serverReply : updateSelectedPostWithServer(reply)
              )
            };
          }
          return comment;
        };

        setSelectedPost(prevPost => prevPost ? updateSelectedPostWithServer(prevPost) : null);
      }

      if (serverReply.status === 'flagged') {
        alert('Your reply contains a URL and has been flagged for review. It will only be visible to you.');
      }
    } catch (error) {
      console.error('Failed to create reply:', error);
      
      // Remove optimistic reply if server request failed
      const removeOptimisticReply = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: comment.replies.filter(reply => reply.comment_id !== optimisticReply.comment_id)
            };
          }
          return comment;
        });
      };

      setDiscussionComments(prevComments => removeOptimisticReply(prevComments));
      
      if (selectedPost) {
        const removeFromSelectedPost = (comment: CommentType): CommentType => {
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: comment.replies.filter(reply => reply.comment_id !== optimisticReply.comment_id)
                .map(reply => removeFromSelectedPost(reply))
            };
          }
          return comment;
        };

        setSelectedPost(prevPost => prevPost ? removeFromSelectedPost(prevPost) : null);
      }
      
      alert('Failed to post reply. Please try again.');
    }
  };

  const handleToggleCollapse = (commentId: string) => {
    // Implementation for collapsing comments if needed
  };

  const handleOpenPost = (comment: CommentType) => {
    setSelectedPost(comment);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
      if (response.data) {
        setAuthenticated(false);
        localStorage.removeItem('userId');
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Sort discussions
  const sortedDiscussions = [...discussionComments].sort((a, b) => {
    switch (sortBy) {
      case 'new':
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      case 'top':
        return (b.likes - b.dislikes) - (a.likes - a.dislikes);
      case 'comments':
        const aComments = a.replies ? a.replies.length : 0;
        const bComments = b.replies ? b.replies.length : 0;
        return bComments - aComments;
      default: // hot
        const aScore = (a.likes - a.dislikes) / Math.pow(Math.max(1, (Date.now() - new Date(a.timestamp).getTime()) / 3600000), 1.5);
        const bScore = (b.likes - b.dislikes) / Math.pow(Math.max(1, (Date.now() - new Date(b.timestamp).getTime()) / 3600000), 1.5);
        return bScore - aScore;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center text-gray-100 w-full px-5 bg-white/10 backdrop-blur-md rounded-md py-4">
        Loading discussions...
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen text-gray-100 w-full px-5 bg-white/10 backdrop-blur-md rounded-md py-4">
        <h1 className="text-2xl font-semibold text-gray-200 mb-8 ml-4">
          <span className="text-[#F5C518]">•</span> Discussion
        </h1>
        <div className="mx-auto py-8 px-4">
          <FullDiscussionView
            comment={selectedPost}
            currentUserId={userId}
            onLike={handleLike}
            onDislike={handleDislike}
            onReply={handleReply}
            onToggleCollapse={handleToggleCollapse}
            onBack={handleBack}
          />
        </div>
        {showCommunityRulesPopup && userId && (
          <CommunityRulesPopup
            userId={userId}
            onAgree={() => setShowCommunityRulesPopup(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-100 w-full px-5 bg-white/10 backdrop-blur-md rounded-md py-4">
      <h1 className="text-2xl font-semibold text-gray-200 mb-8 ml-4">
        <span className="text-[#F5C518]">•</span> Discussion
      </h1>

      <div className="mx-auto py-8 px-4">
        {/* Episode Selector */}
        <EpisodeSelector 
          selectedEpisode={selectedEpisode}
          onEpisodeChange={setSelectedEpisode}
        />

        {/* Auth Status */}
        <div className="my-4 p-3">
          {!authenticated ? (
            <p className="text-sm text-slate-400">
              You must be{" "}
              <Link href="/login" className="text-[#f0b0d2] hover:underline">login</Link> 
              {" "}to post a discussion
            </p>
          ) : (
            <div className="flex flex-row w-full justify-between">
              {userName && (
                <span className="text-sm text-slate-400 flex flex-row gap-3">
                  Post as
                  <h1 className="text-[#f0b0d2] hover:underline bg-none">{userName}</h1>
                </span>
              )}
              <p onClick={handleLogout} className="text-[#f0b0d2] hover:underline bg-none cursor-pointer">
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Create Discussion Form */}
        {authenticated && (
          <CreateDiscussionForm 
            onSubmit={handleCreateDiscussion}
            selectedEpisode={selectedEpisode}
          />
        )}

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex space-x-2">
              {SORT_OPTIONS.map(option => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      sortBy === option.value 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="text-sm text-gray-400">
            {sortedDiscussions.length} discussions
          </div>
        </div>

        {/* Discussion Posts */}
        <div>
          {sortedDiscussions.map(comment => (
            <DiscussionPost
              key={comment.comment_id}
              comment={comment}
              currentUserId={userId}
              onLike={handleLike}
              onDislike={handleDislike}
              onReply={handleReply}
              onToggleCollapse={handleToggleCollapse}
              onOpenPost={handleOpenPost}
            />
          ))}

          {sortedDiscussions.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No discussions yet. Be the first to start a conversation!</p>
            </div>
          )}
        </div>
      </div>

      {showCommunityRulesPopup && userId && (
        <CommunityRulesPopup
          userId={userId}
          onAgree={() => setShowCommunityRulesPopup(false)}
        />
      )}
    </div>
  );
}