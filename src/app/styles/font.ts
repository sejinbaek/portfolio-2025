import { Shrikhand } from "next/font/google";
import localFont from "next/font/local";

export const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-shrikhand",
});

export const pretendard = localFont({
  src: "../../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: [
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "Noto Sans KR",
    "Segoe UI",
    "Helvetica",
    "sans-serif",
  ],
  weight: "45 920",
  variable: "--font-pretendard",
});

export const paperlogy = localFont({
  src: "../../assets/fonts/Paperlogy-5Medium.ttf",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: [
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "Noto Sans KR",
    "Segoe UI",
    "Helvetica",
    "sans-serif",
  ],
  variable: "--font-paperlogy",
});
