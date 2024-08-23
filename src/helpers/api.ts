import type { MaybeRef, Operation, QueryVariables } from 'villus';

export async function query<T>(options: {
  query: MaybeRef<Operation<any, QueryVariables>['query']>;
  variables?: QueryVariables | undefined;
}): Promise<T> {
  try {
    const { data } = (await useQuery(options).execute()) as { data: T };

    const result = computed(() => data);
    return result.value;
  } catch (e) {
    console.log(e);
    return {} as T;
  }
}

export async function mutation<T, V extends QueryVariables>(
  mutation: Operation<T, V>['query'],
  variables?: V,
): Promise<T> {
  try {
    const { data } = (await useMutation(mutation).execute(variables)) as {
      data: T;
    };
    const result = computed(() => data);
    return result.value;
  } catch (e) {
    console.log(e);
    return {} as T;
  }
}
