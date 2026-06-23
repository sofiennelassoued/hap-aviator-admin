import {
  AdminCreateCountryDocument,
  type AdminCreateCountryInput,
  AdminMarkCountryAsActiveDocument,
  AdminMarkCountryAsInactiveDocument,
  AdminUpdateCountryDocument,
  type AdminUpdateCountryInput,
  client,
  type CountriesFilters,
  type CountryFilters,
  FindCountryDocument,
  getAuthorization,
  ListCountriesDocument,
  type Pagination,
} from "@/lib";

const findCountry = async (filters: CountryFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindCountryDocument,
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

const listCountries = async (
  filters: CountriesFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListCountriesDocument,
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

const createCountry = async (input: AdminCreateCountryInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminCreateCountryDocument,
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

const updateCountry = async (
  filters: CountryFilters,
  input: AdminUpdateCountryInput,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminUpdateCountryDocument,
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

const markCountryAsActive = async (filters: CountryFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkCountryAsActiveDocument,
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

const markCountryAsInactive = async (filters: CountryFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkCountryAsInactiveDocument,
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

const deleteCountry = () => {};
const createCountryMetadata = () => {};
const getCountryMetadata = () => {};
export {
  createCountry,
  createCountryMetadata,
  deleteCountry,
  findCountry,
  getCountryMetadata,
  listCountries,
  markCountryAsActive,
  markCountryAsInactive,
  updateCountry,
};
