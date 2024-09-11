module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          public: "./src/public",
          assets: "./src/assets",
          services: "./src/services",
          utils: "./src/utils",
          screens: "./src/screens",
          components: "./src/components",
          models: "./src/models",
        },
      },
    ],
  ],
};
