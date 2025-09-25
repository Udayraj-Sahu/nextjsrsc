import "server-only";
import { serverSideFuction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";
export default function ServerRoutePage() {
	const result = serverSideFuction();
	return (
		<>
			<h1>Server Route {result}</h1>;
			<ImageSlider />
		</>
	);
}
