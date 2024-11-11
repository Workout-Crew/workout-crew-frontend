import CheckIcon from '../_assets/icon/Check'
import ChevronRight from '../_assets/icon/ChevronRight'
import CloseIcon from '../_assets/icon/Close'
import MoreIcon from '../_assets/icon/More'
import SearchIcon from '../_assets/icon/Search'
import { SHAPE_COLOR } from '../_styles/color'

const ICONS = {
  check: CheckIcon,
  chevronRight: ChevronRight,
  close: CloseIcon,
  more: MoreIcon,
  search: SearchIcon,
}

interface Props {
  type: keyof typeof ICONS
  size?: number
  color?: string
}

export default function Icon({
  type,
  size = 28,
  color = SHAPE_COLOR.icon,
}: Props) {
  const Component = ICONS[type]

  return <Component width={size} height={size} color={color} />
}
