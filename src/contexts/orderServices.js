import apiClient from "../utils/api-client";

export function checkoutAPI() {
    return apiClient.post("/order/checkout");
}

// ("/order/checkout")-this is an endpoint, we wnt to get checkout service from this place


