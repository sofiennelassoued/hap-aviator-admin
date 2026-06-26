import {
  client,
  CreateOfferProposalDocument,
  FindOfferProposalDocument,
  getAuthorization,
  ListOfferProposalsDocument,
  UpdateOfferProposalDocument,
  type CreateOfferProposalInput,
  type OfferProposalFilters,
  type OfferProposalsFilters,
  type Pagination,
  type UpdateOfferProposalInput,
} from "@/lib";

const findOfferProposal = async (filters: OfferProposalFilters) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: FindOfferProposalDocument,
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

const listOfferProposals = async (
  filters: OfferProposalsFilters,
  pagination?: Pagination
) => {
  const authorization = await getAuthorization();
  return await client.query({
    query: ListOfferProposalsDocument,
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

const createOfferProposal = async (input: CreateOfferProposalInput) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: CreateOfferProposalDocument,
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

const updateOfferProposal = async (
  filters: OfferProposalFilters,
  input: UpdateOfferProposalInput
) => {
  const authorization = await getAuthorization();
  return await client.mutate({
    mutation: UpdateOfferProposalDocument,
    fetchPolicy: "no-cache",
    variables: {
      filters,
      input,
    },
    context: {
      headers: {
        ...authorization,
      },
    },
  });
};

export {
  createOfferProposal,
  findOfferProposal,
  listOfferProposals,
  updateOfferProposal,
};
