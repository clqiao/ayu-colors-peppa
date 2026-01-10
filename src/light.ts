import color from './color.js'

const u = color('F8F9FA')
const e = color('FCFCFC')

const syntax = {
  /** HTML/XML tags, language variables, library classes, CSS properties */
  tag: e`55B4D4`,
  /** Function names, function calls, tag attributes, list bullets */
  func: e`F2A300`,
  /** Type names, class names, CSS tag names, markup links */
  entity: e`399EE6`,
  /** String literals, imports/packages, markup headings */
  string: e`86B300`,
  /** Regular expressions, escape characters, blockquotes */
  regexp: e`4CBF99`,
  /** Member variables, library functions, markup italic/bold */
  markup: e`F07171`,
  /** Keywords, storage types, template expressions */
  keyword: e`FF7E33`,
  /** Decorators, annotations, markup strikethrough */
  special: e`D9B077`,
  /** Code comments (typically rendered italic) */
  comment: e`787B80`.alpha(0.6),
  /** Named constants, function parameters */
  constant: e`A37ACC`,
  /** Binary operators, accessor punctuation */
  operator: e`ED9366`
}

const vcs = {
  /** New files/lines in version control */
  added: e`6CBF43`,
  /** Changed files/lines in version control */
  modified: e`478ACC`,
  /** Deleted files/lines in version control */
  removed: e`FF7383`
}

const editor = {
  /** Main editor text color */
  fg: e`5C6166`,
  /** Editor background */
  bg: e`ffffff`,
  /** Current line highlight background */
  line: e`F59DA9`.alpha(0.15),
  selection: {
    /** Selection highlight when editor is focused */
    active: e`035BD6`.alpha(0.15),
    /** Selection highlight when editor is unfocused */
    inactive: e`035BD6`.alpha(0.07)
  },
  findMatch: {
    /** Current search match highlight */
    active: e`FFE294`.alpha(1),
    /** Other search match highlights */
    inactive: e`FFE294`.alpha(0.5)
  },
  gutter: {
    /** Line number for current line */
    active: e`a08080`.alpha(0.8), // 828E9F
    /** Line numbers for other lines */
    normal: e`a08080`.alpha(0.4) // 828E9F
  },
  indentGuide: {
    /** Indent guide at current level */
    active: e`eda8b2`,
    /** Indent guides at other levels */
    normal: e`eda8b2`.alpha(0.5)
  }
    ,
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
  /** UI text (sidebars, panels, menus) */
  fg: u`a08080`, // a08080
  /** UI background areas */
  bg: u`f8e8e8`,
  /** Secondary UI background (derived from bg) */
  secondary_bg: u`fcf8f8`,
  /** Separator lines between UI sections */
  line: u`c8a8a8`.alpha(0.5),
  selection: {
    /** Active/hovered UI item */
    active: u`F59DA9`.alpha(0.4), // 56728F
    /** Selected UI item */
    normal: u`F59DA9`.alpha(0.2) // 6B7D8F
  },
  panel: {
    /** Panel backgrounds (explorer, debug) */
    bg: u`fcf8f8`,
    /** Drop shadows for panels */
    shadow: u`6B7D8F`.alpha(0.07)
  }
}

const unbordered_ui = {
  /** UI text (sidebars, panels, menus) */
  fg: u`806060`, // a08080
  /** UI background areas */
  bg: u`F4CBC8`,
  /** Secondary UI background (derived from bg) */
  secondary_bg: u`f8e8e8`,
  /** Separator lines between UI sections */
  line: u`c8a8a8`.alpha(0),
  selection: {
    /** Active/hovered UI item */
    active: u`F59DA9`.alpha(0.6), // 56728F
    /** Selected UI item */
    normal: u`F59DA9`.alpha(0.3) // 6B7D8F
  },
  panel: {
    /** Panel backgrounds (explorer, debug) */
    bg: u`f3e3d4`, // f8e8e8
    /** Drop shadows for panels */
    shadow: u`6B7D8F`.alpha(0.7)
  }
}

const common = {
  accent: {
    /** Primary accent color for highlights, caret, focus states */
    tint: u`F59DA9`, // fd6f3b 3DB6EF eda8b2
    /** Content color on accent backgrounds */
    on: u`804B00`
  },
  /** Error messages and error states */
  error: u`E65050`
    ,
    /** Basic primary colors for use in themes */
    red: u`FF0000`,
    green: u`00FF00`,
    blue: u`0000FF`
}

const terminal = {
  black: u`240219`,
  red: syntax.markup.darken(0.1),
  green: vcs.added,
  yellow: syntax.func.darken(0.1),
  blue: syntax.entity.darken(0.1),
  magenta: syntax.constant.darken(0.1),
  cyan: syntax.regexp.darken(0.1),
  white: u`BFBFBF`,
  brightBlack: u`666666`,
  brightRed: syntax.markup,
  brightGreen: syntax.string,
  brightYellow: syntax.func,
  brightBlue: syntax.entity,
  brightMagenta: syntax.constant,
  brightCyan: syntax.regexp,
  brightWhite: u`E5E5E5`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  unbordered_ui,
  common,
  terminal
}
