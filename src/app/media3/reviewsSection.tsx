import Reviews from '@/components/Reviews'
import { useState } from 'react'

interface ReviewsSectionProps {
  reviews: any[] // Replace with your actual review type
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const [activeTab, setActiveTab] = useState<'popular' | 'recent' | 'friends'>('popular')

  const tabs = [
    { id: 'popular', label: 'Popular Reviews' },
    { id: 'recent', label: 'Recent Reviews' },
    { id: 'friends', label: "Friend's Reviews" }
  ]

  // Filter reviews based on active tab
  const getFilteredReviews = () => {
    switch (activeTab) {
      case 'popular':
        // Sort by likes/popularity (assuming reviews have a likes field)
        return reviews.sort((a, b) => (b.likes || 0) - (a.likes || 0))
      case 'recent':
        // Sort by date (assuming reviews have a createdAt field)
        return reviews.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
      case 'friends':
        // Filter reviews from friends (assuming reviews have an isFriend field)
        return reviews.filter(review => review.isFriend)
      default:
        return reviews
    }
  }

  const filteredReviews = getFilteredReviews()

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'popular' | 'recent' | 'friends')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Component */}
      <div className="mb-6">
        <Reviews 
          reviews={filteredReviews} 
          title={`• ${tabs.find(tab => tab.id === activeTab)?.label}`} 
        />
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          View More
        </button>
      </div>
    </div>
  )
}

export default ReviewsSection