import {
  AdminCreateAmenityDocument,
  type AdminCreateAmenityInput,
  AdminMarkAmenityAsActiveDocument,
  AdminMarkAmenityAsInactiveDocument,
  AdminUpdateAmenityDocument,
  type AdminUpdateAmenityInput,
  client,
  FindAmenityDocument,
  getAuthorization,
  ListAmenitiesDocument,
  type Pagination,
  type AmenityFilters,
  type AmenitiesFilters,
} from "@/lib";

const findAmenity = async (filters: AmenityFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindAmenityDocument,
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

const listAmenities = async (
  filters: AmenitiesFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListAmenitiesDocument,
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

const createAmenity = async (input: AdminCreateAmenityInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminCreateAmenityDocument,
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

const updateAmenity = async (
  filters: AmenityFilters,
  input: AdminUpdateAmenityInput,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminUpdateAmenityDocument,
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

const markAmenityAsActive = async (filters: AmenityFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkAmenityAsActiveDocument,
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

const markAmenityAsInactive = async (filters: AmenityFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkAmenityAsInactiveDocument,
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

const deleteAmenity = () => {};
const createAmenityMetadata = () => {};
const getAmenityMetadata = () => {};
export {
  createAmenity,
  createAmenityMetadata,
  deleteAmenity,
  findAmenity,
  getAmenityMetadata,
  listAmenities,
  markAmenityAsActive,
  markAmenityAsInactive,
  updateAmenity,
};
