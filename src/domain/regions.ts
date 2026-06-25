import {
  AdminCreateRegionDocument,
  type AdminCreateRegionInput,
  AdminDeleteRegionDocument,
  AdminMarkRegionAsActiveDocument,
  AdminMarkRegionAsInactiveDocument,
  AdminUpdateRegionDocument,
  type AdminUpdateRegionInput,
  client,
  FindRegionDocument,
  getAuthorization,
  ListRegionsDocument,
  type Pagination,
  type RegionFilters,
  type RegionsFilters,
} from "@/lib";

const findRegion = async (filters: RegionFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindRegionDocument,
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

const listRegions = async (
  filters: RegionsFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListRegionsDocument,
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

const createRegion = async (input: AdminCreateRegionInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminCreateRegionDocument,
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

const updateRegion = async (
  filters: RegionFilters,
  input: AdminUpdateRegionInput,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminUpdateRegionDocument,
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

const markRegionAsActive = async (filters: RegionFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkRegionAsActiveDocument,
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

const markRegionAsInactive = async (filters: RegionFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkRegionAsInactiveDocument,
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

const deleteRegion = async (filters: RegionFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminDeleteRegionDocument,
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

export {
  createRegion,
  deleteRegion,
  findRegion,
  listRegions,
  markRegionAsActive,
  markRegionAsInactive,
  updateRegion,
};
