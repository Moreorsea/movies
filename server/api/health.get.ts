import type { HealthResponse } from "../../shared/types/api";

export default defineEventHandler((_event): HealthResponse => {
	return {
		hello: "world",
	};
});
