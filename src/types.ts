
interface Reaction {
    user_id: string;
    type: 'like' | 'dislike';
    _id: string;
  }
  export interface Comment {
    comment_id: string;
    _id: string;
    user_id: string;
    username: string;
    comment_text: string;
    timestamp: string;
    post_id: string;
    parent_comment_id: string | null;
    likes: number;
    dislikes: number;
    status: string;
    user_profile_picture_url: string;
    isSpoiler: boolean;
    replies: Comment[]; // Ensure this line is present
    edited_timestamp?: string;
    attachments: any[];
    flags: number;
    containsUrls:boolean;
    likeCounter?: number;
    dislikeCounter?: number;
    depth: number;
    userInteraction?: 'like' | 'dislike' | 'none';
    reactions: Reaction[];
  }
  
  export interface CommentProps {
    comment: Comment;
    currentUserId: string | null; 
    onLike: (id: string) => void;
    onDislike: (id: string) => void;
    onReply: (parentId: string, content: string, isSpoiler: boolean) => void;
    onToggleCollapse: (id: string) => void;
    globalCollapseState?: boolean; // New prop to control global collapse  
  }