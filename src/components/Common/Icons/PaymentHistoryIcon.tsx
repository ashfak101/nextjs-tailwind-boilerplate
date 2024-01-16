type Props = {
  className?: string
}
const PaymentHistoryIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={20}
      height={16}
      viewBox='0 0 20 18'
      fill='none'>
      <path
        fill='#C6C5C6'
        d='M19.645 1.782a1.493 1.493 0 0 0-1.022-.526L4.538.08c-.4-.034-.788.09-1.095.35-.305.258-.492.619-.526 1.017l-.283 2.658H1.502C.674 4.105 0 4.78 0 5.607v8.817c0 .828.674 1.502 1.502 1.502h14.133c.829 0 1.503-.674 1.503-1.502v-1.43l.501.041a1.504 1.504 0 0 0 1.622-1.372l.734-8.785c.033-.4-.091-.79-.35-1.096ZM1.502 4.886h14.133c.398 0 .721.324.721.721v.804H.781v-.804c0-.397.324-.72.721-.72Zm-.72 2.306h15.574v1.62H.781v-1.62Zm14.853 7.953H1.502a.722.722 0 0 1-.72-.721v-4.83h15.574v4.83c0 .397-.323.72-.72.72Zm3.581-12.332-.733 8.785a.722.722 0 0 1-.779.659l-.566-.047V5.607c0-.828-.674-1.502-1.503-1.502H3.42l.275-2.58.001-.008a.722.722 0 0 1 .778-.659l14.085 1.176a.716.716 0 0 1 .49.253.716.716 0 0 1 .168.526Z'
      />
      <path
        fill='#C6C5C6'
        d='M14.722 10.755h-3.76a.39.39 0 0 0-.39.39v2.453c0 .216.174.391.39.391h3.76a.39.39 0 0 0 .39-.39v-2.453a.39.39 0 0 0-.39-.39Zm-.391 2.453h-2.978v-1.672h2.978v1.672Z'
      />
    </svg>
  )
}
export default PaymentHistoryIcon
