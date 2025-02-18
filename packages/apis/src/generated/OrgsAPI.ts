import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Organization,
  Organizations,
  PatchOrganizationRequest,
  PostOrganizationRequest,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  SecretKeys,
  SecretKeysResponse,
  Secrets,
} from './types'

export interface GetOrgsRequest {
  offset?: number
  limit?: number
  descending?: any
  /** Filter organizations to a specific organization name. */
  org?: string
  /** Filter organizations to a specific organization ID. */
  orgID?: string
  /** Filter organizations to a specific user ID. */
  userID?: string
}
export interface PostOrgsRequest {
  /** Organization to create */
  body: PostOrganizationRequest
}
export interface GetOrgsIDRequest {
  /** The ID of the organization to get. */
  orgID: string
}
export interface PatchOrgsIDRequest {
  /** The ID of the organization to get. */
  orgID: string
  /** Organization update to apply */
  body: PatchOrganizationRequest
}
export interface DeleteOrgsIDRequest {
  /** The ID of the organization to delete. */
  orgID: string
}
export interface GetOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
}
export interface PatchOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
  /** Secret key value pairs to update/add */
  body: Secrets
}
export interface GetOrgsIDMembersRequest {
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDMembersRequest {
  /** The organization ID. */
  orgID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
export interface GetOrgsIDOwnersRequest {
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDOwnersRequest {
  /** The organization ID. */
  orgID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
  /** Secret key to delete */
  body: SecretKeys
}
export interface DeleteOrgsIDSecretsIDRequest {
  /** The organization ID. */
  orgID: string
  /** The secret ID. */
  secretID: string
}
/**
 * Orgs API
 */
export class OrgsAPI {
  // internal
  private base: APIBase

  /**
   * Creates OrgsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all organizations.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetOrgs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getOrgs(
    request?: GetOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organizations> {
    return this.base.request(
      'GET',
      `/api/v2/orgs${this.base.queryString(request, [
        'offset',
        'limit',
        'descending',
        'org',
        'orgID',
        'userID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostOrgs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postOrgs(
    request: PostOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'POST',
      `/api/v2/orgs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetOrgsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getOrgsID(
    request: GetOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PatchOrgsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchOrgsID(
    request: PatchOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteOrgsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteOrgsID(
    request: DeleteOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all secret keys for an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetOrgsIDSecrets }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getOrgsIDSecrets(
    request: GetOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<SecretKeysResponse> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions
    )
  }
  /**
   * Update secrets in an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PatchOrgsIDSecrets }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchOrgsIDSecrets(
    request: PatchOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * List all members of an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetOrgsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getOrgsIDMembers(
    request: GetOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostOrgsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postOrgsIDMembers(
    request: PostOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteOrgsIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteOrgsIDMembersID(
    request: DeleteOrgsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetOrgsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getOrgsIDOwners(
    request: GetOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostOrgsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postOrgsIDOwners(
    request: PostOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteOrgsIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteOrgsIDOwnersID(
    request: DeleteOrgsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Delete secrets from an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostOrgsIDSecrets }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postOrgsIDSecrets(
    request: PostOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/secrets/delete`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a secret from an organization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteOrgsIDSecretsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteOrgsIDSecretsID(
    request: DeleteOrgsIDSecretsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/secrets/${request.secretID}`,
      request,
      requestOptions
    )
  }
}
