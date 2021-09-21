import { useRouter } from "next/router"
export default function DetailUser() {
    const route = useRouter();
    const { id } = route.query;
    return (
        <div>
            <p>Detail User Page { id } </p>
        </div>
    )
}
