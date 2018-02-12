// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  env: 'stage',
  postAccountUrl: 'https://stage.accounts.vssdevelopment.com/v1/accounts',
  postSiteUrl: 'https://stage.sites.vssdevelopment.com/accounts/:aid/sites',
  deleteSiteUrl: 'https://stage.sites.vssdevelopment.com/accounts/:aid/sites/:sid',
  getSitesByAccount: 'https://stage.sites.vssdevelopment.com//accounts/:aid/sites',
  getAccountsByEmail: 'https://stage.accounts.vssdevelopment.com/v1/accounts?accessToken=:accessToken',
  getAccountsById: 'https://stage.accounts.vssdevelopment.com/v1/accounts/:aid',
  deleteAccountById: 'https://stage.accounts.vssdevelopment.com/v1/accounts/:aid',
  clientId: '6i2atc0o3g7abpic96lnfva64e',
  loginUrl: 'https://devconsole.auth.us-east-1.amazoncognito.com',
  redirctUrl: 'https://stage.moodle.vssdevelopment.com/search'


  
  
};
