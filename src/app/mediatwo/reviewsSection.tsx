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
      {/* Enhanced Dark Tab Navigation */}
      <div className="relative mb-8">
        {/* Background container with dark theme */}
        <div className=" rounded-xl p-2 shadow-2xl ">
          <div className="flex relative w-11/12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'popular' | 'recent' | 'friends')}
                className={`relative flex-1 gap-4 mx-2 px-2 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out transform ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white shadow-lg scale-[1.02] border border-gray-700'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {/* Active indicator dot */}
                {activeTab === tab.id && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decorative line under tabs */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>

      {/* Reviews Component */}
      <div className="mb-6">
        <Reviews 
          reviews={filteredReviews} 
          title={`• ${tabs.find(tab => tab.id === activeTab)?.label}`} 
        />
      </div>

      {/* Enhanced Dark View More Button */}
      <div className="flex justify-center">
        <button className="group relative px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 border border-gray-700">
          <span className="relative z-10">View More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  )
}

export default ReviewsSection