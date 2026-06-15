"use client";

import Button from "@/components/ui/Button";

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
  error: string | null;
};

function DeleteProductModal({isOpen,onClose,onConfirm,isLoading,error,}: DeleteModalProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-zinc-100">
          Delete Product
        </h2>

        <p className="mt-2 text-zinc-400">
          Are you sure you want to delete this product?
          This action cannot be undone.
        </p>

        {error && (
          <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Button
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>

          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-red-600 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;