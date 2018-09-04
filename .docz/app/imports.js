export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/buttons/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-buttons-button" */ 'src/buttons/Button.mdx'),
  'src/forms/DropdownList.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-forms-dropdown-list" */ 'src/forms/DropdownList.mdx'),
  'src/forms/TextArea.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-forms-text-area" */ 'src/forms/TextArea.mdx'),
  'src/forms/TextField.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-forms-text-field" */ 'src/forms/TextField.mdx'),
  'src/typography/typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-typography-typography" */ 'src/typography/typography.mdx'),
  'src/messages/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-messages-alert" */ 'src/messages/Alert.mdx'),
}
