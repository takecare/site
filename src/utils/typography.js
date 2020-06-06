import Typography from "typography"
import theme from "typography-theme-noriega"

theme.scaleRation = 2
theme.baseFontSize = 18
theme.baseLineHeight = 1.5
// FIXME can't get paragraphSpacing customised in any way
theme.paragraphSpacing = 10

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
