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
                        <img src='https://s3-alpha-sig.figma.com/img/14bc/0966/9750ae0f1e96bde99b243b0e7d424e3a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WeN35vCdFzZu-nvY~o4iw8dFyifcBkor7rcFSKL3tPyWbck7DnHd0YryJmdcynB4a2urqGQVJa5C3u1MV~IX2cdovAg9VudX4DuApeM~9bD4xoL6QvcZHv6LwvoSPx-sjVHTJd6cibdN-FVshBfj8dUonJZ2pzywLyMIw4rvXOhJI89HQzAKx~AwCV~5SBLl6x9bqjNOro9g5dUSQ0t67rVx47BenU7cICRhwi5knilPCKt39iC~J2EPFKWq8~yCdc4YtCskVVmGujWyezED3z~RGWHC1OTtcu~UPiTNO2o4dO4zfz9TWMho6d~~QRIit~EcUP7ZBbSd3GFekxj~pw__' 
                        className="w-6 h-6 rounded-full object-contain" />
                        <span>{match.player1.name}</span>
                        <span className="text-gray-400">({match.player1.percentage})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                        <img src='https://s3-alpha-sig.figma.com/img/9d2b/729d/4f4a4548d168e5028c3c65ba1d0e9738?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s6CSIa-ceAbGoihzp-AcLKo7LWlIZCRsl5PMcgJ0Ax2W~SpALxaIQ~0vKQyteMi8KUfWFggH15IXRuH3dSGuR378wHjhcKsPDSQzLmpDow2El1Uwb7KNYbABCCoZekcZPcXCxsV2UWhEdR~iGJkhpiA~o52XiohBNNc5WTUnqlJv3zKgedTYNtFoAGW6AsINbgAyCX4Tg7~k4w70KhjHSB1ExRuK~cH1cT-KdbL9NzNaJKvgqau0Axo7mu0hcYsS~Nx9SkO6Nwlk3Gj-7khzEYfTIesaOnJvxyKM0yfuCuWKvuNpgE~9jhkLw~rQ-Byo4DXUIFudqhHFM8ylR~5Qug__' 
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
