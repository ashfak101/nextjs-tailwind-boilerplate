import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const CameraIcon = ({ width = 24, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width / 24) * 24

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.88992 20.31 3.99992 22 6.75992 22H17.2399C19.9999 22 21.0999 20.31 21.2299 18.25L21.7499 9.99C21.8899 7.83 20.1699 6 17.9999 6ZM10.4999 7.25H13.4999C13.9099 7.25 14.2499 7.59 14.2499 8C14.2499 8.41 13.9099 8.75 13.4999 8.75H10.4999C10.0899 8.75 9.74992 8.41 9.74992 8C9.74992 7.59 10.0899 7.25 10.4999 7.25ZM11.9999 18.12C10.1399 18.12 8.61992 16.61 8.61992 14.74C8.61992 12.87 10.1299 11.36 11.9999 11.36C13.8699 11.36 15.3799 12.87 15.3799 14.74C15.3799 16.61 13.8599 18.12 11.9999 18.12Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default CameraIcon
