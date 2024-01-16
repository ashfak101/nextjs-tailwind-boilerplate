import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  size?: number
}

const ShareIcon = ({ size = 24, ...props }: Props) => {
  if (typeof size !== 'number') throw new Error('Icon width must be a number')

  const height = (size * 24) / 24

  return (
    <svg
      width={size}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M18.5074 16.1435C17.3575 16.1435 16.3214 16.64 15.6024 17.43L9.13493 13.4243C9.3076 12.9823 9.40337 12.5022 9.40337 12C9.40337 11.4975 9.3076 11.0174 9.13493 10.5756L15.6024 6.56981C16.3214 7.35973 17.3575 7.85649 18.5074 7.85649C20.6735 7.85649 22.4357 6.09429 22.4357 3.92815C22.4357 1.76202 20.6735 0 18.5074 0C16.3412 0 14.579 1.7622 14.579 3.92834C14.579 4.43059 14.675 4.9107 14.8474 5.35271L8.38017 9.35832C7.66112 8.5684 6.62511 8.07164 5.47521 8.07164C3.30908 8.07164 1.54688 9.83403 1.54688 12C1.54688 14.1661 3.30908 15.9283 5.47521 15.9283C6.62511 15.9283 7.66112 15.4317 8.38017 14.6416L14.8474 18.6472C14.675 19.0893 14.579 19.5694 14.579 20.0718C14.579 22.2377 16.3412 24 18.5074 24C20.6735 24 22.4357 22.2377 22.4357 20.0718C22.4357 17.9057 20.6735 16.1435 18.5074 16.1435ZM16.0114 3.92834C16.0114 2.55212 17.1311 1.43243 18.5074 1.43243C19.8836 1.43243 21.0033 2.55212 21.0033 3.92834C21.0033 5.30455 19.8836 6.42424 18.5074 6.42424C17.1311 6.42424 16.0114 5.30455 16.0114 3.92834ZM5.47521 14.4959C4.09881 14.4959 2.97912 13.3762 2.97912 12C2.97912 10.6238 4.09881 9.50407 5.47521 9.50407C6.85143 9.50407 7.97093 10.6238 7.97093 12C7.97093 13.3762 6.85143 14.4959 5.47521 14.4959ZM16.0114 20.0716C16.0114 18.6954 17.1311 17.5757 18.5074 17.5757C19.8836 17.5757 21.0033 18.6954 21.0033 20.0716C21.0033 21.4478 19.8836 22.5675 18.5074 22.5675C17.1311 22.5675 16.0114 21.4478 16.0114 20.0716Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default ShareIcon
