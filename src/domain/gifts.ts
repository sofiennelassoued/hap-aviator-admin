import {
  AdminCreateGiftDocument,
  type AdminCreateGiftInput,
  AdminMarkGiftAsActiveDocument,
  AdminMarkGiftAsInactiveDocument,
  AdminUpdateGiftDocument,
  type AdminUpdateGiftInput,
  client,
  FindGiftDocument,
  getAuthorization,
  ListGiftsDocument,
  type Pagination,
  type GiftFilters,
  type GiftsFilters,
} from "@/lib";

const findGift = async (filters: GiftFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindGiftDocument,
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

const listGifts = async (
  filters: GiftsFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListGiftsDocument,
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

const createGift = async (input: AdminCreateGiftInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminCreateGiftDocument,
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

const updateGift = async (
  filters: GiftFilters,
  input: AdminUpdateGiftInput,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminUpdateGiftDocument,
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

const markGiftAsActive = async (filters: GiftFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkGiftAsActiveDocument,
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

const markGiftAsInactive = async (filters: GiftFilters) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: AdminMarkGiftAsInactiveDocument,
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

const deleteGift = () => {};
const createGiftMetadata = () => {};
const getGiftMetadata = () => {};
export {
  createGift,
  createGiftMetadata,
  deleteGift,
  findGift,
  getGiftMetadata,
  listGifts,
  markGiftAsActive,
  markGiftAsInactive,
  updateGift,
};
