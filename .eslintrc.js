module.exports = {
  extends: ['universe/web', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
