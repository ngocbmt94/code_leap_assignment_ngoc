import { DogBreed } from "../types";
import { apiClient } from "./api";

export const getDogBreeds = async (limit: number = 1, page: number = 0): Promise<DogBreed[]> => {
  const response = await apiClient.get(`/breeds?limit=${limit}&page=${page}`);
  return response.data;
};

export const getDogBreedDetail = async (id: number): Promise<DogBreed> => {
  const response = await apiClient.get(`/breeds/${id}`);
  return response.data;
};
