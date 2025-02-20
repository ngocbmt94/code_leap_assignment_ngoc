import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";

import { RootState } from "../../redux/store";
import { setDogBreeds } from "../../redux/features/dogBreed/dogBreedSlice";
import { setIsLoading } from "../../redux/features/loading/globalLoadingSlice";
import { getDogBreeds } from "../../server/dogsApi";

const useBreeds = () => {
  const { pageIndex, pageSize } = useSelector((state: RootState) => state.pagination);
  const { data, isLoading, error } = useSWR(["/breeds", pageIndex, pageSize], () => getDogBreeds(pageSize, pageIndex));

  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setDogBreeds(data[0]));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  return { data, isLoading, error, pageIndex, pageSize };
};

export default useBreeds;
