import fetch from 'node-fetch';

function getOrgRepos(org, type = '', sort = 'created') {
  return fetch(`https://api.github.com/orgs/${org}/repos?type=${type}`);
}

getOrgRepos('github').then(
  result => result.json()
).then(
  data => console.log('')
).catch(err => console.error(err));

console.log('END');

