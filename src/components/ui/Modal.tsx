"use client";

import type { ReactNode } from "react";
import Button from "./Button";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        aria-modal="true"
        className="w-full max-w-lg rounded-lg border border-white/10 bg-[var(--surface)] p-6 shadow-xl"
        role="dialog"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>
          <Button
            aria-label="Close modal"
            onClick={onClose}
            type="button"
            variant="secondary"
          >
            Close
          </Button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
