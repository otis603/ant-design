# Custom Theme Configuration for Ant Design

This custom theme applies design tokens from [tweakcn.com](https://tweakcn.com/themes/cmh8x4f5m000204kwa030649n) to Ant Design components.

## 📋 Overview

The theme includes:
- **OKLCH color space** for perceptually uniform colors (converted to RGB hex for browser compatibility)
- **Light and dark mode** configurations
- **Custom border radius** (10px base with scaling)
- **Minimal shadows** (0px 1px 3px with 10% opacity)
- **System font stack** for optimal typography
- **Consistent spacing** based on 4px units

## 🎨 Theme Features

### Colors

#### Light Mode
- Background: `#FFFFFF` (oklch(1 0 0))
- Text: `#1F1F1F` (oklch(0.145 0 0))
- Primary: `#2E2E2E` (oklch(0.205 0 0))
- Secondary/Accent: `#F7F7F7` (oklch(0.97 0 0))
- Error: `#D93A3A` (oklch(0.577 0.245 27.325))

#### Dark Mode
- Background: `#1F1F1F` (oklch(0.145 0 0))
- Text: `#FAFAFA` (oklch(0.985 0 0))
- Primary: `#E8E8E8` (oklch(0.922 0 0))
- Secondary: `#3D3D3D` (oklch(0.269 0 0))
- Accent: `#555555` (oklch(0.371 0 0))
- Error: `#E87878` (oklch(0.704 0.191 22.216))

### Design Tokens

- **Border Radius**: 10px (base), 12px (large), 8px (small), 4px (extra-small)
- **Typography**: System UI font stack (ui-sans-serif, system-ui, etc.)
- **Spacing**: 4px base unit with 8px, 12px, 16px, 24px scales
- **Shadows**: Minimal shadows with 10% opacity and 3px blur

## 🚀 Usage

### Basic Setup

```tsx
import { ConfigProvider } from 'antd';
import { lightThemeConfig, darkThemeConfig } from './custom-theme-config';

function App() {
  return (
    <ConfigProvider theme={lightThemeConfig}>
      <YourApp />
    </ConfigProvider>
  );
}
```

### With Theme Switching

```tsx
import React, { useState } from 'react';
import { ConfigProvider, Switch } from 'antd';
import { lightThemeConfig, darkThemeConfig } from './custom-theme-config';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider theme={isDarkMode ? darkThemeConfig : lightThemeConfig}>
      <div>
        <Switch
          checked={isDarkMode}
          onChange={setIsDarkMode}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
        <YourApp />
      </div>
    </ConfigProvider>
  );
}
```

### Running the Example

See `custom-theme-example.tsx` for a complete working example that demonstrates:
- Theme switching between light and dark modes
- Various Ant Design components styled with the custom theme
- Typography showcase
- Color palette display
- Component variations

## 📁 Files

- **`custom-theme-config.ts`** - Main theme configuration with light and dark theme exports
- **`custom-theme-example.tsx`** - Complete example React component demonstrating theme usage
- **`CUSTOM_THEME_README.md`** - This documentation file

## 🎨 Customization

You can further customize the theme by modifying `custom-theme-config.ts`:

### Adding More Component-Specific Styles

```tsx
export const lightThemeConfig: ThemeConfig = {
  token: {
    // ... existing tokens
  },
  components: {
    Button: {
      primaryColor: '#1F1F1F',
      primaryShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    },
    Card: {
      borderRadiusLG: 12,
      boxShadowTertiary: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    },
    // Add more component customizations
  },
};
```

### Using Ant Design's Theme Algorithms

You can combine the custom theme with Ant Design's built-in algorithms:

```tsx
import { theme } from 'antd';
import { lightThemeConfig } from './custom-theme-config';

<ConfigProvider
  theme={{
    ...lightThemeConfig,
    algorithm: theme.compactAlgorithm, // or theme.darkAlgorithm
  }}
>
  <YourApp />
</ConfigProvider>
```

## 🔗 Resources

- [Ant Design Theme Documentation](https://ant.design/docs/react/customize-theme)
- [Ant Design Design Tokens](https://ant.design/docs/react/customize-theme#seedtoken)
- [Original Theme Source](https://tweakcn.com/themes/cmh8x4f5m000204kwa030649n)
- [OKLCH Color Space](https://oklch.com/)

## 📝 Notes

### OKLCH Color Conversion

The original theme uses OKLCH color space, which provides better perceptual uniformity than HSL or RGB. The colors in this configuration are approximate conversions to RGB hex format for browser compatibility.

For production applications requiring precise OKLCH support, consider using color conversion libraries:
- [culori](https://culorijs.org/)
- [color.js](https://colorjs.io/)

### Browser Support

The theme uses standard CSS properties and should work in all modern browsers. The system font stack ensures optimal typography across different operating systems.

## 🤝 Contributing

To extend or modify this theme:

1. Edit `custom-theme-config.ts` to adjust tokens
2. Test changes in `custom-theme-example.tsx`
3. Update this README with any new features or usage patterns

## 📄 License

This theme configuration follows the same MIT license as Ant Design.
