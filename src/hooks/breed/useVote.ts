import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWRMutation from "swr/mutation";

import { setNextPageIndex } from "../../redux/features/pagination/paginationSlice";
import { RootState } from "../../redux/store";
import { TypeVote, VoteRequest } from "../../types";
import { postVote } from "../../server/votesApi";
import { setIsLoading } from "../../redux/features/loading/globalLoadingSlice";

const useVote = () => {
  const breed = useSelector((state: RootState) => state.dogBreed.breed);
  const dispatch = useDispatch();
  const { trigger, isMutating: isLoading } = useSWRMutation(["/votes"], (_, { arg }: { arg: VoteRequest }) => postVote(arg));

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading, dispatch]);

  const submitVote = async (type: TypeVote) => {
    if (breed) {
      const payload: VoteRequest = { image_id: breed.image.id, sub_id: breed.image.id, value: type };
      await trigger(payload);

      dispatch(setNextPageIndex());
    }
  };

  return { breed, submitVote, isLoading };
};

export default useVote;
