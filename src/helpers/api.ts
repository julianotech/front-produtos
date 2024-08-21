import { TypedDocumentNode } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useQuery, useMutation, QueryVariables, MaybeLazyOrRef } from "villus";

export async function runQuery<Output>(
  query: string | DocumentNode | TypedDocumentNode<any, QueryVariables>,
  variables?: MaybeLazyOrRef<QueryVariables> | undefined
): Promise<Output> {
  if (variables) {
    const { data } = (await useQuery<Output>({
      query,
      variables,
    }).execute());

    if (data) {
      return data;
    }
  }
  const { data } = (await useQuery<Output>({
    query,
  }).execute()) as {
    data: Output;
  };
  if (data) {
    return data;
  }
  throw new Error("Error on query");
}

export async function runMutation(
  query: string | DocumentNode | TypedDocumentNode<any, QueryVariables>,
  variables?: MaybeLazyOrRef<QueryVariables> | undefined
): Promise<Record<string, Record<string, string>>> {
  if (variables) {
    const { data } = (await useMutation(query).execute(variables)) as {
      data: Record<string, Record<string, string>>;
    };
    return data;
  }

  const { data } = (await useMutation(query)) as unknown as {
    data: Record<string, Record<string, string>>;
  };
  return data;
}
