"use client";

import { useRef } from "react";
import { useIsMobile } from "./useIsMobile";

/** Snapshot mobile once known — prevents 3D buffer resize on breakpoint changes */
export function useLockedMobile() {
  const isMobile = useIsMobile();
  const locked = useRef<boolean | null>(null);
  if (locked.current === null && isMobile !== null) {
    locked.current = isMobile;
  }
  return locked.current === true;
}
