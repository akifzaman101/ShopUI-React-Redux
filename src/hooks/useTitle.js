import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `ShopUI | ${title}`
  },[title]);

  return null;
}
