import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "lzm85iu2oli4",
  accessToken: "Sa0R5MfTl3uWqbIh3hk8aEBuBIMh-RAUnMmv6OVym6E",
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portofolio" });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return { title, url, id, img };
      });
      setData(projects);

      setIsLoading(false);
    } catch (error) {
      console.log(error.data);

      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { isLoading, data };
};
