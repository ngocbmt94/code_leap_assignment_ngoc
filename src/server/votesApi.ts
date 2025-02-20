import { Vote, VoteRequest } from "../types";
import { apiClient } from "./api";

export const getVotes = async () => {
  const response = await apiClient.get("/votes");
  return response.data;
};

export const postVote = async (payload: VoteRequest): Promise<Vote> => {
  const response = await apiClient.post("/votes", payload);
  return response.data;
};
