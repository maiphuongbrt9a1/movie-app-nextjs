import { titleProps } from '@/types/types'

export default function Title({ title, text }: titleProps) {
  return (
    <div className="space-y-2">
      <h2 className="title">{title}</h2>
      <p className="max-w-3xl">{text}</p>
    </div>
  )
}
