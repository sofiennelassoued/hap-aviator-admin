/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AdminCreateAmenityInput = {
  label: string;
};

export type AdminCreateCountryInput = {
  code: string;
  label: string;
};

export type AdminCreateGiftInput = {
  label: string;
};

export type AdminCreateRegionInput = {
  countryId: string;
  label: string;
};

export type AdminCreateSubregionInput = {
  label: string;
  regionId: string;
};

export type AdminUpdateAmenityInput = {
  label: string;
};

export type AdminUpdateCountryInput = {
  code?: string | null | undefined;
  label?: string | null | undefined;
};

export type AdminUpdateGiftInput = {
  label: string;
};

export type AdminUpdateRegionInput = {
  label: string;
};

export type AdminUpdateSubregionInput = {
  label: string;
};

export type AmenitiesFilters = {
  status?: AmenityStatus | null | undefined;
};

export type AmenityFilters = {
  id: string;
};

export type AmenityStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type CountriesFilters = {
  status?: CountryStatus | null | undefined;
};

export type CountryFilters = {
  id: string;
};

export type CountryStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type CreateOfferProposalInput = {
  description?: string | null | undefined;
  label: string;
};

export type GiftFilters = {
  id: string;
};

export type GiftStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type GiftsFilters = {
  status?: GiftStatus | null | undefined;
};

export type OfferProposalFilters = {
  id: string;
};

export type OfferProposalStatus =
  | 'ACCEPTED'
  | 'ARCHIVED'
  | 'DRAFT'
  | 'PUBLISHED'
  | 'REJECTED';

export type OfferProposalsFilters = {
  status?: OfferProposalStatus | null | undefined;
};

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

export type SubregionFilters = {
  id: string;
};

export type SubregionStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export type SubregionsFilters = {
  status?: SubregionStatus | null | undefined;
};

export type UpdateOfferProposalInput = {
  description?: string | null | undefined;
  label: string;
};

export type FindAmenityQueryVariables = Exact<{
  filters: AmenityFilters;
}>;


export type FindAmenityQuery = { findAmenity: { id: string, label: string | null, icon: string | null, status: AmenityStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } };

