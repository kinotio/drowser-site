/** @type {import('next').NextConfig} */
import withNextra from 'nextra'

const nextConfig = {}

const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
}

export default withNextra(nextraConfig)(nextConfig)
