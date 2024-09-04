import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Search from "../components/search";

export default function Home() {
  const myStyle = {
    backgroundColor: "orange",
    minHeight: "100vh",
  };

  return (
    <ChakraProvider>
      <div style={myStyle}>
        <Head>
          <title>Weather App</title>
          <meta name="description" content="An app showing weather details" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box>
          <Search />
        </Box>
      </div>
    </ChakraProvider>
  );
}
