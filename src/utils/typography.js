import Typography from 'typography';
import githubTheme from 'typography-theme-github';
import bootstrapTheme from 'typography-theme-bootstrap';

const typography = new Typography(bootstrapTheme)

export const { scale, rhythm, options } = typography

// githubTheme.overrideThemeStyles = () => ({
//   'ul': {
//     color: `gray`,
//   },
// })



export default typography;