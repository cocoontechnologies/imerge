const MenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className='w-7 self-end laptop:hidden' onClick={onClick}>
		<svg className='hamburger' viewBox="0 0 20 18" fill="#03090c">
			<rect className='top'
				width={20} height={2}
				x={0} y={1}>
			</rect>    
			<rect className='middle'
				width={20} height={2}
				x={0} y={8}>
			</rect>    
			<rect className='bottom'
				width={20} height={2}
				x={0} y={15}>
			</rect>    
		</svg>
    </button>
  )
}

export { MenuButton }
