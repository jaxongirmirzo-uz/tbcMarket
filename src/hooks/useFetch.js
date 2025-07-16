import { useEffect, useState } from "react";
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("something went wrong");
        }
        const data = await req.json();
        setIsPending(false);
        setData(data);
      } catch {
        console.log("hatolik bor");
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, isPending };
}
