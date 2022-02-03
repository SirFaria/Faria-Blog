import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../lib/Firebase.js";
const useCollection = (collectionName) => {

  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const colRef = collection(db, collectionName);
    const q = query(colRef, orderBy("date"));
    getDocs(q)
      .then(snapshot => {
        const blogs = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        })
        setData(blogs);
        setIsPending(false);
      })
      .catch(err => {
        console.log(err.message)
      });
  }, [collectionName]);



  // console.log(data);

  return { data, isPending };
}

export default useCollection;
