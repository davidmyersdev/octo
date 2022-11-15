// https://github.com/mermaid-js/mermaid/blob/449dfe8b8ef41909eeef65f2adbd8a0411b36396/packages/mermaid/src/themes/theme-base.js
import { adjust, contrast, darken, invert, lighten } from 'khroma'
import { toEl } from '/src/utils/dom'

// Todo: Pull this from the app configuration.
const background = '#121212'
const font = '"Inter", helvetica, sans-serif'

const primary = adjust('rgb(59, 130, 246)', { h: 10 })

const makeColors = (color: string) => {
  const lighter = lighten(color, 50)
  const darker = darken(color, 50)

  return {
    background: color,
    border: darken(color, 5),
    text: contrast(lighter, color) > contrast(darker, color) ? lighter : darker,
  }
}

const colors = {
  primary: makeColors(primary),
  secondary: makeColors(adjust(primary, { h: 30 })),
  tertiary: makeColors(adjust(primary, { h: 60 })),
  fourth: makeColors(adjust(primary, { h: 90 })),
  fifth: makeColors(adjust(primary, { h: 120 })),
  sixth: makeColors(adjust(primary, { h: 150 })),
  seventh: makeColors(adjust(primary, { h: 180 })),
  eighth: makeColors(adjust(primary, { h: 210 })),
  ninth: makeColors(adjust(primary, { h: 240 })),
  tenth: makeColors(adjust(primary, { h: 270 })),
  eleventh: makeColors(adjust(primary, { h: 300 })),
  twelfth: makeColors(adjust(primary, { h: 330 })),
  neutral: makeColors('#eaeaea'),
  active: makeColors(primary),
  inactive: makeColors('#777777'),
  danger: makeColors('#ff0000'),
}

const textSize = '16px'
const textSizeLarge = '24px'

const makePattern = (id: string, pattern: string) => {
  return `
    <defs xmlns="http://www.w3.org/2000/svg">
      <pattern id="${id}" height="10" width="10" patternUnits="userSpaceOnUse">
        ${pattern}
      </pattern>
    </defs>
  `
}

const makeStripes = (colorKey: keyof typeof colors) => {
  return makePattern(`stripes-${colorKey}`, `
    <rect class="ignore" height="100%" width="100%" fill="${background}" />
    <line class="ignore" x1="0" y1="0" x2="10" y2="10" stroke="${colors[colorKey].background}" stroke-width="1px" stroke-linecap="square" />
  `)
}

const makeScale = (index: number, color: string) => {
  const backgroundKey = `cScale${index}`
  const foregroundKey = `cScaleInv${index}`
  const borderKey = `cScalePeer${index}`

  return {
    [backgroundKey]: color,
    [foregroundKey]: invert(color),
    [borderKey]: darken(color, 10),
  }
}

export const buildSvg = (html: string) => {
  const svg = toEl<SVGElement>(html)
  const colorKeys = Object.keys(colors) as Array<keyof typeof colors>

  colorKeys.forEach((colorKey: keyof typeof colors) => {
    svg.insertAdjacentHTML('afterbegin', makeStripes(colorKey))
  })

  return svg
}

export const themeCss = `
  .edgeLabel:not(:empty) {
    border-radius: 2px;
    padding: 2px 4px;
  }

  svg {
    stroke-linejoin: round;
    line-height: 1.5;
    margin: auto;
    max-width: 100%;
  }

  svg marker#arrowhead path {
    d: path('M 1,1 L5,5 L1,9 L10,5 Z');
  }

  svg marker#crosshead path:first-child {
    d: path('M 10,1.75 L12,4 L10,6.25 L15,4 Z');
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 0.5px;
  }

  svg marker#crosshead path:last-child {
    d: path('M2.5,1.5 L7.5,6.5 M7.5,1.5 L2.5,6.5');
    stroke-linecap: round;
    stroke-width: 0.75px;
    stroke-linejoin: round;
  }

  svg marker#flowchart-pointEnd path {
    d: path('M 1,1 L5,5 L1,9 L10,5 Z');
  }

  svg circle:not(.ignore),
  svg line:not(.ignore),
  svg polygon:not(.ignore),
  svg rect:not(.ignore) {
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px !important;
  }

  svg .commit-label-bkg {
    stroke: ${darken(colors.inactive.background, 30)};
    stroke-linejoin: round;
    stroke-width: 2px !important;
  }

  svg .edge-pattern-dotted {
    stroke-linecap: round;
    stroke-dasharray: 2, 4 !important;
  }

  svg .loopLine {
    opacity: 0.8;
    stroke-dasharray: 2, 4 !important;
  }

  svg .mindmap-node {
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px !important;
  }

  svg .section,
  svg .task {
    opacity: 0.75;
  }
`

