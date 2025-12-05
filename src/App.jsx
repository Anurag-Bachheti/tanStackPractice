import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

// Pages
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import FetchOld from './pages/FetchOld';
import FetchRQ from './pages/FetchRQ';

// CSS
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/old",
        element: <FetchOld />
      },
      {
        path: "/new",
        element: <FetchRQ />
      },
    ],
  },
]);

  const queryClient = new QueryClient({
    // defaultOptions:{
      // queries:{
        // staleTime: 30000,
        // gcTime: 30000,
        // refetchOnWindowFocus: false,
      // },
    // },
  }
);

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  
const App = () => {
  
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => { console.log("Cache successfully restored from localStorage");
  }}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

export default App
