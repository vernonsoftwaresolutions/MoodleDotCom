// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  env: 'dev',
  postAccountUrl: 'https://dev.accounts.vssdevelopment.com/v1/accounts',
  postSiteUrl: 'https://dev.sites.vssdevelopment.com/accounts/:aid/sites',
  deleteSiteUrl: 'https://dev.sites.vssdevelopment.com/accounts/:aid/sites/:sid',
  getSitesByAccount: 'https://dev.sites.vssdevelopment.com/accounts/:aid/sites',
  getAccountsByEmail: 'https://dev.accounts.vssdevelopment.com/v1/accounts?accessToken=:accessToken',
  getAccountsById: 'https://dev.accounts.vssdevelopment.com/v1/accounts/:aid',
  deleteAccountById: 'https://dev.accounts.vssdevelopment.com/v1/accounts/:aid',
  clientId: '6h8neevaj8ud8gal236671i1m6',
  loginUrl: 'https://devmoodle.auth.us-east-1.amazoncognito.com',
  redirctUrl: 'https://dev.moodle.vssdevelopment.com/search',
  tokenUrl: 'https://devmoodle.auth.us-east-1.amazoncognito.com/oauth2/token'

};
