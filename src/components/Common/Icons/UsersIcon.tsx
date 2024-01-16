type Props = {
  className?: string
  width?: number
}

const UsersIcon = ({ className, width = 16, ...rest }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 16) / 16
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...rest}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_68_2523)'>
        <path
          d='M15.9835 10.3766C15.7194 8.8888 14.7321 7.69422 13.4302 7.14014C14.008 6.65564 14.377 5.922 14.377 5.10242C14.377 3.64673 13.2134 2.4624 11.7831 2.4624C10.3528 2.4624 9.18923 3.64661 9.18923 5.10242C9.18923 5.92249 9.55862 6.65637 10.137 7.14099C9.92117 7.23303 9.71206 7.3429 9.51235 7.47095C9.00906 7.7937 8.57937 8.21875 8.24819 8.71655C7.91116 8.49268 7.54873 8.3064 7.16665 8.16345C7.98782 7.56983 8.52468 6.59375 8.52468 5.49231C8.52468 3.68726 7.08291 2.21875 5.31069 2.21875C3.53848 2.21875 2.0967 3.68726 2.0967 5.49231C2.0967 6.59375 2.63357 7.56983 3.45474 8.16345C1.70718 8.81726 0.366845 10.3721 0.0191885 12.3296C-0.0450205 12.6915 0.0536124 13.0607 0.289574 13.3424C0.523339 13.6213 0.864404 13.7813 1.22537 13.7813H9.39602C9.75698 13.7813 10.098 13.6213 10.3318 13.3424C10.5679 13.0607 10.6664 12.6915 10.6022 12.3296C10.5594 12.0881 10.5012 11.8529 10.4293 11.6248H14.9455C15.2563 11.6248 15.55 11.4871 15.7511 11.2471C15.954 11.005 16.0387 10.6876 15.9835 10.3766ZM10.1267 5.10242C10.1267 4.16357 10.8698 3.3999 11.7831 3.3999C12.6964 3.3999 13.4395 4.16357 13.4395 5.10242C13.4395 6.04114 12.6964 6.80481 11.7831 6.80481C10.8698 6.80481 10.1267 6.04114 10.1267 5.10242ZM3.0342 5.49231C3.0342 4.20422 4.05544 3.15625 5.31069 3.15625C6.56594 3.15625 7.58731 4.20422 7.58731 5.49231C7.58731 6.7804 6.56594 7.82837 5.31069 7.82837C4.05544 7.82837 3.0342 6.7804 3.0342 5.49231ZM9.61331 12.7402C9.58084 12.7789 9.50955 12.8438 9.39602 12.8438H1.22537C1.11184 12.8438 1.04055 12.7789 1.00808 12.7402C0.974389 12.7 0.920922 12.6143 0.942284 12.4934C1.32583 10.3336 3.16299 8.76587 5.31069 8.76587C7.4584 8.76587 9.29568 10.3336 9.6791 12.4934C9.70059 12.6143 9.64712 12.7 9.61331 12.7402ZM15.0326 10.6449C15.0193 10.6608 14.9904 10.6873 14.9456 10.6873H10.0353C9.75796 10.1676 9.40176 9.70142 8.98391 9.30371C9.59451 8.3324 10.6381 7.74231 11.7831 7.74231C13.3943 7.74231 14.7725 8.91907 15.0605 10.5405C15.0695 10.5917 15.0469 10.6279 15.0326 10.6449Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_68_2523'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UsersIcon
