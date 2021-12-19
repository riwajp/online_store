import {
  Container,
  FilterBtn,
  CancelBtn,
  Input,
  Done,
} from "./Styles/Filter.styles";
import { useSelector, useDispatch } from "react-redux";
import { FilterToogle } from "../Actions";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Filter = () => {
  const filterState = useSelector((state) => state.FilterState);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      minPrice: null,
      maxPrice: null,
      minDate: null,
      maxDate: null,
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      var minPrice = values.minPrice;
      var maxPrice = values.maxPrice;

      if (minPrice === null || minPrice === "") {
        minPrice = 0;
      }
      if (maxPrice === null || maxPrice === "") {
        maxPrice = 99999999;
      }
      dispatch(
        FilterToogle({
          state: filterState.state,
          filters: { minPrice: minPrice, maxPrice: maxPrice },
        })
      );
    },
  });

  return (
    <Container>
      {filterState.state === false ? (
        <FilterBtn
          onClick={() =>
            dispatch(
              FilterToogle({ state: true, filters: filterState.filters })
            )
          }
        >
          Filter
        </FilterBtn>
      ) : (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item sm={3} md={3}>
                <CancelBtn
                  onClick={() =>
                    dispatch(
                      FilterToogle({
                        state: false,
                        filters: filterState.filters,
                      })
                    )
                  }
                >
                  Cancel
                </CancelBtn>
              </Grid>

              <Grid item sm={3} lg={2}>
                <Input
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.minPrice}
                  placeholder="Minimum Price"
                />
              </Grid>
              <Grid item sm={3} lg={2}>
                <Input
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.maxPrice}
                  placeholder="Maximum Price"
                />
              </Grid>
              <Grid item xs={2}>
                <Done
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                >
                  Done
                </Done>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </Container>
  );
};

export default Filter;
