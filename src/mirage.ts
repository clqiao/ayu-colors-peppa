import color from './color.js'

// primary bg
// editor bg
// unbordered line
// secondary_bg
// panel bg
// scheme.ui.fg
// scheme.editor.line


const u = color('3b4557') // primary bg
const e = color('554563') // editor bg

const syntax = {
  /** HTML/XML tags, language variables, library classes, CSS properties */
  tag: e`5CCFE6`,
  /** Function names, function calls, tag attributes, list bullets */
  func: e`FFD173`,
  /** Type names, class names, CSS tag names, markup links */
  entity: e`73D0FF`,
  /** String literals, imports/packages, markup headings */
  string: e`D5FF80`,
  /** Regular expressions, escape characters, blockquotes */
  regexp: e`95E6CB`,
  /** Member variables, library functions, markup italic/bold */
  markup: e`F28779`,
  /** Keywords, storage types, template expressions */
  keyword: e`FFAD66`,
  /** Decorators, annotations, markup strikethrough */
  special: e`FFDFB3`,
  /** Code comments (typically rendered italic) */
  comment: e`B8CFE6`.alpha(0.5),
  /** Named constants, function parameters */
  constant: e`DFBFFF`,
  /** Binary operators, accessor punctuation */
  operator: e`F29E74`
}

const vcs = {
  /** New files/lines in version control */
  added: e`87D96C`,
  /** Changed files/lines in version control */
  modified: e`80BFFF`,
  /** Deleted files/lines in version control */
  removed: e`F27983`
}

const editor = {
  /** Main editor text color */
  fg: e`CCCAC2`,
  /** Editor background */
  bg: e`554563`,
  /** Current line highlight background */
  line: e`475266`.alpha(0.5),
  selection: {
    /** Selection highlight when editor is focused */
    active: e`409FFF`.alpha(0.25),
    /** Selection highlight when editor is unfocused */
    inactive: e`409FFF`.alpha(0.13)
  },
  findMatch: {
    /** Current search match highlight */
    active: e`736950`,
    /** Other search match highlights */
    inactive: e`736950`.alpha(0.4)
  },
  gutter: {
    /** Line number for current line */
    active: e`8A9199`.alpha(0.8),
    /** Line numbers for other lines */
    normal: e`8A9199`.alpha(0.4)
  },
  indentGuide: {
    /** Indent guide at current level */
    active: e`8A9199`.alpha(0.35),
    /** Indent guides at other levels */
    normal: e`8A9199`.alpha(0.18)
  }
  ,
  indentGuide1: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  },
  indentGuide2: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  },
  indentGuide3: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  },
  indentGuide4: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  },
  indentGuide5: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  },
  indentGuide6: {
    active: e`8A9199`.alpha(0.35),
    normal: e`8A9199`.alpha(0.18)
  }
}

const ui = {
  /** UI text (sidebars, panels, menus) */
  fg: u`9BA9C2`,
  /** UI background areas */
  bg: u`3b4557`, // primary bg
  /** Secondary UI background (derived from bg) */
  secondary_bg: u`413F5C`,
  /** Separator lines between UI sections */
  line: u`575B66`.alpha(0), // unbordered line
  selection: {
    /** Active/hovered UI item */
    active: u`637599`.alpha(0.15),
    /** Selected UI item */
    normal: u`69758C`.alpha(0.12)
  },
  panel: {
    /** Panel backgrounds (explorer, debug) */
    bg: u`664D5D`,
    /** Drop shadows for panels */
    shadow: u`000000`.alpha(0.2)
  },
  // Semantic UI colors
  focus_border: u`575B66`.alpha(0),            // unbordered line
  activity_bar_border: u`575B66`.alpha(0),     // unbordered line
  
  minimap_bg: u`413F5C`,             // secondary_bg
  side_bar_bg: u`413F5C`,            // secondary_bg
  editor_group_header_bg: u`413F5C`, // secondary_bg
  
  status_bar_bg: u`3b4557`, // primary bg
  title_bar_bg: u`3b4557`   // primary bg
}

const common = {
  accent: {
    /** Primary accent color for highlights, caret, focus states */
    tint: u`FFCC66`,
    /** Content color on accent backgrounds */
    on: u`805500`
  },
  /** Error messages and error states */
  error: u`FF6666`
  ,
  /** Basic primary colors for use in themes */
  red: u`FF0000`,
  green: u`00FF00`,
  blue: u`0000FF`
}

const terminal = {
  black: ui.line,
  red: syntax.markup.darken(0.1),
  green: vcs.added,
  yellow: syntax.func.darken(0.1),
  blue: syntax.entity.darken(0.1),
  magenta: syntax.constant.darken(0.1),
  cyan: syntax.regexp.darken(0.1),
  white: u`c7c7c7`,
  brightBlack: u`686868`,
  brightRed: syntax.markup,
  brightGreen: syntax.string,
  brightYellow: syntax.func,
  brightBlue: syntax.entity,
  brightMagenta: syntax.constant,
  brightCyan: syntax.regexp,
  brightWhite: u`ffffff`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common,
  terminal
}
