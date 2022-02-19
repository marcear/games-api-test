import { Input, Select, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const currentFilters = {
  searchText: "",
  selectedOrder: "name",
};

const Filters = ({ handleApplyFilters }) => {
  const [filters, setFilters] = useState(currentFilters);
  const [f, setF] = useState(currentFilters);

  const handleUpdateFilters = (field, value) => {
    const current = { ...filters };
    current[field] = value;
    setFilters(current);
  };

  useEffect(() => {
    handleApplyFilters(filters);
  }, [filters]);

  return (
    <Stack direction="row" marginTop={10} marginBottom={10}>
      <Stack>
        <Select
          value={filters.selectedOrder}
          onChange={({ target }) => handleUpdateFilters("selectedOrder", target.value)}
        >
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </Select>
      </Stack>
      <Stack>
        <Input
          type="text"
          value={filters.searchText}
          onChange={({ target }) => handleUpdateFilters("searchText", target.value)}
          placeholder="filter"
        />
      </Stack>
    </Stack>
  );
};

export default Filters;
