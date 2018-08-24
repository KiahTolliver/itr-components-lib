export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/basics/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-basics-button" */ 'src/basics/Button.mdx'),
  'src/display/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-display-alert" */ 'src/display/Alert.mdx'),
}
