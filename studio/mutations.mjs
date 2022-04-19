import fetch from 'node-fetch';
import {config} from 'dotenv-flow'
// import leftColMutations from "./leftColMutations.mjs"
import leftColMutationSingle from "./leftColMutationSingle.mjs"
config();
const tokenWithWriteAccess = process.env.SANITY_ADMIN_TOKEN;
console.log(tokenWithWriteAccess);

const projectId = "omde8c75";
const datasetName = "dev";

const mutations = [{
  // createOrReplace: {
  //   _id: '123',
  //   _type: 'cms.article',
  //   title: 'An article'
  // }
  patch: {
    id: 'daytimeMenu',
    // insert: leftColMutations
    insert: leftColMutationSingle
  }
}]

fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/mutate/${datasetName}`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${tokenWithWriteAccess}`
  },
  body: JSON.stringify({mutations})
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))