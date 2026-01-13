import color from './color.js'

// primary bg
// editor bg
// bordered line
// secondary_bg
// panel bg
// scheme.ui.fg
// scheme.editor.line


const u = color('353350') // primary bg
const e = color('554563') // editor bg

const syntax = {
    tag: e`5CCFE6`,
    func: e`FFD580`,
    entity: e`73D0FF`,
    string: e`BAE67E`,
    regexp: e`95E6CB`,
    markup: e`F07178`,
    keyword: e`FFA759`,
    special: e`E6C08A`,
    comment: e`B8CFE6`.alpha(0.5),
    constant: e`D4BFFF`,
    operator: e`F29668`
}

const vcs = {
    added: e`A6CC70`,
    modified: e`77A8D9`,
    removed: e`F27983`
}

const editor = {
    fg: e`CBCCC6`,
    bg: e`554563`, // editor bg
    line: e`475266`.alpha(0.5),
    selection: {
        active: e`3399FF`.alpha(0.2),
        inactive: e`66A3FF`.alpha(0.12)
    },
    findMatch: {
        active: e`4C4126`,
        inactive: e`4C4126`.alpha(0.5)
    },
    gutter: {
        active: e`6C7380`.alpha(0.8),
        normal: e`6C7380`.alpha(0.5)
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
    fg: u`9BA9C2`,
    bg: u`353350`, // primary bg
    secondary_bg: u`413F5C`,
    line: u`575B66`, // bordered line
    selection: {
        active: u`637599`.alpha(0.15),
        normal: u`69758C`.alpha(0.12)
    },
    panel: {
        bg: u`413F5C`,
        shadow: u`000000`.alpha(0.2)
    },
    // Semantic UI colors
    focus_border: u`575B66`,        // bordered line
    activity_bar_border: u`575B66`, // bordered line

    minimap_bg: e`413F5C`,             // secondary_bg
    side_bar_bg: u`413F5C`,            // secondary_bg
    editor_group_header_bg: u`413F5C`, // secondary_bg

    status_bar_bg: u`353350`, // primary bg
    title_bar_bg: u`353350`   // primary bg
}

const common = {
    accent: {
        tint: u`FFCC66`,
        on: u`805500`
    },
    error: u`FF6666`,
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
