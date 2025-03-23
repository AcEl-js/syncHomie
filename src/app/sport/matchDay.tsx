import React from 'react';
const matches = [
    {
      day: 11,
      matches: [
        {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },
      ],
    },
    {
      day: 12,
      matches: [
        {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },
        {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },
        {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },
        {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        }, {
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },{
          player1: { name: "Alex Pena", percentage: "88.5%" },
          player2: { name: "Connor Sparrow", percentage: "75%" },
          time: "08:15 PM",
          date: "Nov 18",
        },
      ],
    },
  ]
  

const MatchDay = () => {
    return (
        <div className="mt-8 space-y-6 text-white">
        {matches.map((day) => (
            <div key={day.day} className=' cursor-pointer'>
            <h2 className="text-gray-400 text-sm mb-3">MATCH DAY {day.day}</h2>
            <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2">
                {day.matches.map((match, idx) => (
                  
                <div key={idx} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                    <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                        <img src='/other/fighter2.png' 
                        className="w-6 h-6 rounded-full object-contain" />
                        <span>{match.player1.name}</span>
                        <span className="text-gray-400">({match.player1.percentage})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                        <img src='/other/fighter1.png' 
                        className="w-6 h-6 rounded-full object-contain" />
                        <span>{match.player2.name}</span>
                        <span className="text-gray-400">({match.player2.percentage})</span>
                        </div>
                        

                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-400">{match.date}</div>
                        <div>{match.time}</div>
                    </div>
                    <div><img src="/Button.svg" alt="" /></div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
}

export default MatchDay;
