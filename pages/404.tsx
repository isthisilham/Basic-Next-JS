import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">OPPSSS.......</h1>
      <h1 className="title-not-found">Halaman tidak ditemukan</h1>
    </div>
  );
}
