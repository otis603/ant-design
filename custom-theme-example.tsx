/**
 * Example React Component Using Custom Theme
 * This demonstrates how to use the custom theme configuration from tweakcn.com
 */

import React, { useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  Input,
  Space,
  Switch,
  Typography,
  Divider,
  Alert,
} from 'antd';
import { lightThemeConfig, darkThemeConfig } from './custom-theme-config';

const { Title, Paragraph, Text } = Typography;

/**
 * Main application component with theme switching
 */
const CustomThemeExample: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider theme={isDarkMode ? darkThemeConfig : lightThemeConfig}>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: isDarkMode ? '#1F1F1F' : '#FFFFFF',
          padding: '24px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
          {/* Header with theme toggle */}
          <Card>
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <Title level={2} style={{ margin: 0 }}>
                Ant Design Custom Theme
              </Title>
              <Space>
                <Text>Light</Text>
                <Switch
                  checked={isDarkMode}
                  onChange={setIsDarkMode}
                  checkedChildren="🌙"
                  unCheckedChildren="☀️"
                />
                <Text>Dark</Text>
              </Space>
            </Space>
            <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
              This theme uses design tokens from tweakcn.com with OKLCH color space,
              custom border radius (10px), and minimal shadows.
            </Paragraph>
          </Card>

          {/* Components showcase */}
          <Card title="Components">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {/* Buttons */}
              <div>
                <Title level={4}>Buttons</Title>
                <Space wrap>
                  <Button type="primary">Primary Button</Button>
                  <Button>Default Button</Button>
                  <Button type="dashed">Dashed Button</Button>
                  <Button type="text">Text Button</Button>
                  <Button type="link">Link Button</Button>
                  <Button danger>Danger Button</Button>
                </Space>
              </div>

              <Divider />

              {/* Inputs */}
              <div>
                <Title level={4}>Inputs</Title>
                <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
                  <Input placeholder="Enter text here" />
                  <Input.Password placeholder="Enter password" />
                  <Input.TextArea
                    placeholder="Enter multiline text"
                    rows={4}
                  />
                </Space>
              </div>

              <Divider />

              {/* Alerts */}
              <div>
                <Title level={4}>Alerts</Title>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Alert message="Info message" type="info" showIcon />
                  <Alert message="Success message" type="success" showIcon />
                  <Alert message="Warning message" type="warning" showIcon />
                  <Alert message="Error message" type="error" showIcon />
                </Space>
              </div>
            </Space>
          </Card>

          {/* Typography showcase */}
          <Card title="Typography">
            <Space direction="vertical" size="small">
              <Title level={1}>Heading 1</Title>
              <Title level={2}>Heading 2</Title>
              <Title level={3}>Heading 3</Title>
              <Title level={4}>Heading 4</Title>
              <Paragraph>
                This is a paragraph with <Text strong>strong text</Text>,{' '}
                <Text italic>italic text</Text>, and <Text code>inline code</Text>.
              </Paragraph>
              <Paragraph>
                Font family: ui-sans-serif, system-ui, -apple-system with 10px border radius
                and subtle shadows for depth.
              </Paragraph>
            </Space>
          </Card>

          {/* Color palette showcase */}
          <Card title="Color Palette">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong>Current Mode: {isDarkMode ? 'Dark' : 'Light'}</Text>
              </div>
              <div>
                <Paragraph>
                  <Text strong>Background:</Text>{' '}
                  {isDarkMode ? '#1F1F1F (oklch(0.145 0 0))' : '#FFFFFF (oklch(1 0 0))'}
                </Paragraph>
                <Paragraph>
                  <Text strong>Text:</Text>{' '}
                  {isDarkMode ? '#FAFAFA (oklch(0.985 0 0))' : '#1F1F1F (oklch(0.145 0 0))'}
                </Paragraph>
                <Paragraph>
                  <Text strong>Primary:</Text>{' '}
                  {isDarkMode ? '#E8E8E8 (oklch(0.922 0 0))' : '#2E2E2E (oklch(0.205 0 0))'}
                </Paragraph>
                <Paragraph>
                  <Text strong>Error:</Text>{' '}
                  {isDarkMode
                    ? '#E87878 (oklch(0.704 0.191 22.216))'
                    : '#D93A3A (oklch(0.577 0.245 27.325))'}
                </Paragraph>
              </div>
            </Space>
          </Card>

          {/* Theme details */}
          <Card title="Theme Configuration Details">
            <Space direction="vertical" size="small">
              <Paragraph>
                <Text strong>Border Radius:</Text> 10px (base), 12px (large), 8px (small), 4px (extra-small)
              </Paragraph>
              <Paragraph>
                <Text strong>Shadows:</Text> 0px 1px 3px rgba(0, 0, 0, 0.1)
              </Paragraph>
              <Paragraph>
                <Text strong>Spacing:</Text> 4px base unit with 8px, 12px, 16px, 24px scales
              </Paragraph>
              <Paragraph>
                <Text strong>Color Space:</Text> OKLCH (perceptually uniform, converted to RGB hex)
              </Paragraph>
            </Space>
          </Card>
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default CustomThemeExample;
