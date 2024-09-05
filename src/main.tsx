import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from "../theme.ts";
import './index.css'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              <ReactQueryDevtools />
          </QueryClientProvider>
      </ChakraProvider>
  </StrictMode>,
)
