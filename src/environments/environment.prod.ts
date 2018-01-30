export const environment = {
  production: true,
  env: 'prod',
  postUserUrl: 'https://users.vssdevelopment.com/dev/v1/users',
  postSiteUrl: 'https://prod.sites.vssdevelopment.com/accounts/:aid/sites',
  deleteSiteUrl: 'https://prod.sites.vssdevelopment.com/accounts/:aid/sites/:sid',
  getSitesByAccount: 'https://prod.sites.vssdevelopment.com//accounts/:aid/sites',
  getAccountsByEmail: 'https://prod.accounts.vssdevelopment.com/v1/accounts?email=:email',
  getAccountsById: 'https://prod.accounts.vssdevelopment.com/v1/accounts/:aid',
  deleteAccountById: 'https://prod.accounts.vssdevelopment.com/v1/accounts/:aid'

  
};
