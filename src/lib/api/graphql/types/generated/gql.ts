/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query FindCountry($filters: CountryFilters!) {\n  findCountry(filters: $filters) {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nquery ListCountries($filters: CountriesFilters!, $pagination: Pagination) {\n  listCountries(filters: $filters, pagination: $pagination) {\n    items {\n      id\n      label\n      status\n      createdAt\n      createdBy\n      updatedAt\n    }\n    metadata {\n      total\n      page\n      offset\n    }\n  }\n}\n\nmutation AdminCreateCountry($input: AdminCreateCountryInput!) {\n  adminCreateCountry(input: $input) {\n    id\n  }\n}\n\nmutation AdminUpdateCountry($filters: CountryFilters!, $input: AdminUpdateCountryInput!, $pagination: Pagination) {\n  adminUpdateCountry(filters: $filters, input: $input, pagination: $pagination)\n}\n\nmutation AdminMarkCountryAsActive($filters: CountryFilters!) {\n  adminMarkCountryAsActive(filters: $filters)\n}\n\nmutation AdminMarkCountryAsInactive($filters: CountryFilters!) {\n  adminMarkCountryAsInactive(filters: $filters)\n}\n\nsubscription OnCountryCreated {\n  onCountryCreated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryUpdated {\n  onCountryUpdated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryMarkedAsActive {\n  onCountryMarkedAsActive\n}\n\nsubscription OnCountryMarkedAsInactive {\n  onCountryMarkedAsInactive\n}": typeof types.FindCountryDocument,
};
const documents: Documents = {
    "query FindCountry($filters: CountryFilters!) {\n  findCountry(filters: $filters) {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nquery ListCountries($filters: CountriesFilters!, $pagination: Pagination) {\n  listCountries(filters: $filters, pagination: $pagination) {\n    items {\n      id\n      label\n      status\n      createdAt\n      createdBy\n      updatedAt\n    }\n    metadata {\n      total\n      page\n      offset\n    }\n  }\n}\n\nmutation AdminCreateCountry($input: AdminCreateCountryInput!) {\n  adminCreateCountry(input: $input) {\n    id\n  }\n}\n\nmutation AdminUpdateCountry($filters: CountryFilters!, $input: AdminUpdateCountryInput!, $pagination: Pagination) {\n  adminUpdateCountry(filters: $filters, input: $input, pagination: $pagination)\n}\n\nmutation AdminMarkCountryAsActive($filters: CountryFilters!) {\n  adminMarkCountryAsActive(filters: $filters)\n}\n\nmutation AdminMarkCountryAsInactive($filters: CountryFilters!) {\n  adminMarkCountryAsInactive(filters: $filters)\n}\n\nsubscription OnCountryCreated {\n  onCountryCreated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryUpdated {\n  onCountryUpdated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryMarkedAsActive {\n  onCountryMarkedAsActive\n}\n\nsubscription OnCountryMarkedAsInactive {\n  onCountryMarkedAsInactive\n}": types.FindCountryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindCountry($filters: CountryFilters!) {\n  findCountry(filters: $filters) {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nquery ListCountries($filters: CountriesFilters!, $pagination: Pagination) {\n  listCountries(filters: $filters, pagination: $pagination) {\n    items {\n      id\n      label\n      status\n      createdAt\n      createdBy\n      updatedAt\n    }\n    metadata {\n      total\n      page\n      offset\n    }\n  }\n}\n\nmutation AdminCreateCountry($input: AdminCreateCountryInput!) {\n  adminCreateCountry(input: $input) {\n    id\n  }\n}\n\nmutation AdminUpdateCountry($filters: CountryFilters!, $input: AdminUpdateCountryInput!, $pagination: Pagination) {\n  adminUpdateCountry(filters: $filters, input: $input, pagination: $pagination)\n}\n\nmutation AdminMarkCountryAsActive($filters: CountryFilters!) {\n  adminMarkCountryAsActive(filters: $filters)\n}\n\nmutation AdminMarkCountryAsInactive($filters: CountryFilters!) {\n  adminMarkCountryAsInactive(filters: $filters)\n}\n\nsubscription OnCountryCreated {\n  onCountryCreated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryUpdated {\n  onCountryUpdated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryMarkedAsActive {\n  onCountryMarkedAsActive\n}\n\nsubscription OnCountryMarkedAsInactive {\n  onCountryMarkedAsInactive\n}"): (typeof documents)["query FindCountry($filters: CountryFilters!) {\n  findCountry(filters: $filters) {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nquery ListCountries($filters: CountriesFilters!, $pagination: Pagination) {\n  listCountries(filters: $filters, pagination: $pagination) {\n    items {\n      id\n      label\n      status\n      createdAt\n      createdBy\n      updatedAt\n    }\n    metadata {\n      total\n      page\n      offset\n    }\n  }\n}\n\nmutation AdminCreateCountry($input: AdminCreateCountryInput!) {\n  adminCreateCountry(input: $input) {\n    id\n  }\n}\n\nmutation AdminUpdateCountry($filters: CountryFilters!, $input: AdminUpdateCountryInput!, $pagination: Pagination) {\n  adminUpdateCountry(filters: $filters, input: $input, pagination: $pagination)\n}\n\nmutation AdminMarkCountryAsActive($filters: CountryFilters!) {\n  adminMarkCountryAsActive(filters: $filters)\n}\n\nmutation AdminMarkCountryAsInactive($filters: CountryFilters!) {\n  adminMarkCountryAsInactive(filters: $filters)\n}\n\nsubscription OnCountryCreated {\n  onCountryCreated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryUpdated {\n  onCountryUpdated {\n    id\n    label\n    status\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n\nsubscription OnCountryMarkedAsActive {\n  onCountryMarkedAsActive\n}\n\nsubscription OnCountryMarkedAsInactive {\n  onCountryMarkedAsInactive\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;