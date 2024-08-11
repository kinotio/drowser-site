import withNextra from "nextra";

const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
};

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextra(nextraConfig)(nextConfig);
