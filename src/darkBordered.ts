import color from './color.js'

const u = color('202224') // primary bg
const e = color('383a3c') // editor bg

const syntax = {
    tag: e`39BAE6`,
    func: e`FFB454`,
    entity: e`59C2FF`,
    string: e`AAD94C`,
    regexp: e`95E6CB`,
    markup: e`F07178`,
    keyword: e`FF8F40`,
    special: e`E6C08A`,
    comment: e`99ADBF`.alpha(0.55),
    constant: e`D2A6FF`,
    operator: e`F29668`
}

const vcs = {
    added: e`70BF56`,
    modified: e`73B8FF`,
    removed: e`F26D78`
}

const editor = {
    fg: e`BFBDB6`,
    bg: e`383a3c`, // editor bg
    line: e`475266`.alpha(0.5),
    selection: {
        active: e`3388FF`.alpha(0.25),
        inactive: e`80B5FF`.alpha(0.15)
    },
    findMatch: {
        active: e`4C4126`,
        inactive: e`4C4126`.alpha(0.5)
    },
    gutter: {
        active: e`6C7380`.alpha(0.9),
        normal: e`6C7380`.alpha(0.6)
    },
    indentGuide: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide1: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide2: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide3: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide4: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide5: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    },
    indentGuide6: {
        active: e`6C7380`.alpha(0.5),
        normal: e`6C7380`.alpha(0.2)
    }
}

const ui = {
    fg: u`9BA4B1`,
    bg: u`202224`, // primary bg
    secondary_bg: u`2a2c2e`,
    line: u`575B66`, // bordered line
    selection: {
        active: u`475266`.alpha(0.25),
        normal: u`475266`.alpha(0.2)
    },
    panel: {
        bg: u`2a2c2e`,
        shadow: u`000000`.alpha(0.5)
    }
}

const common = {
    accent: {
        tint: u`E6B450`,
        on: u`805600`
    },
    error: u`D95757`,
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
