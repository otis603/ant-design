/**
 * Custom Theme Configuration
 * Based on styles from https://tweakcn.com/themes/cmh8x4f5m000204kwa030649n
 *
 * This file demonstrates how to apply custom theme tokens to Ant Design.
 * Use this with ConfigProvider to theme your application.
 */

import type { ThemeConfig } from 'antd';

/**
 * Convert OKLCH colors to RGB hex format
 * OKLCH provides better perceptual uniformity, but we need to convert for browser support
 *
 * Note: These are approximate conversions. For production use, consider using
 * a color conversion library like culori or color.js for accurate OKLCH -> RGB conversion
 */

// Light theme colors (converted from OKLCH)
const lightTheme = {
  // oklch(1 0 0) -> pure white
  colorBgBase: '#FFFFFF',

  // oklch(0.145 0 0) -> very dark gray, almost black
  colorTextBase: '#1F1F1F',

  // oklch(0.205 0 0) -> dark gray for primary text/elements
  colorPrimary: '#2E2E2E',

  // oklch(0.97 0 0) -> very light gray
  colorBgSecondary: '#F7F7F7',
  colorBgAccent: '#F7F7F7',

  // oklch(0.577 0.245 27.325) -> red/orange for destructive actions
  colorError: '#D93A3A',
  colorErrorBg: '#FFF1F0',
  colorErrorBorder: '#FFCCC7',
};

// Dark theme colors (converted from OKLCH)
const darkTheme = {
  // oklch(0.145 0 0) -> very dark background
  colorBgBase: '#1F1F1F',

  // oklch(0.985 0 0) -> very light, almost white
  colorTextBase: '#FAFAFA',

  // oklch(0.922 0 0) -> light gray for primary
  colorPrimary: '#E8E8E8',

  // oklch(0.269 0 0) -> medium-dark gray
  colorBgSecondary: '#3D3D3D',

  // oklch(0.371 0 0) -> medium gray for accent
  colorBgAccent: '#555555',

  // oklch(0.704 0.191 22.216) -> lighter red for dark mode
  colorError: '#E87878',
  colorErrorBg: '#2C1F1F',
  colorErrorBorder: '#5C3030',
};

// Design tokens from the theme
const designTokens = {
  // Border radius: 0.625rem = 10px
  borderRadius: 10,
  borderRadiusLG: 12,
  borderRadiusSM: 8,
  borderRadiusXS: 4,

  // Typography
  fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyCode: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  // Spacing: 0.25rem = 4px (base unit)
  // Ant Design uses a different spacing system, but we can adjust padding/margin
  padding: 16,
  paddingLG: 24,
  paddingSM: 12,
  paddingXS: 8,
  paddingXXS: 4,

  margin: 16,
  marginLG: 24,
  marginSM: 12,
  marginXS: 8,
  marginXXS: 4,

  // Shadows: oklch(0 0 0) with opacity 0.1, blur 3px, offset 0px 1px
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  boxShadowSecondary: '0px 2px 6px rgba(0, 0, 0, 0.1)',
};

/**
 * Light theme configuration for Ant Design
 * Apply this with ConfigProvider's theme prop
 */
export const lightThemeConfig: ThemeConfig = {
  token: {
    // Colors
    colorPrimary: lightTheme.colorPrimary,
    colorBgBase: lightTheme.colorBgBase,
    colorTextBase: lightTheme.colorTextBase,
    colorError: lightTheme.colorError,
    colorErrorBg: lightTheme.colorErrorBg,
    colorErrorBorder: lightTheme.colorErrorBorder,

    // Border radius
    borderRadius: designTokens.borderRadius,
    borderRadiusLG: designTokens.borderRadiusLG,
    borderRadiusSM: designTokens.borderRadiusSM,
    borderRadiusXS: designTokens.borderRadiusXS,

    // Typography
    fontFamily: designTokens.fontFamily,
    fontFamilyCode: designTokens.fontFamilyCode,

    // Spacing
    padding: designTokens.padding,
    paddingLG: designTokens.paddingLG,
    paddingSM: designTokens.paddingSM,
    paddingXS: designTokens.paddingXS,
    paddingXXS: designTokens.paddingXXS,

    margin: designTokens.margin,
    marginLG: designTokens.marginLG,
    marginSM: designTokens.marginSM,
    marginXS: designTokens.marginXS,
    marginXXS: designTokens.marginXXS,

    // Shadows
    boxShadow: designTokens.boxShadow,
    boxShadowSecondary: designTokens.boxShadowSecondary,
  },
  components: {
    // You can customize individual components here
    Button: {
      primaryColor: lightTheme.colorTextBase,
      primaryShadow: designTokens.boxShadow,
    },
    Input: {
      borderRadius: designTokens.borderRadius,
    },
    Card: {
      borderRadiusLG: designTokens.borderRadiusLG,
    },
  },
};

/**
 * Dark theme configuration for Ant Design
 * Apply this with ConfigProvider's theme prop
 */
export const darkThemeConfig: ThemeConfig = {
  token: {
    // Colors
    colorPrimary: darkTheme.colorPrimary,
    colorBgBase: darkTheme.colorBgBase,
    colorTextBase: darkTheme.colorTextBase,
    colorError: darkTheme.colorError,
    colorErrorBg: darkTheme.colorErrorBg,
    colorErrorBorder: darkTheme.colorErrorBorder,

    // Border radius
    borderRadius: designTokens.borderRadius,
    borderRadiusLG: designTokens.borderRadiusLG,
    borderRadiusSM: designTokens.borderRadiusSM,
    borderRadiusXS: designTokens.borderRadiusXS,

    // Typography
    fontFamily: designTokens.fontFamily,
    fontFamilyCode: designTokens.fontFamilyCode,

    // Spacing
    padding: designTokens.padding,
    paddingLG: designTokens.paddingLG,
    paddingSM: designTokens.paddingSM,
    paddingXS: designTokens.paddingXS,
    paddingXXS: designTokens.paddingXXS,

    margin: designTokens.margin,
    marginLG: designTokens.marginLG,
    marginSM: designTokens.marginSM,
    marginXS: designTokens.marginXS,
    marginXXS: designTokens.marginXXS,

    // Shadows
    boxShadow: designTokens.boxShadow,
    boxShadowSecondary: designTokens.boxShadowSecondary,
  },
  components: {
    // You can customize individual components here
    Button: {
      primaryColor: darkTheme.colorBgBase,
      primaryShadow: designTokens.boxShadow,
    },
    Input: {
      borderRadius: designTokens.borderRadius,
    },
    Card: {
      borderRadiusLG: designTokens.borderRadiusLG,
    },
  },
};

/**
 * Example usage:
 *
 * import { ConfigProvider } from 'antd';
 * import { lightThemeConfig, darkThemeConfig } from './custom-theme-config';
 *
 * function App() {
 *   const [isDark, setIsDark] = useState(false);
 *
 *   return (
 *     <ConfigProvider theme={isDark ? darkThemeConfig : lightThemeConfig}>
 *       <YourApp />
 *     </ConfigProvider>
 *   );
 * }
 */