export type ListAmenitiesQueryVariables = Exact<{
  filters: AmenitiesFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListAmenitiesQuery = { listAmenities: { items: Array<{ id: string, label: string | null, icon: string | null, status: AmenityStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type AdminCreateAmenityMutationVariables = Exact<{
  input: AdminCreateAmenityInput;
}>;


export type AdminCreateAmenityMutation = { adminCreateAmenity: { id: string } };

export type AdminUpdateAmenityMutationVariables = Exact<{
  filters: AmenityFilters;
  input: AdminUpdateAmenityInput;
  pagination?: Pagination | null | undefined;
}>;


export type AdminUpdateAmenityMutation = { adminUpdateAmenity: boolean };

export type AdminMarkAmenityAsActiveMutationVariables = Exact<{
  filters: AmenityFilters;
}>;


export type AdminMarkAmenityAsActiveMutation = { adminMarkAmenityAsActive: boolean };

export type AdminMarkAmenityAsInactiveMutationVariables = Exact<{
  filters: AmenityFilters;
}>;


export type AdminMarkAmenityAsInactiveMutation = { adminMarkAmenityAsInactive: boolean };

export type OnAmenityCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnAmenityCreatedSubscription = { onAmenityCreated: { id: string, label: string | null, status: AmenityStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnAmenityUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnAmenityUpdatedSubscription = { onAmenityUpdated: { id: string, label: string | null, status: AmenityStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnAmenityMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnAmenityMarkedAsActiveSubscription = { onAmenityMarkedAsActive: unknown };

export type OnAmenityMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnAmenityMarkedAsInactiveSubscription = { onAmenityMarkedAsInactive: unknown };

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

export type AdminDeleteCountryMutationVariables = Exact<{
  filters: CountryFilters;
}>;


export type AdminDeleteCountryMutation = { adminDeleteCountry: boolean };

export type OnCountryCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryCreatedSubscription = { onCountryCreated: { id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnCountryUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryUpdatedSubscription = { onCountryUpdated: { id: string, label: string | null, code: string | null, status: CountryStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnCountryMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryMarkedAsActiveSubscription = { onCountryMarkedAsActive: unknown };

export type OnCountryMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCountryMarkedAsInactiveSubscription = { onCountryMarkedAsInactive: unknown };

export type FindGiftQueryVariables = Exact<{
  filters: GiftFilters;
}>;


export type FindGiftQuery = { findGift: { id: string, label: string | null, status: GiftStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } };

export type ListGiftsQueryVariables = Exact<{
  filters: GiftsFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListGiftsQuery = { listGifts: { items: Array<{ id: string, label: string | null, status: GiftStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type AdminCreateGiftMutationVariables = Exact<{
  input: AdminCreateGiftInput;
}>;


export type AdminCreateGiftMutation = { adminCreateGift: { id: string } };

export type AdminUpdateGiftMutationVariables = Exact<{
  filters: GiftFilters;
  input: AdminUpdateGiftInput;
  pagination?: Pagination | null | undefined;
}>;


export type AdminUpdateGiftMutation = { adminUpdateGift: boolean };

export type AdminMarkGiftAsActiveMutationVariables = Exact<{
  filters: GiftFilters;
}>;


export type AdminMarkGiftAsActiveMutation = { adminMarkGiftAsActive: boolean };

export type AdminMarkGiftAsInactiveMutationVariables = Exact<{
  filters: GiftFilters;
}>;


export type AdminMarkGiftAsInactiveMutation = { adminMarkGiftAsInactive: boolean };

export type OnGiftCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnGiftCreatedSubscription = { onGiftCreated: { id: string, label: string | null, status: GiftStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnGiftUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnGiftUpdatedSubscription = { onGiftUpdated: { id: string, label: string | null, status: GiftStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnGiftMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnGiftMarkedAsActiveSubscription = { onGiftMarkedAsActive: unknown };

export type OnGiftMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnGiftMarkedAsInactiveSubscription = { onGiftMarkedAsInactive: unknown };

export type FindOfferProposalQueryVariables = Exact<{
  filters: OfferProposalFilters;
}>;


export type FindOfferProposalQuery = { findOfferProposal: { id: string, label: string | null, status: OfferProposalStatus | null } };

export type ListOfferProposalsQueryVariables = Exact<{
  filters: OfferProposalsFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListOfferProposalsQuery = { listOfferProposals: { items: Array<{ id: string, label: string | null, status: OfferProposalStatus | null }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type CreateOfferProposalMutationVariables = Exact<{
  input: CreateOfferProposalInput;
}>;


export type CreateOfferProposalMutation = { createOfferProposal: { id: string } };

export type UpdateOfferProposalMutationVariables = Exact<{
  filters: OfferProposalFilters;
  input: UpdateOfferProposalInput;
}>;


export type UpdateOfferProposalMutation = { updateOfferProposal: boolean };

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

export type AdminDeleteRegionMutationVariables = Exact<{
  filters: RegionFilters;
}>;


export type AdminDeleteRegionMutation = { adminDeleteRegion: boolean };

export type AdminMarkRegionAsInactiveMutationVariables = Exact<{
  filters: RegionFilters;
}>;


export type AdminMarkRegionAsInactiveMutation = { adminMarkRegionAsInactive: boolean };

export type OnRegionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionCreatedSubscription = { onRegionCreated: { id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnRegionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionUpdatedSubscription = { onRegionUpdated: { id: string, label: string | null, status: RegionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnRegionDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionDeletedSubscription = { onRegionDeleted: unknown };

export type OnRegionMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionMarkedAsActiveSubscription = { onRegionMarkedAsActive: unknown };

export type OnRegionMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionMarkedAsInactiveSubscription = { onRegionMarkedAsInactive: unknown };

export type FindSubregionQueryVariables = Exact<{
  filters: SubregionFilters;
}>;


export type FindSubregionQuery = { findSubregion: { id: string, label: string | null, regionId: string | null, status: SubregionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } };

export type ListSubregionsQueryVariables = Exact<{
  filters: SubregionsFilters;
  pagination?: Pagination | null | undefined;
}>;


export type ListSubregionsQuery = { listSubregions: { items: Array<{ id: string, regionId: string | null, label: string | null, status: SubregionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown }> | null, metadata: { total: number | null, page: number | null, offset: number | null } } };

export type AdminCreateSubregionMutationVariables = Exact<{
  input: AdminCreateSubregionInput;
}>;


export type AdminCreateSubregionMutation = { adminCreateSubregion: { id: string } };

export type AdminUpdateSubregionMutationVariables = Exact<{
  filters: SubregionFilters;
  input: AdminUpdateSubregionInput;
  pagination?: Pagination | null | undefined;
}>;


export type AdminUpdateSubregionMutation = { adminUpdateSubregion: boolean };

export type AdminMarkSubregionAsActiveMutationVariables = Exact<{
  filters: SubregionFilters;
}>;


export type AdminMarkSubregionAsActiveMutation = { adminMarkSubregionAsActive: boolean };

export type AdminMarkSubregionAsInactiveMutationVariables = Exact<{
  filters: SubregionFilters;
}>;


export type AdminMarkSubregionAsInactiveMutation = { adminMarkSubregionAsInactive: boolean };

export type OnSubregionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnSubregionCreatedSubscription = { onSubregionCreated: { id: string, label: string | null, status: SubregionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnSubregionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnSubregionUpdatedSubscription = { onSubregionUpdated: { id: string, label: string | null, status: SubregionStatus, createdAt: unknown, createdBy: string | null, updatedAt: unknown } | null };

export type OnSubregionMarkedAsActiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnSubregionMarkedAsActiveSubscription = { onSubregionMarkedAsActive: unknown };

export type OnSubregionMarkedAsInactiveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnSubregionMarkedAsInactiveSubscription = { onSubregionMarkedAsInactive: unknown };


export const FindAmenityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAmenity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AmenityFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAmenity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindAmenityQuery, FindAmenityQueryVariables>;
export const ListAmenitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAmenities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AmenitiesFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAmenities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListAmenitiesQuery, ListAmenitiesQueryVariables>;
export const AdminCreateAmenityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateAmenity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateAmenityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateAmenity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateAmenityMutation, AdminCreateAmenityMutationVariables>;
export const AdminUpdateAmenityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateAmenity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AmenityFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateAmenityInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateAmenity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateAmenityMutation, AdminUpdateAmenityMutationVariables>;
export const AdminMarkAmenityAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkAmenityAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AmenityFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkAmenityAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkAmenityAsActiveMutation, AdminMarkAmenityAsActiveMutationVariables>;
export const AdminMarkAmenityAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkAmenityAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AmenityFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkAmenityAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkAmenityAsInactiveMutation, AdminMarkAmenityAsInactiveMutationVariables>;
export const OnAmenityCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnAmenityCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onAmenityCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnAmenityCreatedSubscription, OnAmenityCreatedSubscriptionVariables>;
export const OnAmenityUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnAmenityUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onAmenityUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnAmenityUpdatedSubscription, OnAmenityUpdatedSubscriptionVariables>;
export const OnAmenityMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnAmenityMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onAmenityMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnAmenityMarkedAsActiveSubscription, OnAmenityMarkedAsActiveSubscriptionVariables>;
export const OnAmenityMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnAmenityMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onAmenityMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnAmenityMarkedAsInactiveSubscription, OnAmenityMarkedAsInactiveSubscriptionVariables>;
export const FindCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindCountryQuery, FindCountryQueryVariables>;
export const ListCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountriesFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCountries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListCountriesQuery, ListCountriesQueryVariables>;
export const AdminCreateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateCountryMutation, AdminCreateCountryMutationVariables>;
export const AdminUpdateCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateCountryInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateCountryMutation, AdminUpdateCountryMutationVariables>;
export const AdminMarkCountryAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkCountryAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkCountryAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkCountryAsActiveMutation, AdminMarkCountryAsActiveMutationVariables>;
export const AdminMarkCountryAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkCountryAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkCountryAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkCountryAsInactiveMutation, AdminMarkCountryAsInactiveMutationVariables>;
export const AdminDeleteCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminDeleteCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminDeleteCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminDeleteCountryMutation, AdminDeleteCountryMutationVariables>;
export const OnCountryCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnCountryCreatedSubscription, OnCountryCreatedSubscriptionVariables>;
export const OnCountryUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnCountryUpdatedSubscription, OnCountryUpdatedSubscriptionVariables>;
export const OnCountryMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnCountryMarkedAsActiveSubscription, OnCountryMarkedAsActiveSubscriptionVariables>;
export const OnCountryMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnCountryMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onCountryMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnCountryMarkedAsInactiveSubscription, OnCountryMarkedAsInactiveSubscriptionVariables>;
export const FindGiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindGift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findGift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindGiftQuery, FindGiftQueryVariables>;
export const ListGiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListGifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftsFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listGifts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListGiftsQuery, ListGiftsQueryVariables>;
export const AdminCreateGiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateGift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateGiftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateGift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateGiftMutation, AdminCreateGiftMutationVariables>;
export const AdminUpdateGiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateGift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateGiftInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateGift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateGiftMutation, AdminUpdateGiftMutationVariables>;
export const AdminMarkGiftAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkGiftAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkGiftAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkGiftAsActiveMutation, AdminMarkGiftAsActiveMutationVariables>;
export const AdminMarkGiftAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkGiftAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkGiftAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkGiftAsInactiveMutation, AdminMarkGiftAsInactiveMutationVariables>;
export const OnGiftCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnGiftCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onGiftCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnGiftCreatedSubscription, OnGiftCreatedSubscriptionVariables>;
export const OnGiftUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnGiftUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onGiftUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnGiftUpdatedSubscription, OnGiftUpdatedSubscriptionVariables>;
export const OnGiftMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnGiftMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onGiftMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnGiftMarkedAsActiveSubscription, OnGiftMarkedAsActiveSubscriptionVariables>;
export const OnGiftMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnGiftMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onGiftMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnGiftMarkedAsInactiveSubscription, OnGiftMarkedAsInactiveSubscriptionVariables>;
export const FindOfferProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOfferProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OfferProposalFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOfferProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindOfferProposalQuery, FindOfferProposalQueryVariables>;
export const ListOfferProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListOfferProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OfferProposalsFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listOfferProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListOfferProposalsQuery, ListOfferProposalsQueryVariables>;
export const CreateOfferProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOfferProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOfferProposalInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOfferProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOfferProposalMutation, CreateOfferProposalMutationVariables>;
export const UpdateOfferProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOfferProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OfferProposalFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOfferProposalInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOfferProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateOfferProposalMutation, UpdateOfferProposalMutationVariables>;
export const FindRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindRegionQuery, FindRegionQueryVariables>;
export const ListRegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListRegions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionsFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listRegions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListRegionsQuery, ListRegionsQueryVariables>;
export const AdminCreateRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateRegionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateRegionMutation, AdminCreateRegionMutationVariables>;
export const AdminUpdateRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateRegionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateRegionMutation, AdminUpdateRegionMutationVariables>;
export const AdminMarkRegionAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkRegionAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkRegionAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkRegionAsActiveMutation, AdminMarkRegionAsActiveMutationVariables>;
export const AdminDeleteRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminDeleteRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminDeleteRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminDeleteRegionMutation, AdminDeleteRegionMutationVariables>;
export const AdminMarkRegionAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkRegionAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkRegionAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkRegionAsInactiveMutation, AdminMarkRegionAsInactiveMutationVariables>;
export const OnRegionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnRegionCreatedSubscription, OnRegionCreatedSubscriptionVariables>;
export const OnRegionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnRegionUpdatedSubscription, OnRegionUpdatedSubscriptionVariables>;
export const OnRegionDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionDeleted"}}]}}]} as unknown as DocumentNode<OnRegionDeletedSubscription, OnRegionDeletedSubscriptionVariables>;
export const OnRegionMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnRegionMarkedAsActiveSubscription, OnRegionMarkedAsActiveSubscriptionVariables>;
export const OnRegionMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnRegionMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onRegionMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnRegionMarkedAsInactiveSubscription, OnRegionMarkedAsInactiveSubscriptionVariables>;
export const FindSubregionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindSubregion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubregionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findSubregion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"regionId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindSubregionQuery, FindSubregionQueryVariables>;
export const ListSubregionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListSubregions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubregionsFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listSubregions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<ListSubregionsQuery, ListSubregionsQueryVariables>;
export const AdminCreateSubregionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCreateSubregion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateSubregionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCreateSubregion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminCreateSubregionMutation, AdminCreateSubregionMutationVariables>;
export const AdminUpdateSubregionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminUpdateSubregion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubregionFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateSubregionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUpdateSubregion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}]}]}}]} as unknown as DocumentNode<AdminUpdateSubregionMutation, AdminUpdateSubregionMutationVariables>;
export const AdminMarkSubregionAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkSubregionAsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubregionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkSubregionAsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkSubregionAsActiveMutation, AdminMarkSubregionAsActiveMutationVariables>;
export const AdminMarkSubregionAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminMarkSubregionAsInactive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubregionFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMarkSubregionAsInactive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}]}]}}]} as unknown as DocumentNode<AdminMarkSubregionAsInactiveMutation, AdminMarkSubregionAsInactiveMutationVariables>;
export const OnSubregionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnSubregionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSubregionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnSubregionCreatedSubscription, OnSubregionCreatedSubscriptionVariables>;
export const OnSubregionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnSubregionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSubregionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<OnSubregionUpdatedSubscription, OnSubregionUpdatedSubscriptionVariables>;
export const OnSubregionMarkedAsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnSubregionMarkedAsActive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSubregionMarkedAsActive"}}]}}]} as unknown as DocumentNode<OnSubregionMarkedAsActiveSubscription, OnSubregionMarkedAsActiveSubscriptionVariables>;
export const OnSubregionMarkedAsInactiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnSubregionMarkedAsInactive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSubregionMarkedAsInactive"}}]}}]} as unknown as DocumentNode<OnSubregionMarkedAsInactiveSubscription, OnSubregionMarkedAsInactiveSubscriptionVariables>;