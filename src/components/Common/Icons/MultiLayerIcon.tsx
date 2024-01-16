import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

export const MultiLayerIcon = ({ width = 16, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 16) / 16

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_3265_3479)'>
        <path
          d='M1.33325 7.99988L7.7614 11.214C7.84886 11.2577 7.89259 11.2795 7.93845 11.2882C7.97908 11.2958 8.02076 11.2958 8.06139 11.2882C8.10725 11.2795 8.15098 11.2577 8.23843 11.214L14.6666 7.99988M1.33325 11.3332L7.7614 14.5473C7.84886 14.591 7.89259 14.6129 7.93845 14.6215C7.97908 14.6291 8.02076 14.6291 8.06139 14.6215C8.10725 14.6129 8.15098 14.591 8.23843 14.5473L14.6666 11.3332M1.33325 4.66655L7.7614 1.45247C7.84886 1.40874 7.89259 1.38688 7.93845 1.37827C7.97908 1.37065 8.02076 1.37065 8.06139 1.37827C8.10725 1.38688 8.15098 1.40874 8.23843 1.45247L14.6666 4.66655L8.23843 7.88062C8.15098 7.92435 8.10725 7.94621 8.06139 7.95482C8.02076 7.96244 7.97908 7.96244 7.93845 7.95482C7.89259 7.94621 7.84886 7.92435 7.7614 7.88062L1.33325 4.66655Z'
          stroke='currentColor'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3265_3479'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default MultiLayerIcon
