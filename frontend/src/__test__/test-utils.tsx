import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../services/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

const AllTheProviders = ({ children }: Props) => {
  const queryClient = createTestQueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>{children}</ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

type CustomRenderOptions = Parameters<typeof render>[1];

const customRender = (ui: React.ReactElement, options?: CustomRenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

// override render method
export { customRender as render };
