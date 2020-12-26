import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CdkBackendStack } from './cdk-exports.json'
const amplifyConfig = {
  aws_appsync_region: CdkBackendStack.ProjectRegion,
  aws_appsync_graphqlEndpoint: CdkBackendStack.AppSyncAPIURL,
  aws_appsync_authenticationType: GRAPHQL_AUTH_MODE.API_KEY,
  aws_appsync_apiKey: CdkBackendStack.AppSyncAPIKey,
}

export default amplifyConfig