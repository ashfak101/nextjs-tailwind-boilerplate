type Props = {
  className?: string
  width?: number
}

const EnvelopeIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      className={className}
      width={width}
      height={width}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21.8906 2.85938H2.10938C0.947719 2.85938 0 3.80606 0 4.96875V19.0312C0 20.19 0.9435 21.1406 2.10938 21.1406H21.8906C23.0494 21.1406 24 20.1971 24 19.0312V4.96875C24 3.81 23.0565 2.85938 21.8906 2.85938ZM21.5993 4.26562L12.0447 13.8203L2.40745 4.26562H21.5993ZM1.40625 18.7401V5.25323L8.1787 11.9676L1.40625 18.7401ZM2.40061 19.7344L9.17733 12.9577L11.5519 15.3118C11.8267 15.5843 12.2703 15.5835 12.5441 15.3097L14.8594 12.9944L21.5994 19.7344H2.40061ZM22.5938 18.74L15.8537 12L22.5938 5.25994V18.74Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default EnvelopeIcon
