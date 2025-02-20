export interface Vote {
  message: string;
  id: number;
  image_id: string;
  value: number;
  country_code: string;
}

export interface VoteRequest {
  image_id: string;
  sub_id?: string;
  value: number;
}
