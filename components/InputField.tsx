import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { inputProps } from '@/types/types'

export default function InputField({
  label,
  type,
  id,
  placeholder,
}: inputProps) {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={`${id}`}>{label}</Label>
      <Input type={type} id={`${id}`} placeholder={placeholder} />
    </div>
  )
}
