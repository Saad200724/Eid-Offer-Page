import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type OrderInput, type OrderResponse, type ValidationError } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateOrder() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation<OrderResponse, Error, OrderInput>({
    mutationFn: async (data: OrderInput) => {
      // The schema may require totalAmount as integer, we coerce if needed
      const payload = {
        ...data,
        totalAmount: Math.round(Number(data.totalAmount))
      };

      const res = await fetch(api.orders.create.path, {
        method: api.orders.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json() as ValidationError;
          throw new Error(error.message || "Invalid order details");
        }
        throw new Error("Failed to place order. Please try again.");
      }

      return await res.json() as OrderResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/orders"] });
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      toast({
        title: "Order Placed",
        description: "Your order has been placed successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Order Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
