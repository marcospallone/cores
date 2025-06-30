"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.white[900],
        opacity: loading ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <Image
        src="/assets/logo-header.svg"
        alt="Logo"
        width={700}
        height={350}
      />
      <Box
        sx={{
          width: theme.spacing(400),
          height: theme.spacing(4),
          background: theme.palette.white[900],
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: theme.palette.primary.main,
            transformOrigin: "left",
            animation: "loaderBar 2s infinite",
          }}
        ></Box>
      </Box>

      <style jsx>{`
        @keyframes loaderBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </Box>
  );
}
