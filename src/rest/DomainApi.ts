/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AbstractJsonSchemaPropertyObject {
  title?: string;
  readOnly?: boolean;
}

export interface Item {
  type?: string;
  properties?: Record<string, AbstractJsonSchemaPropertyObject>;
  requiredProperties?: string[];
}

export interface JsonSchema {
  title?: string;
  description?: string;
  properties?: Record<string, AbstractJsonSchemaPropertyObject>;
  requiredProperties?: string[];
  definitions?: Record<string, Item>;
  type?: string;
  $schema?: string;
}

export type Links = Record<string, Link>;

export interface RepresentationModelObject {
  _links?: Links;
}

export interface EntityModelExam {
  /** @format int64 */
  id?: number;
  name?: string;
  username?: string;
  _links?: Links;
}

export interface PageMetadata {
  /** @format int64 */
  size?: number;
  /** @format int64 */
  totalElements?: number;
  /** @format int64 */
  totalPages?: number;
  /** @format int64 */
  number?: number;
}

export interface PagedModelEntityModelExam {
  _embedded?: {
    exams?: EntityModelExam[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelQuestion {
  _embedded?: {
    questions?: QuestionResponse[];
  };
  _links?: Links;
}

export interface CollectionModelObject {
  _embedded?: {
    objects?: object[];
  };
  _links?: Links;
}

export interface GrantedAuthority {
  authority?: string;
}

export interface EntityModelClient {
  id?: string;
  clientId?: string;
  /** @format date-time */
  clientIdIssuedAt?: string;
  clientSecret?: string;
  /** @format date-time */
  clientSecretExpiresAt?: string;
  clientName?: string;
  clientAuthenticationMethods?: string;
  authorizationGrantTypes?: string;
  redirectUris?: string;
  postLogoutRedirectUris?: string;
  scopes?: string;
  clientSettings?: string;
  tokenSettings?: string;
  enabled?: boolean;
  username?: string;
  authorities?: GrantedAuthority[];
  password?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  _links?: Links;
}

export interface PagedModelEntityModelClient {
  _embedded?: {
    clients?: EntityModelClient[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface ApplicationUser {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  authorities?: GrantedAuthority[];
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
}

export interface EntityModelExamSession {
  /** @format int64 */
  id?: number;
  teacher?: ApplicationUser;
  _links?: Links;
}

export interface PagedModelEntityModelExamSession {
  _embedded?: {
    examSessions?: EntityModelExamSession[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelApplicationUser {
  _embedded?: {
    applicationUsers?: ApplicationUserResponse[];
  };
  _links?: Links;
}

export interface EntityModelStudentAnswer {
  /** @format int64 */
  id?: number;
  student?: ApplicationUser;
  studentSolution?: string;
  _links?: Links;
}

export interface PagedModelEntityModelStudentAnswer {
  _embedded?: {
    studentAnswers?: EntityModelStudentAnswer[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface EntityModelRole {
  /** @format int32 */
  roleId?: number;
  authority?: string;
  _links?: Links;
}

export interface PagedModelEntityModelRole {
  _embedded?: {
    roles?: EntityModelRole[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface EntityModelQuestion {
  /** @format int64 */
  id?: number;
  problem?: string;
  solution?: string;
  choices?: string[];
  _links?: Links;
}

export interface PagedModelEntityModelQuestion {
  _embedded?: {
    questions?: EntityModelQuestion[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface EntityModelApplicationUser {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
  _links?: Links;
}

export interface PagedModelEntityModelApplicationUser {
  _embedded?: {
    applicationUsers?: EntityModelApplicationUser[];
  };
  _links?: Links;
  page?: PageMetadata;
}

export interface CollectionModelRole {
  _embedded?: {
    roles?: RoleResponse[];
  };
  _links?: Links;
}

export interface ApplicationUserRequestBody {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  authorities?: string[];
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
}

export interface RoleResponse {
  /** @format int32 */
  roleId?: number;
  authority?: string;
}

export interface ClientRequestBody {
  id?: string;
  clientId?: string;
  /** @format date-time */
  clientIdIssuedAt?: string;
  clientSecret?: string;
  /** @format date-time */
  clientSecretExpiresAt?: string;
  clientName?: string;
  clientAuthenticationMethods?: string;
  authorizationGrantTypes?: string;
  redirectUris?: string;
  postLogoutRedirectUris?: string;
  scopes?: string;
  clientSettings?: string;
  tokenSettings?: string;
  enabled?: boolean;
  username?: string;
  authorities?: GrantedAuthority[];
  password?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
}

export interface ExamSessionRequestBody {
  /** @format int64 */
  id?: number;
  students?: string[];
  teacher?: ApplicationUser;
}

export interface ApplicationUserResponse {
  /** @format int32 */
  userId?: number;
  username?: string;
  password?: string;
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  /** @format int32 */
  id?: number;
}

export interface ExamRequestBody {
  /** @format int64 */
  id?: number;
  name?: string;
  username?: string;
  questions?: string[];
}

export interface QuestionRequestBody {
  /** @format int64 */
  id?: number;
  problem?: string;
  solution?: string;
  choices?: string[];
  exam?: string;
}

export interface QuestionResponse {
  /** @format int64 */
  id?: number;
  problem?: string;
  solution?: string;
  choices?: string[];
}

export interface RoleRequestBody {
  /** @format int32 */
  roleId?: number;
  authority?: string;
}

export interface StudentAnswerRequestBody {
  /** @format int64 */
  id?: number;
  student?: ApplicationUser;
  exam?: string;
  studentSolution?: string;
}

export interface ExamDTO {
  /** @format int64 */
  id?: number;
  name?: string;
  username?: string;
  questions?: QuestionDTO[];
}

export interface QuestionDTO {
  /** @format int64 */
  id?: number;
  problem?: string;
  solution?: string;
  choices?: string[];
}

export interface RegistrationDTO {
  username?: string;
  password?: string;
}

export interface LoginResponseDTO {
  user?: ApplicationUser;
  jwt?: string;
}

export interface Link {
  href?: string;
  hreflang?: string;
  title?: string;
  type?: string;
  deprecation?: string;
  profile?: string;
  name?: string;
  templated?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080/examer";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl http://localhost:8080/examer
 */
export class DomainApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  applicationUsers = {
    /**
     * @description get-applicationuser
     *
     * @tags application-user-entity-controller
     * @name GetCollectionResourceApplicationuserGet1
     * @request GET:/applicationUsers
     */
    getCollectionResourceApplicationuserGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelApplicationUser, any>({
        path: `/applicationUsers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PostCollectionResourceApplicationuserPost
     * @request POST:/applicationUsers
     */
    postCollectionResourceApplicationuserPost: (data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags application-user-search-controller
     * @name ExecuteSearchApplicationuserGet
     * @request GET:/applicationUsers/search/findByUsername
     */
    executeSearchApplicationuserGet: (
      query?: {
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelApplicationUser, void>({
        path: `/applicationUsers/search/findByUsername`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-applicationuser
     *
     * @tags application-user-entity-controller
     * @name GetItemResourceApplicationuserGet
     * @request GET:/applicationUsers/{id}
     */
    getItemResourceApplicationuserGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, void>({
        path: `/applicationUsers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PutItemResourceApplicationuserPut
     * @request PUT:/applicationUsers/{id}
     */
    putItemResourceApplicationuserPut: (id: string, data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-applicationuser
     *
     * @tags application-user-entity-controller
     * @name DeleteItemResourceApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}
     */
    deleteItemResourceApplicationuserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-applicationuser
     *
     * @tags application-user-entity-controller
     * @name PatchItemResourceApplicationuserPatch
     * @request PATCH:/applicationUsers/{id}
     */
    patchItemResourceApplicationuserPatch: (id: string, data: ApplicationUserRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelApplicationUser, any>({
        path: `/applicationUsers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name FollowPropertyReferenceApplicationuserGet1
     * @request GET:/applicationUsers/{id}/authorities
     */
    followPropertyReferenceApplicationuserGet1: (id: string, params: RequestParams = {}) =>
      this.request<CollectionModelRole, void>({
        path: `/applicationUsers/${id}/authorities`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name CreatePropertyReferenceApplicationuserPut
     * @request PUT:/applicationUsers/{id}/authorities
     */
    createPropertyReferenceApplicationuserPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelRole, any>({
        path: `/applicationUsers/${id}/authorities`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name DeletePropertyReferenceApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}/authorities
     */
    deletePropertyReferenceApplicationuserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}/authorities`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name CreatePropertyReferenceApplicationuserPatch
     * @request PATCH:/applicationUsers/{id}/authorities
     */
    createPropertyReferenceApplicationuserPatch: (
      id: string,
      data: CollectionModelObject,
      params: RequestParams = {},
    ) =>
      this.request<CollectionModelRole, any>({
        path: `/applicationUsers/${id}/authorities`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name FollowPropertyReferenceApplicationuserGet
     * @request GET:/applicationUsers/{id}/authorities/{propertyId}
     */
    followPropertyReferenceApplicationuserGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<CollectionModelRole, void>({
        path: `/applicationUsers/${id}/authorities/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role-by-applicationuser-Id
     *
     * @tags application-user-property-reference-controller
     * @name DeletePropertyReferenceIdApplicationuserDelete
     * @request DELETE:/applicationUsers/{id}/authorities/{propertyId}
     */
    deletePropertyReferenceIdApplicationuserDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applicationUsers/${id}/authorities/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  clients = {
    /**
     * @description get-client
     *
     * @tags client-entity-controller
     * @name GetCollectionResourceClientGet1
     * @request GET:/clients
     */
    getCollectionResourceClientGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelClient, any>({
        path: `/clients`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-client
     *
     * @tags client-entity-controller
     * @name PostCollectionResourceClientPost
     * @request POST:/clients
     */
    postCollectionResourceClientPost: (data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client-search-controller
     * @name ExecuteSearchClientGet
     * @request GET:/clients/search/findByClientId
     */
    executeSearchClientGet: (
      query?: {
        clientId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelClient, void>({
        path: `/clients/search/findByClientId`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-client
     *
     * @tags client-entity-controller
     * @name GetItemResourceClientGet
     * @request GET:/clients/{id}
     */
    getItemResourceClientGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelClient, void>({
        path: `/clients/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-client
     *
     * @tags client-entity-controller
     * @name PutItemResourceClientPut
     * @request PUT:/clients/{id}
     */
    putItemResourceClientPut: (id: string, data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-client
     *
     * @tags client-entity-controller
     * @name DeleteItemResourceClientDelete
     * @request DELETE:/clients/{id}
     */
    deleteItemResourceClientDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-client
     *
     * @tags client-entity-controller
     * @name PatchItemResourceClientPatch
     * @request PATCH:/clients/{id}
     */
    patchItemResourceClientPatch: (id: string, data: ClientRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelClient, any>({
        path: `/clients/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  examSessions = {
    /**
     * @description get-examsession
     *
     * @tags exam-session-entity-controller
     * @name GetCollectionResourceExamsessionGet1
     * @request GET:/examSessions
     */
    getCollectionResourceExamsessionGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelExamSession, any>({
        path: `/examSessions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-examsession
     *
     * @tags exam-session-entity-controller
     * @name PostCollectionResourceExamsessionPost
     * @request POST:/examSessions
     */
    postCollectionResourceExamsessionPost: (data: ExamSessionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExamSession, any>({
        path: `/examSessions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-examsession
     *
     * @tags exam-session-entity-controller
     * @name GetItemResourceExamsessionGet
     * @request GET:/examSessions/{id}
     */
    getItemResourceExamsessionGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelExamSession, void>({
        path: `/examSessions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-examsession
     *
     * @tags exam-session-entity-controller
     * @name PutItemResourceExamsessionPut
     * @request PUT:/examSessions/{id}
     */
    putItemResourceExamsessionPut: (id: string, data: ExamSessionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExamSession, any>({
        path: `/examSessions/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-examsession
     *
     * @tags exam-session-entity-controller
     * @name DeleteItemResourceExamsessionDelete
     * @request DELETE:/examSessions/{id}
     */
    deleteItemResourceExamsessionDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/examSessions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-examsession
     *
     * @tags exam-session-entity-controller
     * @name PatchItemResourceExamsessionPatch
     * @request PATCH:/examSessions/{id}
     */
    patchItemResourceExamsessionPatch: (id: string, data: ExamSessionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExamSession, any>({
        path: `/examSessions/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name FollowPropertyReferenceExamsessionGet1
     * @request GET:/examSessions/{id}/students
     */
    followPropertyReferenceExamsessionGet1: (id: string, params: RequestParams = {}) =>
      this.request<CollectionModelApplicationUser, void>({
        path: `/examSessions/${id}/students`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name CreatePropertyReferenceExamsessionPut
     * @request PUT:/examSessions/{id}/students
     */
    createPropertyReferenceExamsessionPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelApplicationUser, any>({
        path: `/examSessions/${id}/students`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name DeletePropertyReferenceExamsessionDelete
     * @request DELETE:/examSessions/{id}/students
     */
    deletePropertyReferenceExamsessionDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/examSessions/${id}/students`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name CreatePropertyReferenceExamsessionPatch
     * @request PATCH:/examSessions/{id}/students
     */
    createPropertyReferenceExamsessionPatch: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelApplicationUser, any>({
        path: `/examSessions/${id}/students`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name FollowPropertyReferenceExamsessionGet
     * @request GET:/examSessions/{id}/students/{propertyId}
     */
    followPropertyReferenceExamsessionGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<CollectionModelApplicationUser, void>({
        path: `/examSessions/${id}/students/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-applicationuser-by-examsession-Id
     *
     * @tags exam-session-property-reference-controller
     * @name DeletePropertyReferenceIdExamsessionDelete
     * @request DELETE:/examSessions/{id}/students/{propertyId}
     */
    deletePropertyReferenceIdExamsessionDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/examSessions/${id}/students/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  exams = {
    /**
     * @description get-exam
     *
     * @tags exam-entity-controller
     * @name GetCollectionResourceExamGet1
     * @request GET:/exams
     */
    getCollectionResourceExamGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelExam, any>({
        path: `/exams`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-exam
     *
     * @tags exam-entity-controller
     * @name PostCollectionResourceExamPost
     * @request POST:/exams
     */
    postCollectionResourceExamPost: (data: ExamRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/exams`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exam-search-controller
     * @name ExecuteSearchExamGet
     * @request GET:/exams/search/findByUsername
     */
    executeSearchExamGet: (
      query?: {
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelExam, void>({
        path: `/exams/search/findByUsername`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-exam
     *
     * @tags exam-entity-controller
     * @name GetItemResourceExamGet
     * @request GET:/exams/{id}
     */
    getItemResourceExamGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelExam, void>({
        path: `/exams/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-exam
     *
     * @tags exam-entity-controller
     * @name PutItemResourceExamPut
     * @request PUT:/exams/{id}
     */
    putItemResourceExamPut: (id: string, data: ExamRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/exams/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-exam
     *
     * @tags exam-entity-controller
     * @name DeleteItemResourceExamDelete
     * @request DELETE:/exams/{id}
     */
    deleteItemResourceExamDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/exams/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-exam
     *
     * @tags exam-entity-controller
     * @name PatchItemResourceExamPatch
     * @request PATCH:/exams/{id}
     */
    patchItemResourceExamPatch: (id: string, data: ExamRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/exams/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name FollowPropertyReferenceExamGet1
     * @request GET:/exams/{id}/questions
     */
    followPropertyReferenceExamGet1: (id: string, params: RequestParams = {}) =>
      this.request<CollectionModelQuestion, void>({
        path: `/exams/${id}/questions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name CreatePropertyReferenceExamPut
     * @request PUT:/exams/{id}/questions
     */
    createPropertyReferenceExamPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelQuestion, any>({
        path: `/exams/${id}/questions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name DeletePropertyReferenceExamDelete
     * @request DELETE:/exams/{id}/questions
     */
    deletePropertyReferenceExamDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/exams/${id}/questions`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name CreatePropertyReferenceExamPatch
     * @request PATCH:/exams/{id}/questions
     */
    createPropertyReferenceExamPatch: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<CollectionModelQuestion, any>({
        path: `/exams/${id}/questions`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name FollowPropertyReferenceExamGet
     * @request GET:/exams/{id}/questions/{propertyId}
     */
    followPropertyReferenceExamGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<CollectionModelQuestion, void>({
        path: `/exams/${id}/questions/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-question-by-exam-Id
     *
     * @tags exam-property-reference-controller
     * @name DeletePropertyReferenceIdExamDelete
     * @request DELETE:/exams/{id}/questions/{propertyId}
     */
    deletePropertyReferenceIdExamDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/exams/${id}/questions/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags profile-controller
     * @name ListAllFormsOfMetadata1
     * @request GET:/profile
     */
    listAllFormsOfMetadata1: (params: RequestParams = {}) =>
      this.request<RepresentationModelObject, any>({
        path: `/profile`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor111
     * @request GET:/profile/applicationUsers
     */
    descriptor111: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/applicationUsers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor112
     * @request GET:/profile/clients
     */
    descriptor112: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/clients`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor113
     * @request GET:/profile/examSessions
     */
    descriptor113: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/examSessions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor114
     * @request GET:/profile/exams
     */
    descriptor114: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/exams`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor115
     * @request GET:/profile/questions
     */
    descriptor115: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/questions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor116
     * @request GET:/profile/roles
     */
    descriptor116: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-controller
     * @name Descriptor117
     * @request GET:/profile/studentAnswers
     */
    descriptor117: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/profile/studentAnswers`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  questions = {
    /**
     * @description get-question
     *
     * @tags question-entity-controller
     * @name GetCollectionResourceQuestionGet1
     * @request GET:/questions
     */
    getCollectionResourceQuestionGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelQuestion, any>({
        path: `/questions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-question
     *
     * @tags question-entity-controller
     * @name PostCollectionResourceQuestionPost
     * @request POST:/questions
     */
    postCollectionResourceQuestionPost: (data: QuestionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelQuestion, any>({
        path: `/questions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-question
     *
     * @tags question-entity-controller
     * @name GetItemResourceQuestionGet
     * @request GET:/questions/{id}
     */
    getItemResourceQuestionGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelQuestion, void>({
        path: `/questions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-question
     *
     * @tags question-entity-controller
     * @name PutItemResourceQuestionPut
     * @request PUT:/questions/{id}
     */
    putItemResourceQuestionPut: (id: string, data: QuestionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelQuestion, any>({
        path: `/questions/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-question
     *
     * @tags question-entity-controller
     * @name DeleteItemResourceQuestionDelete
     * @request DELETE:/questions/{id}
     */
    deleteItemResourceQuestionDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/questions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-question
     *
     * @tags question-entity-controller
     * @name PatchItemResourceQuestionPatch
     * @request PATCH:/questions/{id}
     */
    patchItemResourceQuestionPatch: (id: string, data: QuestionRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelQuestion, any>({
        path: `/questions/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name FollowPropertyReferenceQuestionGet1
     * @request GET:/questions/{id}/exam
     */
    followPropertyReferenceQuestionGet1: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelExam, void>({
        path: `/questions/${id}/exam`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name CreatePropertyReferenceQuestionPut
     * @request PUT:/questions/{id}/exam
     */
    createPropertyReferenceQuestionPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/questions/${id}/exam`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name DeletePropertyReferenceQuestionDelete
     * @request DELETE:/questions/{id}/exam
     */
    deletePropertyReferenceQuestionDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/questions/${id}/exam`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name CreatePropertyReferenceQuestionPatch
     * @request PATCH:/questions/{id}/exam
     */
    createPropertyReferenceQuestionPatch: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/questions/${id}/exam`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name FollowPropertyReferenceQuestionGet
     * @request GET:/questions/{id}/exam/{propertyId}
     */
    followPropertyReferenceQuestionGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<EntityModelExam, void>({
        path: `/questions/${id}/exam/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-exam-by-question-Id
     *
     * @tags question-property-reference-controller
     * @name DeletePropertyReferenceIdQuestionDelete
     * @request DELETE:/questions/{id}/exam/{propertyId}
     */
    deletePropertyReferenceIdQuestionDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/questions/${id}/exam/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  roles = {
    /**
     * @description get-role
     *
     * @tags role-entity-controller
     * @name GetCollectionResourceRoleGet1
     * @request GET:/roles
     */
    getCollectionResourceRoleGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelRole, any>({
        path: `/roles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-role
     *
     * @tags role-entity-controller
     * @name PostCollectionResourceRolePost
     * @request POST:/roles
     */
    postCollectionResourceRolePost: (data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role-search-controller
     * @name ExecuteSearchRoleGet
     * @request GET:/roles/search/findByAuthority
     */
    executeSearchRoleGet: (
      query?: {
        authority?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityModelRole, void>({
        path: `/roles/search/findByAuthority`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get-role
     *
     * @tags role-entity-controller
     * @name GetItemResourceRoleGet
     * @request GET:/roles/{id}
     */
    getItemResourceRoleGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelRole, void>({
        path: `/roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-role
     *
     * @tags role-entity-controller
     * @name PutItemResourceRolePut
     * @request PUT:/roles/{id}
     */
    putItemResourceRolePut: (id: string, data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-role
     *
     * @tags role-entity-controller
     * @name DeleteItemResourceRoleDelete
     * @request DELETE:/roles/{id}
     */
    deleteItemResourceRoleDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-role
     *
     * @tags role-entity-controller
     * @name PatchItemResourceRolePatch
     * @request PATCH:/roles/{id}
     */
    patchItemResourceRolePatch: (id: string, data: RoleRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelRole, any>({
        path: `/roles/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  studentAnswers = {
    /**
     * @description get-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name GetCollectionResourceStudentanswerGet1
     * @request GET:/studentAnswers
     */
    getCollectionResourceStudentanswerGet1: (
      query?: {
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * The size of the page to be returned
         * @min 1
         * @default 20
         */
        size?: number;
        /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedModelEntityModelStudentAnswer, any>({
        path: `/studentAnswers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description create-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name PostCollectionResourceStudentanswerPost
     * @request POST:/studentAnswers
     */
    postCollectionResourceStudentanswerPost: (data: StudentAnswerRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelStudentAnswer, any>({
        path: `/studentAnswers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name GetItemResourceStudentanswerGet
     * @request GET:/studentAnswers/{id}
     */
    getItemResourceStudentanswerGet: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelStudentAnswer, void>({
        path: `/studentAnswers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name PutItemResourceStudentanswerPut
     * @request PUT:/studentAnswers/{id}
     */
    putItemResourceStudentanswerPut: (id: string, data: StudentAnswerRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelStudentAnswer, any>({
        path: `/studentAnswers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name DeleteItemResourceStudentanswerDelete
     * @request DELETE:/studentAnswers/{id}
     */
    deleteItemResourceStudentanswerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/studentAnswers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-studentanswer
     *
     * @tags student-answer-entity-controller
     * @name PatchItemResourceStudentanswerPatch
     * @request PATCH:/studentAnswers/{id}
     */
    patchItemResourceStudentanswerPatch: (id: string, data: StudentAnswerRequestBody, params: RequestParams = {}) =>
      this.request<EntityModelStudentAnswer, any>({
        path: `/studentAnswers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name FollowPropertyReferenceStudentanswerGet1
     * @request GET:/studentAnswers/{id}/exam
     */
    followPropertyReferenceStudentanswerGet1: (id: string, params: RequestParams = {}) =>
      this.request<EntityModelExam, void>({
        path: `/studentAnswers/${id}/exam`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description update-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name CreatePropertyReferenceStudentanswerPut
     * @request PUT:/studentAnswers/{id}/exam
     */
    createPropertyReferenceStudentanswerPut: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/studentAnswers/${id}/exam`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description delete-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name DeletePropertyReferenceStudentanswerDelete
     * @request DELETE:/studentAnswers/{id}/exam
     */
    deletePropertyReferenceStudentanswerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/studentAnswers/${id}/exam`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description patch-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name CreatePropertyReferenceStudentanswerPatch
     * @request PATCH:/studentAnswers/{id}/exam
     */
    createPropertyReferenceStudentanswerPatch: (id: string, data: CollectionModelObject, params: RequestParams = {}) =>
      this.request<EntityModelExam, any>({
        path: `/studentAnswers/${id}/exam`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description get-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name FollowPropertyReferenceStudentanswerGet
     * @request GET:/studentAnswers/{id}/exam/{propertyId}
     */
    followPropertyReferenceStudentanswerGet: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<EntityModelExam, void>({
        path: `/studentAnswers/${id}/exam/${propertyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description delete-exam-by-studentanswer-Id
     *
     * @tags student-answer-property-reference-controller
     * @name DeletePropertyReferenceIdStudentanswerDelete
     * @request DELETE:/studentAnswers/{id}/exam/{propertyId}
     */
    deletePropertyReferenceIdStudentanswerDelete: (id: string, propertyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/studentAnswers/${id}/exam/${propertyId}`,
        method: "DELETE",
        ...params,
      }),
  };
  solvables = {
    /**
     * No description
     *
     * @tags solvable-controller
     * @name Answer
     * @request PUT:/solvables/{solvableId}/answer/{answer}
     */
    answer: (solvableId: number, answer: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/solvables/${solvableId}/answer/${answer}`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  };
  exam = {
    /**
     * No description
     *
     * @tags exam-controller
     * @name CreateExamList
     * @request POST:/exam/questions
     */
    createExamList: (data: ExamDTO[], params: RequestParams = {}) =>
      this.request<ExamDTO[], any>({
        path: `/exam/questions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exam-controller
     * @name GetExamsByUsername
     * @request GET:/exam/custom/questions/{username}
     */
    getExamsByUsername: (username: string, params: RequestParams = {}) =>
      this.request<ExamDTO[], any>({
        path: `/exam/custom/questions/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags authentication-controller
     * @name RegisterUser
     * @request POST:/auth/register
     */
    registerUser: (data: RegistrationDTO, params: RequestParams = {}) =>
      this.request<ApplicationUser, any>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authentication-controller
     * @name LoginUser
     * @request POST:/auth/login
     */
    loginUser: (data: RegistrationDTO, params: RequestParams = {}) =>
      this.request<LoginResponseDTO, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user-controller
     * @name HelloUserController
     * @request GET:/user/
     */
    helloUserController: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  client = {
    /**
     * No description
     *
     * @tags client-controller
     * @name Login
     * @request GET:/client/login
     */
    login: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/client/login`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin-controller
     * @name HelloAdmineController
     * @request GET:/admin/
     */
    helloAdmineController: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
