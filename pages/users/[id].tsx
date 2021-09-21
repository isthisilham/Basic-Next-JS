import { useRouter } from "next/router"

import Layout from "../../components/Layout";

export default function DetailUser() {
    const route = useRouter();
    const { id } = route.query;
    return (
        <Layout>
            <p>Detail User Page { id } </p>
        </Layout>
    )
}
