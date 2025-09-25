export const dynamicParams = false; // dynamicParams false hain toh joh generateStaticParams me id de hain bs unko pre-render kr lega or other id ko 404 page show karega but true hain to generatestatic params function ke alwa ki id mein v content show karega pr voh request demand pr hogi pre-build/render nhi hogi

//this function pre-render the dynamic rendering items
export async function generateStaticParams() {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<h1>
			Product {id} details rendered at {new Date().toLocaleTimeString()}
		</h1>
	);
}
