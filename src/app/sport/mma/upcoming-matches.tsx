import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MatchCard() {
  return (
    <div className="w-[279px] h-[328px] bg-[#171F29] rounded-xl relative">
        <div className="pt-2 px-4 flex justify-between text-sm">
            <h3 className="text-[#657182]">Match Day 11</h3>
            <h3 className="text-[#657182]">Nov 18 - 08:15 PM</h3>
        </div>

        <div className="flex justify-center pt-3 text-white gap-2">
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl ">1</p>
                <p className="text-[9px]">Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl ">37</p>
                <p className="text-[9px]">Minutes</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl ">08</p>
                <p className="text-[9px]">Seconds</p>
            </div>
            
        </div>

        <div className="flex justify-between relative bottom-8 gap-20">
            <img className="w-[100px] h-[150px] " src="https://s3-alpha-sig.figma.com/img/9d2b/729d/4f4a4548d168e5028c3c65ba1d0e9738?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B4AaKmCAj0okj7J-T5WPLD6mvHuCI4sYBNTbD6DRmdQWdF9pSqbpX8l3TK8KlEFOyDEGKcScO9swBPDVREVIKk9OqasZyOan2S2K7cgbFn79KW7~1wR4KLxgVPm207R-UmIj7y0Jap6wJJFpwrp8e9h2qzQFQJg~oSzkcSZO1N1WvTxnQagqDVzRrJIaAuboSkMMS72ARtV6Z-nS4I2MDCdZhOzJZtOecch2kXuWQfQWz-hlAAvWIdIMcuucrz~K4mZemEXMPA0aMhFbF25QDm8ZwZbRraIcZcfnLrHYxujoBpWQzSfTUI6wWX51XlILyx2GMpPnFfIzsx-rr4kv9g__" alt="" />
            <img className="w-[100px] h-[150px] " src="https://s3-alpha-sig.figma.com/img/14bc/0966/9750ae0f1e96bde99b243b0e7d424e3a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gsozm4s6B-2f2RdxyyyYBp~oIH~1qxlTI0Fu6HQkvN~LZJlDaKUg7B5if~NZt8bupuYU3nHrYriXLW7KsttROM5XLzaim1zY5YXSaLto8GjIevKjtSqWGOge7QOE~1jJu4rzuXYcu~klG8~uYRBH7ZFQzwTeS0gLQN77eKdcumqNrZDxQrDjFx0YVAelTXDHYg~U1hbbYhTScyq8Sg6TnMUI84sDp6Ipdpl1HZTLXmyhYXix0vGjd3IR5AniUpkQ6jrlUgoHzRhlUwYe05yn3Dq6FUVlV3NT~Um0iWmkmao1hKfByOQ784dA-capfHSYsOVKADGzbDRtkojnNT-qeg__" alt="" />
        </div>

        <div className="flex text-white justify-around relative bottom-5">
            <div className="w-[68px] h-[30px] justify-center items-center text-[10px] text-black  flex bg-[#F29098] rounded-[8px] border border-[#E63946]">
                <h1 className="bg-white rounded-[8px] h-[30px] w-[42.22px] border-y border-r border-[#E63946] flex justify-center items-center ">92.86%</h1>
                <h1 className="text-center text-wrap text-[#1D3557] py-2 ">Vote 39</h1>
            </div>
            <div className="text-[#C6C8CD] text-[15px] h-9 text-center flex justify-center items-center"> Alex Pena<br />Connor Sparrow</div>
            <div className="w-[68px] h-[30px] justify-center items-center text-[10px] text-black  flex bg-[#F29098] rounded-[8px] border border-[#E63946]">
                <h1 className="bg-white rounded-[8px] h-[30px] w-[42.22px] border-y border-r border-[#E63946] flex justify-center items-center ">92.86%</h1>
                <h1 className="text-center text-wrap text-[#1D3557] py-2 ">Vote 39</h1>
            </div>
        </div>

        <div className="flex h-16 rounded-xl items-center gap-3 absolute  mt-6 bg-[#222C38] bottom-0 px-4 w-full">
          <img src="/icons/hulu.svg" alt="" />
          <div>
            <div className="text-base text-[#C6C8CD]">Watch soon</div>
            <div className="text-gray-400 text-xs ">
              FLATRATE <span className="text-yellow-500">HD</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

