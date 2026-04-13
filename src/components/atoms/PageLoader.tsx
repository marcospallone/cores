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
        px: { xs: 2, sm: 3 },
        gap: { xs: 3, sm: 4 },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Image
        src="/assets/logo-header.svg"
        alt="Logo"
        width={700}
        height={350}
        style={{
          width: "min(78vw, 700px)",
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <Box
        sx={{
          width: { xs: "72vw", sm: theme.spacing(280), lg: theme.spacing(400) },
          maxWidth: "100%",
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
