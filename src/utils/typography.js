import Typography from 'typography';
// import githubTheme from 'typography-theme-github';
import bootstrapTheme from 'typography-theme-bootstrap';

const typography = new Typography(bootstrapTheme)
// const typography = new Typography(githubTheme)

export const { scale, rhythm, options } = typography

export default typography;