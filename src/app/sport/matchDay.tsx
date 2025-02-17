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
                        <img src='https://s3-alpha-sig.figma.com/img/14bc/0966/9750ae0f1e96bde99b243b0e7d424e3a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ke6SD7wOZvam02VjsqCp-~~RUJs~3Cj~3scCbTKT9IaShUbjSfDP7mRHFAOwfMMDXBCwN6Ofvs1HWJybZJifyzhfZwrov~nqI3hymxyBtX4F6WZnCku1cxxZrWqcf250pH2uEZMcHmFLF~BDqwVkEQKuFUMAFMnphIHtWDJGqgGeF19HmlIps70DYJLv7s0o08FSp20zdNdyYMkM9MW0xLHu1TW-mJ0Y~Uc7QQvOqm6uHOLR7g-OP3oIgI3FQDfAqOEyMlS0mzQHAoULoF4h0bOzxOSOhXmT7xbv50y5atyQv7MSUdXlE53NvpCXC~Jcq0J67yD0OJuk3Wmisspn~w__' 
                        className="w-6 h-6 rounded-full object-contain" />
                        <span>{match.player1.name}</span>
                        <span className="text-gray-400">({match.player1.percentage})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                        <img src='https://s3-alpha-sig.figma.com/img/9d2b/729d/4f4a4548d168e5028c3c65ba1d0e9738?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L40NYtIwi2pqBj6xTUckhiU~bK23TiXybSFxB1oPm5aepv-FFWS4YZ4Y6eApRIUbeR3EfdoHI2I~bGgEW9V54Z3nQ6HQFOXCawHBMsKcjQJMtzdjlEMgGMW90yT9jK1WKSDOnZdNLsqYKU8lDdAVLFq6aPVOU3vQbKUiXA1GTPnY9as6EU~N89SqEoqstg-af1r3DnNSh~IgMGCAwBmJ-1iJF65ZAZkgsiJJdIECigPnlQzH8j6udyDrysbgZml-sQTSioVEWK~9lu7xWIL4CBaejVX5SXLf51eT~KnMqV-nVcjjXMjinoCPbDMYzui5v0TibVFztctvp6DTFh-F8Q__' 
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
