import { useCallback, useState } from "react";
import { GameResponse } from "../types/types";

export const useFetch = (initialState: {
  status: "idle" | "pending" | "success";
  data: GameResponse | null;
  error: any;
}) => {
  const [status, setStatus] = useState(initialState.status);
  const [data, setData] = useState(initialState.data);
  const [error, setError] = useState(initialState.error);

  const asyncFn = useCallback(
    (promise: Promise<GameResponse>) => {
      if (!promise || !promise.then) {
        throw new Error("Error");
      }
      setStatus("pending");

      return promise.then(
        (data) => {
          setData(data);
          setStatus("success");
          return data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );
    },
    [setData, setError]
  );

  return { asyncFn, data, status, error };
};
