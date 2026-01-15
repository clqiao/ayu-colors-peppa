import color from './color.js'

// primary bg
// editor bg
// unbordered line
// secondary_bg
// panel bg
// scheme.ui.fg
// scheme.editor.line

const u = color('FDF1D6') // primary bg
const e = color('ffffff') // editor bg

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
    bg: e`ffffff`, // editor bg
    /** Current line highlight background */
    line: e`DE8C44`.alpha(0.1), // scheme.editor.line
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
        active: e`828E9F`.alpha(0.8),
        /** Line numbers for other lines */
        normal: e`828E9F`.alpha(0.4)
    },
    indentGuide: {
        /** Indent guide at current level */
        active: e`828E9F`.alpha(0.35),
        /** Indent guides at other levels */
        normal: e`828E9F`.alpha(0.18)
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
    /** UI text (sidebars, panels, menus) */
    fg: u`735639`, // scheme.ui.fg
    /** UI background areas */
    bg: u`FDF1D6`, // primary bg
    /** Secondary UI background (derived from bg) */
    secondary_bg: u`FFFAED`,
    /** Separator lines between UI sections */
    line: u`6B7D8F`.alpha(0), // unbordered line
    selection: {
        /** Active/hovered UI item */
        active: u`DE8C44`.alpha(0.3),
        /** Selected UI item */
        normal: u`DE8C44`.alpha(0.2)
    },
    panel: {
        /** Panel backgrounds (explorer, debug) */
        bg: u`FAEEE0`, // panel bg
        /** Drop shadows for panels */
        shadow: u`6B7D8F`.alpha(0.3)
    }
}

const common = {
    accent: {
        /** Primary accent color for highlights, caret, focus states */
        tint: u`EEC255`,
        /** Content color on accent backgrounds */
        on: u`735639`
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
