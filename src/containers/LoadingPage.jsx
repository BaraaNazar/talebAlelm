import React from 'react'
import alkitabLogo from "../assets/images/alkitabLogo.png"

function LoadingPage() {
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen space-y-10'>
        <img className='h-fit w-1/2' src={alkitabLogo} alt="alkitab logo" />
        <h1 className='text-2xl font-bold'>قال النبي صلى الله عليه وسلم
((مَن يُرِدِ الله به خيرًا يفقِّهْه في الدِّين، وإنما أنا قاسمٌ والله يعطي، ولن تزال هذه الأمة قائمةً على أمر الله، لا يضرُّهم مَن خالفهم حتى يأتي أمر الله)).
رواه البخاري</h1>
        <div >
  <button type="button" class="flex items-center rounded-lg px-4 py-2 text-white" disabled>
    <svg className="mr-3 h-20 w-20 animate-spin text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </button>
</div>
    </div>
  )
}

export default LoadingPage