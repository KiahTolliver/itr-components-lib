export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/buttons/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-buttons-button" */ 'src/buttons/Button.mdx'),
  'src/forms/TextField.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-forms-text-field" */ 'src/forms/TextField.mdx'),
  'src/messages/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-messages-alert" */ 'src/messages/Alert.mdx'),
  'src/typography/typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-typography-typography" */ 'src/typography/typography.mdx'),
}
