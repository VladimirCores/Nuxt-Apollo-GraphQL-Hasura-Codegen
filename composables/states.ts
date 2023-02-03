import { Ref } from 'vue';
import { Author, useAuthorQuery } from '@/apollo/client';
interface IAuthorsState {
  list: Array<Author>;
  loading: Ref<boolean>;
  restart:() => void;
  fetchMore:(params: any) => any;
  error: Ref<any | null>
}
export const useAuthors = () => {
  const state = useState<IAuthorsState>('authors');
  if (!state.value) {
    const { result, loading, restart, error, onResult, fetchMore } = useAuthorQuery();
    onResult(() => {
      state.value.list = result.value?.author || [];
    });
    state.value = { list: [], loading, restart, error, fetchMore };
  }
  return state;
};
