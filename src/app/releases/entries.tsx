import React from 'react';
type Category = {
    name: string;
    entries: number;
    color: string;
    text: string
  };


const Entries = () => {

    const categories: Category[] = [
        { name: 'Movies', entries: 204, text: 'text-[#8AD056]', color: 'bg-[#8AD056]' },
        { name: 'TV Series', entries: 147, text: 'text-[#62A5F4]', color: 'bg-[#62A5F4]' },
        { name: 'Anime', entries: 141, text: 'text-[#885DE5]', color: 'bg-[#885DE5]' },
        { name: 'Drama', entries: 116, text: 'text-[#DB7F9F]', color: 'bg-[#DB7F9F]' },
        { name: 'Sport', entries: 108, text: 'text-[#CC6675]', color: 'bg-[#CC6675]' },
      ];

      const totalBookmarks = categories.reduce((sum, cat) => sum + cat.entries, 0);
      
    return (
        <div className='max-w-[500px]'>
            <div className="grid grid-cols-5 w-full justify-center gap-3 ">
          {categories.map((category) => (
            <div
              key={category.name}
              className=" rounded-lg p-4 text-center  cursor-pointer"
            >
              <div className= {`text-sm w-[75px] h-[25px] flex justify-center items-center rounded-sm ${category.color}`}>{category.name}</div>
              <div className="mt-1 font-bold flex items-center gap-2 ">
                <h1 className={`${category.text}`}>{category.entries}</h1>
                <span className="text-xs">Entries</span>
              </div>
             
            </div>
          ))}
        <div className=' w-full h-2 mx-4  flex col-span-5 rounded-full'>
            {categories.map((categorie,index)=>(
                <div key={index} 
                className={`  h-3 ${categorie.color}`}
                style={{
                    width: `${(categorie.entries / totalBookmarks) * 100}%`,
                  }}/>
                
            ))}
        </div>
        </div>
        </div>
    );
}

export default Entries;
