'use client'
import React, { useState, useEffect,useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Comment } from './comment/Comment';
import { CommentInput } from './comment/CommentInput';
import type { Comment as CommentType } from '../types';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { ChevronDown,ChevronUp, Check  } from "lucide-react";
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CommunityRulesPopup from './comment/CommunityRulesPopup';



const API_BASE_URL =  "https://deploy-two-jade.vercel.app";

async function handleCheckAuth(router: any): Promise<{ isAuthenticated: boolean; username: string | null,userId:string|null }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/check-auth`, { withCredentials: true });
    return { isAuthenticated: true, username: response.data.username,userId: response.data.userId };
  } catch (error) {
    router.push('/login'); // Redirect if not authenticated
    return { isAuthenticated: false, username: null,userId:null };
  }
}


async function handleCheckUsername(router: any): Promise<{ isAuthenticated: boolean; username: string | null, userId: string | null }> {
  try {
    // Check if the user is authenticated by checking their session or JWT token
    const response = await axios.get(`${API_BASE_URL}/check-auth`, { withCredentials: true });
    return { isAuthenticated: true, username: response.data.username,userId:response.data.userId }; // Return the username
  } catch (error) {
    return { isAuthenticated: false, username: null,userId:null }; // Don't redirect, just return the state
  }
}


export const commentService = {
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
      },{ withCredentials: true });
      
      
      return response.data.comment;
    } catch (error) {
      console.error('Failed to create comment', error);
      throw error;
    }
  },

  async getComments(post_id: string, userId:string|null): Promise<CommentType[]> {
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
        { withCredentials: true });
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
        {}, // Empty body
        { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Failed to dislike comment', error);
      throw error;
    }
  },


 

};



export default function CommentSys() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [sortType, setSortType] = useState<string>('newest');
  const [showCommunityRulesPopup, setShowCommunityRulesPopup] = useState(false);
  const router = useRouter();
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  useEffect(() => {
    // Retrieve the value from localStorage after the component mounts
    const storedEpisode = localStorage.getItem("selectedEpisode");
    if (storedEpisode) {
      setSelectedEpisode(Number(storedEpisode));
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever selectedEpisode changes
    localStorage.setItem("selectedEpisode", `${selectedEpisode}`);
  }, [selectedEpisode]);
  
  // Mock episodes data - in real app, this would come from props or API
  const episodes = Array.from({ length: 12 }, (_, i) => i + 1);


 


  useEffect(() => {
    const fetchAuthStatus = async () => {
      const { isAuthenticated, username, userId } = await handleCheckUsername(router);

      setAuthenticated(isAuthenticated);
      setUserName(username);
      setUserId(userId);

      // If authenticated, check if they've agreed to community rules
     
    };
    fetchAuthStatus();
  }, [router]);

  const handleCommunityRulesAgree = () => {
    setShowCommunityRulesPopup(false);
  };



  const countTotalComments = (commentList: CommentType[]): number => {
    return commentList.reduce((total, comment) => {
      return total + 1 + countTotalComments(comment.replies);
    }, 0);
  };
  

  // Helper function to build a tree
  
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const { isAuthenticated, username,userId } = await handleCheckUsername(router);

      setAuthenticated(isAuthenticated); // Update authenticated state
      setUserName(username); // Set username if authenticated
      setUserId(userId)
 
      
      
    };

    fetchAuthStatus();
  }, [router]);
  // Fetch initial comments
  useEffect(() => {
    const fetchComments = async () => {
      const { userId } = await handleCheckUsername(router);
      try {
        const fetchedComments = await commentService.getComments(`Episode ${selectedEpisode}`,userId);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
    
    
    

  }, [selectedEpisode]);

  
  const handleLike = async (id: string) => {
    const { isAuthenticated } = await handleCheckAuth(router); // Pass router here
    if (!isAuthenticated) return;
    
    
    try {
      const response = await commentService.likeComment(id);
      
      const updateComments = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.comment_id === id) {
            return {
              ...comment,
              likes: response.likes,
              dislikes: response.dislikes,
              userInteraction: response.userInteraction
            };
          }
          if (comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComments(comment.replies)
            };
          }
          return comment;
        });
      };

      setComments(updateComments(comments));
    } catch (error) {
      console.error('Failed to like comment:', error);
    }
  };

  const handleDislike = async (id: string) => {
    const { isAuthenticated } = await handleCheckAuth(router); // Pass router here
    if (!isAuthenticated) return;
    try {
      const response = await commentService.dislikeComment(id);
      
      const updateComments = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.comment_id === id) {
            return {
              ...comment,
              likes: response.likes,
              dislikes: response.dislikes,
              userInteraction: response.userInteraction
            };
          }
          if (comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComments(comment.replies)
            };
          }
          return comment;
        });
      };

      setComments(updateComments(comments));
    } catch (error) {
      console.error('Failed to dislike comment:', error);
    }
  };

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
  const handleNewComment = async (content: string, isSpoiler: boolean) => {
    const { isAuthenticated } = await handleCheckAuth(router); // Pass router here
    if (!isAuthenticated) return;
    const agreedToCommunityRules = await checkCommunityRules(userId);
    if (!agreedToCommunityRules) {
      setShowCommunityRulesPopup(true);
      return;
    }
    try {
      const newComment = await commentService.createComment(content, `Episode ${selectedEpisode}`, null, isSpoiler);
      if (newComment.status === 'flagged') {
        alert('Your comment contains a URL and has been flagged for review. It will only be visible to you.');
      }
      setComments([newComment, ...comments]);
    } catch (error) {
      console.error('Failed to create comment:', error);
      // Optionally add error handling UI feedback here
    }
  };

  const handleReply = async (parentId: string, content: string, isSpoiler: boolean) => {
    const { isAuthenticated } = await handleCheckAuth(router); // Pass router here
    if (!isAuthenticated) return;
    const agreedToCommunityRules = await checkCommunityRules(userId);
    if (!agreedToCommunityRules) {
      setShowCommunityRulesPopup(true);
      return;
    }
    try {
      const newReply = await commentService.createComment(content, `Episode ${selectedEpisode}`, parentId, isSpoiler);
      if (newReply.status === 'flagged') {
        alert('Your reply contains a URL and has been flagged for review. It will only be visible to you.');
      }

      const addReply = (comments: CommentType[]): CommentType[] => {
        return comments.map(comment => {
          if (comment.comment_id === parentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReply]
            };
          }
          return {
            ...comment,
            replies: addReply(comment.replies)
          };
        });
      };

      setComments(addReply(comments));
    } catch (error) {
      console.error('Failed to create reply:', error);
      // Optionally add error handling UI feedback here
    }
  };

  const handleToggleCollapse = (id: string) => {
   
  };
  
  const sortedCommentsRef = useRef<CommentType[] | null>(null);
  const handleSortChange = (newSortType: string) => {
    if (comments) {
      const sortedComments = [...comments];
      
      switch (newSortType) {
        case 'newest':
          sortedComments.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          break;
        case 'oldest':
          sortedComments.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
          break;
        case 'mostLiked':
          sortedComments.sort((a, b) => b.likes - a.likes);
          break;
        default:
          break;
      }
    
     
      setSortType(newSortType);
      setComments(sortedComments);
    }
  };

  
  const handelLogout = async ()=>{
    try {
      const response = await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
      if (response.data) {
        
        setAuthenticated(false);
        localStorage.removeItem('userId');
        location.reload();

        
      }
    } catch (error:any) {
     console.log(error);
     
    }

  }

  if (isLoading) {
    return <div className="min-h-screen w-[98vh] m-11 bg-gray-900 text-gray-100 flex items-center justify-center  rounded-lg">
      Loading comments...
    </div>;
  }

  return (
    <div className="min-h-screen text-gray-100 w-[95vw]  bg-gray-900 rounded-md py-4">
                <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Comment</h1>

    <div className=" mx-auto py-8 px-4">
    <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4 ">  
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-300 hover:text-gray-800">
                <h2 className="text-lg font-semibold">Episode {selectedEpisode}</h2>
                  <ChevronDown className=" h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-gray-100 border-gray-700">
                {episodes.map((ep) => (
                  <DropdownMenuItem
                    key={ep}
                    className="hover:bg-gray-700 cursor-pointer"
                    onClick={() => setSelectedEpisode(ep)}
                  >
                    Episode {ep}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="sr-only">Comments</span>
            <span>{countTotalComments(comments)} Comments</span>
          </div>
        </div>
        <div className="flex self-center  text-sm  text-slate-400">
          <h2 className="text-lg  font-semibold ">r/series</h2>
          </div>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-slate-400">
              Sort by
              <div className='flex flex-col'>
              <ChevronUp className="ml-2 h-4 w-4" />
              <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white rounded-xl p-0 w-[140px] flex flex-col justify-center' align="end">
            <DropdownMenuItem 
              className={`cursor-pointer hover:bg-slate-200 pt-2 flex justify-between items-center ${sortType === 'newest' ? 'bg-slate-100' : ''}`} 
              onClick={() => handleSortChange('newest')}
            >
              Newest
              {sortType === 'newest' && <Check className="h-4 w-4 text-green-500" />}
            </DropdownMenuItem>
            <DropdownMenuItem 
              className={`cursor-pointer hover:bg-slate-200 flex justify-between items-center ${sortType === 'oldest' ? 'bg-slate-100' : ''}`} 
              onClick={() => handleSortChange('oldest')}
            >
              Oldest
              {sortType === 'oldest' && <Check className="h-4 w-4 text-green-500" />}
            </DropdownMenuItem>
            <DropdownMenuItem 
              className={`cursor-pointer hover:bg-slate-200 pb-2 flex justify-between items-center ${sortType === 'mostLiked' ? 'bg-slate-100' : ''}`} 
              onClick={() => handleSortChange('mostLiked')}
            >
              Most Liked
              {sortType === 'mostLiked' && <Check className="h-4 w-4 text-green-500" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>    <div className=' my-4 p-3'>
        {!authenticated ?
              <p className="text-sm text-slate-400">
                You must be{" "}
                  <Link href="/login" className="text-[#f0b0d2] hover:underline">login </Link> 
                to post a comment
              </p>
              : <div className=" flex flex-row w-full justify-between">
                {userName != null ? 
                <span className="text-sm text-slate-400 flex flex-row gap-3">
                  Comment as
                  <h1  className="text-[#f0b0d2] hover:underline bg-none">  { userName} </h1>
                  </span>:""}
                <p onClick={handelLogout} className="text-[#f0b0d2] hover:underline bg-none cursor-pointer">Logout </p>
                 </div> 
              }
        </div>
        <CommentInput onSubmit={handleNewComment} />
        <div className="mt-8">
       
          {comments.map(comment => (
            <Comment
              key={comment.comment_id ? comment.comment_id : "1sdfsd"}
              comment={comment}
              currentUserId={userId}
              onLike={handleLike}
              onDislike={handleDislike}
              onReply={handleReply}
              onToggleCollapse={handleToggleCollapse}
              
              
            />
          ))}
        </div>
      </div>
      {showCommunityRulesPopup && userId && (
        <CommunityRulesPopup
          userId={userId} 
          onAgree={handleCommunityRulesAgree} 
        />
      )}
    </div>
  );
}