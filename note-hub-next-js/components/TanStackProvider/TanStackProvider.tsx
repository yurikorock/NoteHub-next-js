'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//QueryClient - керує кешем, мутаціями, завантаженнями тощо
//QueryClientProvider - обгортка яка дає доступ до queryClient усім дочірнім компонентам

type Props = {
  children: React.ReactNode;
};

const TanStackProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default TanStackProvider;