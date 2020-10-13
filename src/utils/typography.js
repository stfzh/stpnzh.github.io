import Typography from 'typography';
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme)

export const { scale, rhythm, options } = typography

// githubTheme.overrideThemeStyles = () => ({
//   'ul': {
//     color: `gray`,
//   },
// })



export default typography;