export const themeVariables = {
  // Shared
  background,
  primaryColor: colors.primary.background,
  secondaryColor: colors.secondary.background,
  tertiaryColor: colors.tertiary.background,
  primaryTextColor: colors.primary.text,
  secondaryTextColor: colors.secondary.text,
  tertiaryTextColor: colors.tertiary.text,
  mainBkg: colors.primary.background,
  secondBkg: colors.secondary.background,
  tertiaryBkg: colors.tertiary.background,
  primaryBorderColor: colors.primary.border,
  secondaryBorderColor: colors.secondary.border,
  tertiaryBorderColor: colors.tertiary.border,
  lineColor: colors.neutral.background,
  fontFamily: font,
  fontSize: textSize,
  labelBackground: colors.neutral.background,
  labelTextColor: colors.primary.text,
  textColor: invert(colors.primary.text),
  titleColor: invert(colors.secondary.text),
  THEME_COLOR_LIMIT: 12,

  // Notes
  // noteBkgColor: '',
  // noteBorderColor: '',
  // noteTextColor: '',

  // Diagram: C4
  personBkg: colors.primary.background,
  personBorder: colors.primary.border,

  // Diagram: Flowchart
  clusterBkg: 'url(#stripes-secondary)',
  clusterBorder: colors.secondary.border,
  edgeLabelBackground: adjust(colors.tertiary.background, { a: -0.2 }),
  nodeTextColor: colors.tertiary.text,

  // Diagram: Gantt
  sectionBkgColor: 'url(#stripes-primary)',
  altSectionBkgColor: 'url(#stripes-secondary)',
  sectionBkgColor2: 'url(#stripes-tertiary)',
  taskBkgColor: colors.neutral.background,
  taskBorderColor: colors.neutral.border,
  taskTextColor: colors.primary.text,
  // taskTextOutsideColor: '',
  // taskTextClickableColor: '',
  activeTaskBkgColor: colors.active.background,
  activeTaskBorderColor: colors.active.border,
  taskTextDarkColor: colors.active.text,
  gridColor: colors.tertiary.border,
  doneTaskBkgColor: colors.inactive.background,
  doneTaskBorderColor: colors.inactive.border,
  critBkgColor: colors.danger.background,
  critBorderColor: colors.danger.border,
  todayLineColor: colors.secondary.background,

  // Diagram: Git
  commitLabelColor: invert(colors.primary.text),
  commitLabelBackground: darken(colors.inactive.background, 30),
  // commitLabelFontSize: '',
  git0: colors.primary.background,
  git1: colors.secondary.background,
  git2: colors.tertiary.background,
  git3: colors.fourth.background,
  git4: colors.fifth.background,
  git5: colors.sixth.background,
  git6: colors.seventh.background,
  git7: colors.eighth.background,
  gitInv0: colors.neutral.background,
  gitInv1: colors.neutral.background,
  gitInv2: colors.neutral.background,
  gitInv3: colors.neutral.background,
  gitInv4: colors.neutral.background,
  gitInv5: colors.neutral.background,
  gitInv6: colors.neutral.background,
  gitInv7: colors.neutral.background,

  // Diagram: Pie
  pie1: colors.primary.background,
  pie2: colors.secondary.background,
  pie3: colors.tertiary.background,
  pie4: colors.fourth.background,
  pie5: colors.fifth.background,
  pie6: colors.sixth.background,
  pie7: colors.seventh.background,
  pie8: colors.eighth.background,
  pie9: colors.ninth.background,
  pie10: colors.tenth.background,
  pie11: colors.eleventh.background,
  pie12: colors.twelfth.background,
  pieTitleTextSize: textSizeLarge,
  pieTitleTextColor: invert(colors.primary.text),
  pieSectionTextSize: textSize,
  pieSectionTextColor: colors.primary.text,
  pieLegendTextSize: textSize,
  pieLegendTextColor: invert(colors.primary.text),
  pieStrokeColor: background,
  pieStrokeWidth: '2px',
  pieOpacity: '1',

  // Diagram: Sequence
  actorTextColor: colors.primary.text,
  actorLineColor: colors.neutral.background,
  signalColor: colors.neutral.background,
  activationBkgColor: colors.secondary.background,
  activationBorderColor: colors.secondary.border,
  loopTextColor: invert(colors.neutral.text),

  // Diagram: State
  labelColor: 'black',
  errorBkgColor: '#552222',
  errorTextColor: '#552222',
  ...makeScale(0, colors.primary.background),
  ...makeScale(1, colors.secondary.background),
  ...makeScale(2, colors.tertiary.background),
  ...makeScale(3, colors.fourth.background),
  ...makeScale(4, colors.fifth.background),
  ...makeScale(5, colors.sixth.background),
  ...makeScale(6, colors.seventh.background),
  ...makeScale(7, colors.eighth.background),
  ...makeScale(8, colors.ninth.background),
  ...makeScale(9, colors.tenth.background),
  ...makeScale(10, colors.eleventh.background),
  ...makeScale(11, colors.twelfth.background),
}
