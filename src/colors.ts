import rawDark from './dark.js'
import rawLight from './light.js'
import rawMirage from './mirage.js'
import rawDarkBordered from './darkBordered.js'
import rawLightBordered from './lightBordered.js'
import rawMirageBordered from './mirageBordered.js'
import rawPowderRoseLight from './powderRoseLight.js'
import rawPowderRoseLightBordered from './powderRoseLightBordered.js'
import rawShibaInuLight from './shibaInuLight.js'
import rawShibaInuLightBordered from './shibaInuLightBordered.js'

export type Scheme = typeof rawDark

export const dark: Scheme = rawDark
export const light: Scheme = rawLight
export const mirage: Scheme = rawMirage
export const darkBordered: Scheme = rawDarkBordered
export const lightBordered: Scheme = rawLightBordered
export const mirageBordered: Scheme = rawMirageBordered
export const powderRoseLight: Scheme = rawPowderRoseLight
export const powderRoseLightBordered: Scheme = rawPowderRoseLightBordered
export const shibaInuLight: Scheme = rawShibaInuLight
export const shibaInuLightBordered: Scheme = rawShibaInuLightBordered

export { alphaBlend } from './color.js'
