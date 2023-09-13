import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type Filterings = {
  filteringId: string;
  setFilteringId: React.Dispatch<React.SetStateAction<string>>;
};

type FilteringContextType = Filterings | null;

const FilteringContext = createContext<FilteringContextType>(null);

export const useFiltering = (): Filterings => {
  const context = useContext(FilteringContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type FilteringProviderProps = {
  children: ReactNode;
};

function FilteringProvider({ children }: FilteringProviderProps) {
  const [filteringId, setFilteringId] = useState('');

  const contextValue = useMemo(
    () => ({ filteringId, setFilteringId }),
    [filteringId],
  );

  return (
    <FilteringContext.Provider value={contextValue}>
      {children}
    </FilteringContext.Provider>
  );
}
export default FilteringProvider;
