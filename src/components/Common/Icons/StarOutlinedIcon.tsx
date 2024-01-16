type Props = {
  className?: string
  width?: number
}

const StarOutlinedIcon = ({ className, width = 16 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 16) / 16

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_3_14)'>
        <path
          d='M22.765 9.397C22.685 9.157 22.477 8.983 22.227 8.944L15.587 7.929L12.611 1.589C12.389 1.115 11.612 1.115 11.389 1.589L8.41298 7.93L1.77298 8.945C1.52298 8.983 1.31498 9.158 1.23498 9.398C1.15498 9.638 1.21598 9.903 1.39198 10.084L6.21598 15.029L5.07598 22.019C5.03398 22.274 5.14198 22.531 5.35298 22.679C5.56398 22.827 5.84198 22.843 6.06798 22.718L12 19.439L17.931 22.717C18.033 22.774 18.145 22.801 18.258 22.801C18.395 22.801 18.531 22.76 18.647 22.678C18.858 22.529 18.966 22.272 18.924 22.018L17.784 15.028L22.608 10.083C22.785 9.902 22.845 9.637 22.765 9.397Z'
          fill='white'
        />
        <path
          d='M5.57398 15.362L4.30698 23.129C4.26098 23.412 4.37998 23.697 4.61498 23.863C4.84898 24.028 5.15798 24.046 5.40998 23.906L12 20.264L18.59 23.907C18.704 23.969 18.829 24 18.953 24C19.105 24 19.256 23.954 19.385 23.863C19.62 23.697 19.739 23.412 19.693 23.129L18.426 15.362L23.786 9.868C23.982 9.667 24.05 9.372 23.961 9.106C23.872 8.839 23.641 8.646 23.363 8.603L15.985 7.476L12.678 0.431998C12.431 -0.0940015 11.568 -0.0940015 11.321 0.431998L8.01498 7.476L0.636977 8.603C0.358977 8.646 0.127977 8.839 0.038977 9.106C-0.050023 9.373 0.016977 9.667 0.212977 9.868L5.57398 15.362ZM8.63698 8.898C8.88398 8.86 9.09598 8.702 9.20198 8.476L12 2.515L14.798 8.475C14.904 8.701 15.116 8.86 15.363 8.897L21.694 9.864L17.089 14.584C16.922 14.754 16.847 14.994 16.885 15.229L17.965 21.846L12.363 18.75C12.25 18.688 12.125 18.656 12 18.656C11.875 18.656 11.75 18.687 11.637 18.75L6.03498 21.846L7.11498 15.229C7.15298 14.994 7.07798 14.755 6.91098 14.584L2.30598 9.864L8.63698 8.898Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_3_14'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default StarOutlinedIcon
