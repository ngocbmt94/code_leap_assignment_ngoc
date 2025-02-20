import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import useSWR from "swr";

import { getDogBreedDetail } from "../../server/dogsApi";
import Loading from "../../components/ui/Loading";
import Error from "../../components/ui/Error";

const Detail: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const id = Number(params.id);
  const shouldFetch = !isNaN(id) && id > 0;

  const { data, isLoading, error } = useSWR(shouldFetch ? ["/breeds/detail", id] : null, () => getDogBreedDetail(id));

  const handleBack = () => {
    navigate("/");
  };

  if (!isLoading && !data) return <Error message={error?.message || "Something went wrong while fetching the breed detail page."} />;
  if (isLoading) return <Loading />;
  return (
    <div className="card-detail">
      <button onClick={handleBack}> &#8592; BACK</button>
      <h1>Breed Detail</h1>
      <p>Breed Name : {data?.name}</p>
      <p>Breed For : {data?.bred_for}</p>
      <p>
        Weight and Height: {data?.weight?.metric}kg - {data?.height?.metric}cm
      </p>
      <p>Temperament : {data?.temperament}</p>
      <p>Life Span : {data?.life_span}</p>
    </div>
  );
};

export default Detail;
