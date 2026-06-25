import {
  AdminCreateSubregionDocument,
  type AdminCreateSubregionInput,
  AdminMarkSubregionAsActiveDocument,
  AdminMarkSubregionAsInactiveDocument,
  AdminUpdateSubregionDocument,
  type AdminUpdateSubregionInput,
  client,
  FindSubregionDocument,
  getAuthorization,
  ListSubregionsDocument,
  type Pagination,
  type SubregionFilters,
  type SubregionsFilters,
} from "@/lib";

const findSubregion = async (filters: SubregionFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindSubregionDocument,
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

const listSubregions = async (
  filters: SubregionsFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListSubregionsDocument,
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

const createSubregion = async (input: AdminCreateSubregionInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminCreateSubregionDocument,
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

const updateSubregion = async (
  filters: SubregionFilters,
  input: AdminUpdateSubregionInput,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminUpdateSubregionDocument,
    fetchPolicy: "no-cache",
    variables: {
      filters,
      input,
      pagination,
    },
    context: {
      headers: {
        ...authorization,
      },
    },
  });
};

const markSubregionAsActive = async (filters: SubregionFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkSubregionAsActiveDocument,
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

const markSubregionAsInactive = async (filters: SubregionFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkSubregionAsInactiveDocument,
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

const deleteSubregion = () => {};
const createSubregionMetadata = () => {};
const getSubregionMetadata = () => {};
export {
  createSubregion,
  createSubregionMetadata,
  deleteSubregion,
  findSubregion,
  getSubregionMetadata,
  listSubregions,
  markSubregionAsActive,
  markSubregionAsInactive,
  updateSubregion,
};
