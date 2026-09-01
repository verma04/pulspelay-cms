import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";

import Loading from "../Loading/Loading";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ColorPicker from "@components/comman/color-picker/ColorPicker";
import { LoadingButton } from "@mui/lab";
import { useGetAllClient } from "@apolloo/actions";
import ImageUploadLabel from "./ImageUploadLabel";
import { useEditHomePageWork } from "@apolloo/actions/homePage/homepage";

export default function Edit({ region }: any) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(region.status);
  const { data, loading: load } = useGetAllClient();
  const handleClickOpen = () => {
    setOpen(region.id);
  };
  const [category, setCategory] = React.useState(region.work?.id);
  const [color, setColor] = React.useState(region.color);
  const [img, setImage] = React.useState(region.image);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [add, { data: data2, error, loading }] = useEditHomePageWork();

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    add({
      variables: {
        image: img,
        id: region.id,
        work: category,
        color,
      },
    });
  };

  React.useEffect(() => {
    {
      data2 && setOpen(false);
    }
  }, [data2]);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open === region.id} onClose={handleClose}>
        <form style={{ width: "35rem" }} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>

            <FormControl sx={{ m: 1, mt: 5, width: "47%" }}>
              <InputLabel id="demo-simple-select-disabled-label">
                Category
              </InputLabel>

              <>
                <Select
                  displayEmpty
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  {data?.getAllClients?.map((t: any, key: any) => (
                    <MenuItem key={key} value={t.id}>
                      {t.projectName}
                    </MenuItem>
                  ))}
                </Select>
              </>
            </FormControl>
            <Box mt="2rem" className="input-field">
              <InputLabel id="demo-simple-select-disabled-label">
                ColorCode
              </InputLabel>
              <ColorPicker state={color} setState={setColor} />
              <input
                style={{ marginTop: "1rem" }}
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
              {/* {errors.projectName && (
          <span id="error">
            <Danger /> <li> Color Code is required</li>
          </span>
        )} */}
            </Box>
            <ImageUploadLabel
              img={img}
              setImage={setImage}
              name={"Branding Image"}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {loading ? (
              <LoadingButton loading variant="outlined">
                Fetch data
              </LoadingButton>
            ) : (
              <>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
