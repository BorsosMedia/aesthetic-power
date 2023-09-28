export function PlanButton({ id }) {
  return (
    <div>
      <input
        type='radio'
        name='plans'
        id={`${id === '3' || id === '6' ? id + '-months' : id}`}
        value={`${id === '3' || id === '6' ? id + '-months' : id}`}
        className='hidden peer'
        defaultChecked={id === 'monthly'}
      />
      <label
        htmlFor={`${id === '3' || id === '6' ? id + '-months' : id}`}
        className='cursor-pointer inline-block w-[200px] p-2 transition-all duration-500 text-[#F1F1F1] bg-gradient-to-b from-[#9E0404] to-[#7B0202]/[0.5] text-center uppercase rounded-xl my-4 peer-checked:bg-gradient-to-b peer-checked:from-[#F3F4F8] peer-checked:to-[#D8D8D8] peer-checked:text-[#101223]'
      >
        {`${id === '3' || id === '6' ? id + ' months' : id}`}
      </label>
    </div>
  )
}
