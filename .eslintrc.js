module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["universe/native", "prettier"],
  rules: {
    "no-unused-vars": 0,
    "no-undef": 0,
  },
};
