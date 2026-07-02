import { titleProps } from '@/types/types'

export default function Title({ title, text }: titleProps) {
  return (
    <div>
      <h2 className="">{title}</h2>
      <p className="">{text}</p>
    </div>
  )
}
