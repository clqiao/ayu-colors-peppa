import color from './color.js'

// u for UI colors
// e for Editor colors
const u = color('f8e8e8')
const e = color('ffffff')

const syntax = {
  tag: e`55B4D4`,
  func: e`F2A300`,
  entity: e`399EE6`,
  string: e`86B300`,
  regexp: e`4CBF99`,
  markup: e`F07171`,
  keyword: e`FF7E33`,
  special: e`D9B077`,
  comment: e`787B80`.alpha(0.6),
  constant: e`A37ACC`,
  operator: e`ED9366`
}

const vcs = {
  added: e`6CBF43`,
  modified: e`478ACC`,
  removed: e`FF7383`
}

const editor = {
  fg: e`5C6166`,
  bg: e`ffffff`,
  line: e`F59DA9`.alpha(0.15),
  selection: {
    active: e`035BD6`.alpha(0.15),
    inactive: e`035BD6`.alpha(0.07)
  },
  findMatch: {
    active: e`FFE294`.alpha(1),
    inactive: e`FFE294`.alpha(0.5)
  },
  gutter: {
    active: e`a08080`.alpha(0.8),
    normal: e`a08080`.alpha(0.4)
  },
  indentGuide: {
    active: e`eda8b2`,
    normal: e`eda8b2`.alpha(0.5)
  },
  indentGuide1: {
    active: e`ff9300`.alpha(0.8),
    normal: e`ff9300`.alpha(0.3)
  },
  indentGuide2: {
    active: e`ffcc00`,
    normal: e`ffcc00`.alpha(0.5)
  },
  indentGuide3: {
    active: e`00bf00`.alpha(0.8),
    normal: e`00bf00`.alpha(0.3)
  },
  indentGuide4: {
    active: e`098aec`.alpha(0.8),
    normal: e`098aec`.alpha(0.3)
  },
  indentGuide5: {
    active: e`9437ff`.alpha(0.8),
    normal: e`9437ff`.alpha(0.3)
  },
  indentGuide6: {
    active: e`ff2f92`.alpha(0.8),
    normal: e`ff2f92`.alpha(0.3)
  }
}

const ui = {
  fg: u`a08080`,
  bg: u`f8e8e8`,
  secondary_bg: u`fcf8f8`,
  line: u`c8a8a8`.alpha(0.5),
  selection: {
    active: u`F59DA9`.alpha(0.4),
    normal: u`F59DA9`.alpha(0.2)
  },
  panel: {
    bg: u`fcf8f8`,
    shadow: u`6B7D8F`.alpha(0.07)
  },
  // Semantic UI colors
  focus_border: u`c8a8a8`.alpha(0.5), // ui.line
  activity_bar_border: u`c8a8a8`.alpha(0.5), // ui.line
  minimap_bg: e`ffffff`, // editor.bg
  side_bar_bg: u`fcf8f8`, // ui.secondary_bg
  editor_group_header_bg: u`fcf8f8`, // ui.secondary_bg
  panel_bg: u`fcf8f8`, // ui.secondary_bg
  status_bar_bg: u`f8e8e8`, // ui.bg
  title_bar_bg: u`f8e8e8` // ui.bg
}

const common = {
  accent: {
    tint: u`F59DA9`,
    on: u`804B00`
  },
  error: u`E65050`,
  red: u`FF0000`,
  green: u`00FF00`,
  blue: u`0000FF`
}

const terminal = {
  black: u`000000`,
  red: u`990000`,
  green: u`00A600`,
  yellow: u`999900`,
  blue: u`8459B2`,
  magenta: u`B200B2`,
  cyan: u`00B0D9`,
  white: u`BFBFBF`,
  brightBlack: u`666666`,
  brightRed: u`E50000`,
  brightGreen: u`00D900`,
  brightYellow: u`E5E500`,
  brightBlue: u`A179CC`,
  brightMagenta: u`E500E5`,
  brightCyan: u`00E5E5`,
  brightWhite: u`E5E5E5`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common,
  terminal
}
