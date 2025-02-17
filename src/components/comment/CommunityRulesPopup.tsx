'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { AlertCircle } from 'lucide-react'

interface CommunityRulesPopupProps {
  userId: string
  onAgree: () => void
  onCancel?: () => void
}

const CommunityRulesPopup: React.FC<CommunityRulesPopupProps> = ({ 
  userId, 
  onAgree, 
  onCancel 
}) => {
  const [checkedRules, setCheckedRules] = useState({
    noHarassment: false,
    noSpam: false,
    noHateSpeech: false
  })

  const handleCheckboxChange = (rule: keyof typeof checkedRules) => {
    setCheckedRules(prev => ({
      ...prev,
      [rule]: !prev[rule]
    }))
  }

  const handleAgree = async () => {
    if (Object.values(checkedRules).every(rule => rule === true)) {
      try {
        const API_BASE_URL =  "https://deploy-two-jade.vercel.app";       
        await axios.post(`${API_BASE_URL}/agree-to-rules`, 
          { 
            userId, 
            agreedRules: Object.keys(checkedRules)
          }, 
          { withCredentials: true }
        )
        onAgree()
      } catch (error) {
        console.error('Failed to update community rules agreement', error)
      }
    }
  }

  const isAgreementDisabled = !Object.values(checkedRules).every(rule => rule === true)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className=" p-8 rounded-xl w-full max-w-md lg:max-w-xl xl:max-w-2xl shadow-2xl border border-gray-700 

         bg-gray-900">
        <div className="flex items-center mb-6">
          <AlertCircle className="w-8 h-8 text-yellow-500 mr-4 lg:w-10 lg:h-10" />
          <h2 className="text-2xl lg:text-2xl xl:text-3xl font-bold text-white">Community Guidelines</h2>
        </div>
        
        <div className="space-y-6 lg:space-y-8">
          {Object.entries(checkedRules).map(([rule, checked]) => (
            <div 
              key={rule} 
              className="flex items-center space-x-4 
                "
            >
              <Checkbox
                id={rule}
                checked={checked}
                onCheckedChange={() => handleCheckboxChange(rule as keyof typeof checkedRules)}
                className="border-gray-500 w-6 h-6 lg:w-7 lg:h-7"
              />
              <label
                htmlFor={rule}
                className=" text-base lg:text-base xl:text-lg font-medium leading-none 
                  cursor-pointer text-gray-300 hover:text-white transition-colors"
              >
                {(() => {
                  switch(rule) {
                    case 'noHarassment': return 'No harassment or bullying'
                    case 'noSpam': return 'No spam or excessive self-promotion'
                    case 'noHateSpeech': return 'No hate speech or discriminatory language'
                    default: return rule
                  }
                })()}
              </label>
            </div>
          ))}

          <div className="space-y-4 mt-8">
            <Button
              onClick={handleAgree}
              disabled={isAgreementDisabled}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white 
                font-semibold py-3 lg:py-4 xl:py-5 
                rounded-lg transition-colors cursor-pointer
                 text-base lg:text-base xl:text-lg
                transform hover:scale-[1.02] active:scale-95 "
            >
              I Understand and Agree
            </Button>

            {onCancel && (
              <Button
                variant="outline"
                onClick={onCancel}
                className="w-full border-gray-600 text-gray-300 
                  hover:bg-gray-800 hover:text-white 
                  py-3 lg:py-4 xl:py-5 
                  text-base lg:text-base xl:text-lg"
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityRulesPopup