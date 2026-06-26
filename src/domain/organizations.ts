import {
  client,
  CreateOrganizationDocument,
  FindOrganizationDocument,
  getAuthorization,
  ListOrganizationsDocument,
  type CreateOrganizationInput,
  type OrganizationFilters,
  type OrganizationsFilters,
  type Pagination,
} from "@/lib";

const findOrganization = async (filters: OrganizationFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindOrganizationDocument,
    fetchPolicy: "no-cache",
    variables: {
      filters,
    },
    context: {
      headers: {
        ...authorization,
      },
    },
  });
};

const listOrganizations = async (
  filters: OrganizationsFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListOrganizationsDocument,
    fetchPolicy: "no-cache",
    variables: {
      filters,
      pagination,
    },
    context: {
      headers: {
        ...authorization,
      },
    },
  });
};

const createOrganization = async (input: CreateOrganizationInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: CreateOrganizationDocument,
    fetchPolicy: "no-cache",
    variables: {
      input,
    },
    context: {
      headers: {
        ...authorization,
      },
    },
  });
};
export const getOrganizationMetadata = () => {};
export { createOrganization, findOrganization, listOrganizations };
