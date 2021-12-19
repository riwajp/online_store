import {
  Container,
  FormBox,
  Title,
  Label,
  Input,
  Button,
  Error,
} from "./Styles/CheckOut.styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { NotifiersAdd } from "../Actions";
import { CartAdd } from "../Actions";
import { useNavigate } from "react-router-dom";
import { CartToogle } from "../Actions";
import { useEffect } from "react";

const CheckOut = () => {
  useEffect(() => dispatch(CartToogle(false)));
  const dispatch = useDispatch();
  var notifications = useSelector((state) => state.Notifiers);
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.address) {
      errors.address = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.number) {
      errors.number = "Required";
    } else if (!/[0-9]{10}/i.test(values.number)) {
      errors.number = "Invalid Number";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",

      address: "",
      number: "",
      date: "12/34/32",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      var notification = "Orders Placed.";
      notification = [...notifications, notification];

      var cart_new = [];
      dispatch(CartAdd(cart_new));
      dispatch(NotifiersAdd(notification));
      navigate("/");
    },
  });

  return (
    <Container>
      <FormBox>
        <Title>Check Out</Title>

        <form>
          <Label>Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
          <Label>Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}

          <Label>Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            required
          />
          {formik.errors.address ? (
            <Error>{formik.errors.address}</Error>
          ) : null}
          <Label>Phone Number</Label>
          <Input
            type="text"
            id="number"
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            type="tel"
            pattern="[0-9]{10}"
            required
          />
          {formik.errors.number ? <Error>{formik.errors.number}</Error> : null}

          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
        </form>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </FormBox>
    </Container>
  );
};
export default CheckOut;
