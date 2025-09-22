import { useEffect, useState } from "react";

type ImageLoaderResult = {
  loaded: boolean;
  failed: boolean;
};

const useImageLoader = (src: string | null | undefined): ImageLoaderResult => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoaded(false);
    setFailed(false);

    if (!src) {
      setLoaded(true);
      setFailed(true);
      return () => {
        isMounted = false;
      };
    }

    if (typeof window === "undefined") {
      setLoaded(true);
      return () => {
        isMounted = false;
      };
    }

    const image = new Image();

    const handleLoad = (): void => {
      if (!isMounted) {
        return;
      }
      setLoaded(true);
    };

    const handleError = (): void => {
      if (!isMounted) {
        return;
      }
      setLoaded(true);
      setFailed(true);
    };

    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    image.src = src;

    return () => {
      isMounted = false;
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [src]);

  return { loaded, failed };
};

export default useImageLoader;
