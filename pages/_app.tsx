import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Navbar from "@/components/Navbar";
import theme from "@/util/chakra/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <LoginModal />
      <RegisterModal />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
