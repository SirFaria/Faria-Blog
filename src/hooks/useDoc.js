import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../lib/Firebase.js";

const useDoc = (collectionName, docId) => {
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const colRef = doc(db, collectionName, docId);
    getDoc(colRef)
      .then(snapshot => {
        setData(snapshot.data());
        setIsPending(false);
      })
      .catch(err => {
        console.log(err.message)
      });
  }, [collectionName, docId]);

  return { data, isPending }


}

export default useDoc;