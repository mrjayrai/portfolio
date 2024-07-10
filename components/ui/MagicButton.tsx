import React from 'react'

const MagicButton = ({title,icon,position,handleclick,otherclasses}:{
    title:string;icon:React.ReactNode;position:string;
    handleclick ?: () => void; otherclasses?:string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] " onClick={handleclick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-2 text-xl font-medium text-white backdrop-blur-3xl gap-2 ${otherclasses}`}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
    </div>
  )
}

export default MagicButton
