/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AdminCreateCountryInput = {
  code: string;
  label: string;
};

export type AdminCreateRegionInput = {
  label: string;
};

export type AdminUpdateCountryInput = {
  code?: string | null | undefined;
  label?: string | null | undefined;
};

export type AdminUpdateRegionInput = {
  label: string;
};

export type CountriesFilters = {
  status?: CountryStatus | null | undefined;
};

export type CountryFilters = {
  id: string;
};

export type CountryStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type Pagination = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  page?: number | null | undefined;
  sortBy?: string | null | undefined;
  sortDirection?: SortDirection | null | undefined;
};

export type RegionFilters = {
  id: string;
};

export type RegionStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type RegionsFilters = {
  status?: RegionStatus | null | undefined;
};

export type SortDirection =
  | 'asc'
  | 'desc';

export type FindCountryQueryVariables = Exact<{
  filters: CountryFilters;
}>;


export type FindCountryQuery = { findCountry: { id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } };

export type ListCountriesQueryVariables = Exact<{
  filters: CountriesFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListCountriesQuery = { listCountries: { items: Array<{ id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type AdminCreateCountryMutationVariables = Exact<{
  input: AdminCreateCountryInput;
}>;


export type AdminCreateCountryMutation = { adminCreateCountry: { id: string } };

export type AdminUpdateCountryMutationVariables = Exact<{
  filters: CountryFilters;
  input: AdminUpdateCountryInput;
  pagination?: Pagination | null | undefined;
}>;


export type AdminUpdateCountryMutation = { adminUpdateCountry: boolean };

export type AdminMarkCountryAsActiveMutationVariables = Exact<{
  filters: CountryFilters;
}>;


export type AdminMarkCountryAsActiveMutation = { adminMarkCountryAsActive: boolean };

export type AdminMarkCountryAsInactiveMutationVariables = Exact<{
  filters: CountryFilters;
}>;


export type AdminMarkCountryAsInactiveMutation = { adminMarkCountryAsInactive: boolean };

export type OnCountryCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryCreatedSubscription = { onCountryCreated: { id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnCountryUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryUpdatedSubscription = { onCountryUpdated: { id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnCountryMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryMarkedAsActiveSubscription = { onCountryMarkedAsActive: unknown };

export type OnCountryMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryMarkedAsInactiveSubscription = { onCountryMarkedAsInactive: unknown };

export type FindRegionQueryVariables = Exact<{
  filters: RegionFilters;
}>;


export type FindRegionQuery = { findRegion: { id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } };

export type ListRegionsQueryVariables = Exact<{
  filters: RegionsFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListRegionsQuery = { listRegions: { items: Array<{ id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type AdminCreateRegionMutationVariables = Exact<{
  input: AdminCreateRegionInput;
}>;


export type AdminCreateRegionMutation = { adminCreateRegion: { id: string } };

export type AdminUpdateRegionMutationVariables = Exact<{
  filters: RegionFilters;
  input: AdminUpdateRegionInput;
  pagination?: Pagination | null | undefined;
}>;


export type AdminUpdateRegionMutation = { adminUpdateRegion: boolean };

export type AdminMarkRegionAsActiveMutationVariables = Exact<{
  filters: RegionFilters;
}>;


export type AdminMarkRegionAsActiveMutation = { adminMarkRegionAsActive: boolean };

export type AdminMarkRegionAsInactiveMutationVariables = Exact<{
  filters: RegionFilters;
}>;


export type AdminMarkRegionAsInactiveMutation = { adminMarkRegionAsInactive: boolean };

export type OnRegionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionCreatedSubscription = { onRegionCreated: { id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnRegionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionUpdatedSubscription = { onRegionUpdated: { id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnRegionMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionMarkedAsActiveSubscription = { onRegionMarkedAsActive: unknown };

export type OnRegionMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionMarkedAsInactiveSubscription = { onRegionMarkedAsInactive: unknown };


export const FindCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindCountryQuery, FindCountryQueryVariables>;
export const ListCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountriesFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCountries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListCountriesQuery, ListCountriesQueryVariables>;
export const AdminCreateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateCountryMutation, AdminCreateCountryMutationVariables>;
export const AdminUpdateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateCountryInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateCountryMutation, AdminUpdateCountryMutationVariables>;
export const AdminMarkCountryAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkCountryAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkCountryAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkCountryAsActiveMutation, AdminMarkCountryAsActiveMutationVariables>;
export const AdminMarkCountryAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkCountryAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkCountryAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkCountryAsInactiveMutation, AdminMarkCountryAsInactiveMutationVariables>;
export const OnCountryCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnCountryCreatedSubscription, OnCountryCreatedSubscriptionVariables>;
export const OnCountryUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnCountryUpdatedSubscription, OnCountryUpdatedSubscriptionVariables>;
export const OnCountryMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnCountryMarkedAsActiveSubscription, OnCountryMarkedAsActiveSubscriptionVariables>;
export const OnCountryMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnCountryMarkedAsInactiveSubscription, OnCountryMarkedAsInactiveSubscriptionVariables>;
export const FindRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindRegionQuery, FindRegionQueryVariables>;
export const ListRegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListRegions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionsFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listRegions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListRegionsQuery, ListRegionsQueryVariables>;
export const AdminCreateRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateRegionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateRegionMutation, AdminCreateRegionMutationVariables>;
export const AdminUpdateRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateRegionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateRegionMutation, AdminUpdateRegionMutationVariables>;
export const AdminMarkRegionAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkRegionAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkRegionAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkRegionAsActiveMutation, AdminMarkRegionAsActiveMutationVariables>;
export const AdminMarkRegionAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkRegionAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkRegionAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkRegionAsInactiveMutation, AdminMarkRegionAsInactiveMutationVariables>;
export const OnRegionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnRegionCreatedSubscription, OnRegionCreatedSubscriptionVariables>;
export const OnRegionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnRegionUpdatedSubscription, OnRegionUpdatedSubscriptionVariables>;
export const OnRegionMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnRegionMarkedAsActiveSubscription, OnRegionMarkedAsActiveSubscriptionVariables>;
export const OnRegionMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnRegionMarkedAsInactiveSubscription, OnRegionMarkedAsInactiveSubscriptionVariables>;